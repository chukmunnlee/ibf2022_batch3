package ibf2022.batch3.csf.day36.weatherserver.services;

import java.io.StringReader;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import jakarta.json.Json;
import jakarta.json.JsonObject;
import jakarta.json.JsonReader;

import ibf2022.batch3.csf.day36.weatherserver.models.WeatherInfo;;

@Service
public class WeatherService {

	public static final String URL = "https://api.openweathermap.org/data/2.5/weather";

	@Value("${openweathermap.key}")
	private String appId;

	public List<WeatherInfo> getWeather(String city, String units) throws WeatherException {
		
		//https://api.openweathermap.org/data/2.5/weather?q=<city>&units=<units>&appid=<appid>
		String url = UriComponentsBuilder.fromUriString(URL)
			.queryParam("q", city.replaceAll(" ", "+"))
			.queryParam("units", units)
			.queryParam("appid", appId)
			.toUriString();

		RequestEntity<Void> req = RequestEntity.get(url)
			.accept(MediaType.APPLICATION_JSON)
			.build();

		RestTemplate template = new RestTemplate();
		ResponseEntity<String> resp = null;
		try {
			resp = template.exchange(req, String.class);
		} catch (RestClientException ex) {
			// any status code not in 200, 300
			throw new WeatherException(ex.getMessage());
		}

		String payload = resp.getBody();
		JsonReader reader = Json.createReader(new StringReader(payload));
		JsonObject data = reader.readObject();
		return data.getJsonArray("weather").stream()
			.map(v -> v.asJsonObject())
			.map(o -> new WeatherInfo(o.getString("main"), o.getString("description"), o.getString("icon")))
			.toList();
	}

}
