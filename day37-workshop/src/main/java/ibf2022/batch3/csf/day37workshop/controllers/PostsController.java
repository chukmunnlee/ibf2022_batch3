package ibf2022.batch3.csf.day37workshop.controllers;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import ibf2022.batch3.csf.day37workshop.services.PostsService;

@Controller
@RequestMapping
public class PostsController {

	@Autowired
	private PostsService postsSvc;

	@PostMapping(path="/posts", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public ModelAndView postPosts(@RequestPart String title, @RequestPart String content
			, @RequestPart MultipartFile image) {

		ModelAndView mv = new ModelAndView();
		String postId = null;

		try {
			postId = postsSvc.posts(title, content, image);
		} catch (Exception ex) {
			ex.printStackTrace();
			mv.setStatus(HttpStatusCode.valueOf(500));
			mv.addObject("error", ex.getMessage());
			mv.setViewName("error");
			return mv;
		}

		mv.setViewName("posts");
		mv.addObject("title", title);
		mv.addObject("content", content);
		mv.addObject("image", "/post/image/%s".formatted(postId));

		return mv;
	}
}
