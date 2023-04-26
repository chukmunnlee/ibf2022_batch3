package ibf2022.batch3.paf.day25.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping
public class SearchController {

	@GetMapping(path="/search")
	public String getSearch(@RequestParam int page, @RequestParam int result) {
		// example only, not complete
		int skip = page * result;
		int limit = result;
		return "";
	}
}
