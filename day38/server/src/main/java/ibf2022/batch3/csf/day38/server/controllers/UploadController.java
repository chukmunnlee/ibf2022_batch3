package ibf2022.batch3.csf.day38.server.controllers;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

@Controller
@RequestMapping
@CrossOrigin(origins="*")
public class UploadController {

	@PostMapping(path="/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	@ResponseBody
	public ResponseEntity<String> postUpload(@RequestPart String title
			, @RequestPart MultipartFile myFile) {

		System.out.printf(">>> title: %s\n", title);
		System.out.printf(">>> filename: %s\n", myFile.getOriginalFilename());

		return ResponseEntity.ok("{}");
	}
}
