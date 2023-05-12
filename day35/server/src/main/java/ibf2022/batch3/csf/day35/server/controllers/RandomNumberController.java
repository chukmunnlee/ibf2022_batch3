package ibf2022.batch3.csf.day35.server.controllers;

import java.io.StringReader;
import java.security.SecureRandom;
import java.util.Date;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import ibf2022.batch3.csf.day35.server.services.RandomService;
import jakarta.json.Json;
import jakarta.json.JsonArrayBuilder;
import jakarta.json.JsonObject;
import jakarta.json.JsonReader;

@Controller
@RequestMapping(path="/api", produces = MediaType.APPLICATION_JSON_VALUE)
@CrossOrigin(origins = "http://localhost:4200")
public class RandomNumberController {

   @Autowired
   private RandomService randSvc;

   private Random rand = new SecureRandom();

   // GET /api/random?count=5
   @GetMapping(path="/random")
   @ResponseBody
   public ResponseEntity<String> getRandom(@RequestParam(defaultValue = "1") Integer count) {

      List<Integer> nums = randSvc.getRandomNumbers(0, 1000, 1);

      JsonArrayBuilder arrBuilder = Json.createArrayBuilder(nums);

      JsonObject resp = Json.createObjectBuilder()
            .add("numbers", arrBuilder.build())
            .add("timestamp", (new Date()).toString())
            .build();

      return ResponseEntity.ok(resp.toString());
   }

   // POST /api/random
   // Content-Type: application/json
   // { count: 10, min: -100, max: 100 }
   @PostMapping(path="/random", consumes = MediaType.APPLICATION_JSON_VALUE)
   @ResponseBody
   public ResponseEntity<String> postRandom(@RequestBody String payload) {
      JsonReader reader = Json.createReader(new StringReader(payload));
      JsonObject req = reader.readObject();
      int count = req.getInt("count", 1);
      int min = req.getInt("min", 0);
      int max = req.getInt("max", 10);

      List<Integer> nums = randSvc.getRandomNumbers(min, max, count);
      JsonArrayBuilder arrBuilder = Json.createArrayBuilder(nums);

      JsonObject resp = Json.createObjectBuilder()
            .add("numbers", arrBuilder.build())
            .add("timestamp", (new Date()).toString())
            .build();

      return ResponseEntity.ok(resp.toString());
   }

   // POST /api/random
   // Content-Type: application/x-www-form-urlencoded
   // count=10&min=-10&max=100
   @PostMapping(path="/random", consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
   @ResponseBody
   public ResponseEntity<String> postRandomForm(@RequestBody MultiValueMap<String, String> form) {

      System.out.printf(">>> in postRandomForm\n");

      int count = getValue(form.getFirst("count"), 1);
      int min = getValue(form.getFirst("min"), 0);
      int max = getValue(form.getFirst("max"), 10);

      List<Integer> nums = randSvc.getRandomNumbers(min, max, count);
      JsonArrayBuilder arrBuilder = Json.createArrayBuilder(nums);

      JsonObject resp = Json.createObjectBuilder()
            .add("numbers", arrBuilder.build())
            .add("timestamp", (new Date()).toString())
            .build();

      return ResponseEntity.ok(resp.toString());
   }

   private int getValue(String value, int defValue) {
      if (value.trim().length() <= 0 || (null == value))
         return defValue;
      return Integer.parseInt(value);
   }

   
}
