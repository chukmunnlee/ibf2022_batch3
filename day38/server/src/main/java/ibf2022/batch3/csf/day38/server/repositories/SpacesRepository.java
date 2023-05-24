package ibf2022.batch3.csf.day38.server.repositories;

import java.util.Map;
import java.util.UUID;
import java.io.IOException;
import java.net.URL;
import java.util.Date;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.amazonaws.services.s3.model.PutObjectResult;

@Repository
public class SpacesRepository {

   @Autowired
   private AmazonS3 s3;

   public URL upload(String title, MultipartFile file) throws IOException {

      // Add custom metadata
      Map<String, String> userData = new HashMap<>();
      userData.put("title", title);
      userData.put("filename", file.getOriginalFilename());
      userData.put("upload-date", (new Date()).toString());

      // Add object's metadata 
      ObjectMetadata metadata = new ObjectMetadata();
      metadata.setContentType(file.getContentType());
      metadata.setContentLength(file.getSize());
      metadata.setUserMetadata(userData);

      // Generate a random key name
      String key = "images/%s".formatted(UUID.randomUUID().toString().substring(0, 8));

      // acme - bucket name
      // key - key
      // file bytes
      // metadata
      PutObjectRequest putReq = new PutObjectRequest("acme", key, 
            file.getInputStream(), metadata);
      // Make the file publically accessible
      putReq = putReq.withCannedAcl(CannedAccessControlList.PublicRead);

      PutObjectResult result = s3.putObject(putReq);
      System.out.printf(">>> result: %s\n", result);

      return s3.getUrl("acme", key);
   }
   
}
