package ibf2022.batch3.csf.day37.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import ibf2022.batch3.csf.day37.models.Photo;
import ibf2022.batch3.csf.day37.respositories.PhotoRepository;
import ibf2022.batch3.csf.day37.services.PhotoService;

@Controller
@RequestMapping
public class UploadController {

   @Autowired
   private PhotoService photoSvc;

   @PostMapping(path="/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
   public String postUpload(@RequestPart String title
         , @RequestPart MultipartFile mypic, Model model) {

      boolean result = photoSvc.upload(title, mypic);

      model.addAttribute("filename", mypic.getOriginalFilename());
      model.addAttribute("size", mypic.getSize());
      model.addAttribute("contentType", mypic.getContentType());
      model.addAttribute("uploaded", result);

      return "uploaded";
   }
   
}
