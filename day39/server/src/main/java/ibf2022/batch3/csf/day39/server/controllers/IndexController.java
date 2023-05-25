package ibf2022.batch3.csf.day39.server.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping
public class IndexController {

	@PostMapping(path="/login")
	public String postLogin(@RequestBody MultiValueMap<String, String> form
			, Model model) {
		String username = form.getFirst("username");
		model.addAttribute("username", username);
		return "cart";
	}
}
