package ibf2022.batch3.csf.day37workshop.controllers;

import java.util.Base64;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import ibf2022.batch3.csf.day37workshop.models.Photo;
import ibf2022.batch3.csf.day37workshop.services.PostsService;

@Controller
@RequestMapping
public class PostsController {

	@Autowired
	private PostsService postsSvc;

	@GetMapping("/post/{postId}")
	public ModelAndView getPost(@PathVariable String postId) {
		Optional<Photo> opt = postsSvc.getImageById(postId);
		Photo photo = opt.get();

		StringBuilder strBdr = new StringBuilder();
		strBdr.append("data:").append(photo.imageType()).append(";base64,");

		byte[] buff = photo.content();
		String b64 = Base64.getEncoder().encodeToString(buff);
		strBdr.append(b64);

		String imageData = strBdr.toString();

		System.out.printf(">>> imageData: %s\n", imageData);

		ModelAndView mv = new ModelAndView();
		mv.setViewName("photo");
		mv.setStatus(HttpStatusCode.valueOf(200));
		mv.addObject("imageData", imageData);
		mv.addObject("photoId", postId);

		return mv;
	}

	@GetMapping(path="/post/image/{image}")
	@ResponseBody
	public ResponseEntity<byte[]> getImage(@PathVariable String image) {
		Optional<Photo> opt = postsSvc.getImageById(image);
		if (opt.isEmpty())
			return ResponseEntity.notFound().build();

		Photo photo = opt.get();

		return ResponseEntity
					.status(200)
					.header("Content-Type", photo.imageType())
					.body(photo.content());
	}

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
