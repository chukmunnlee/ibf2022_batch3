package ibf2022.batch3.csf.day37.services;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import ibf2022.batch3.csf.day37.respositories.PhotoRepository;

@Service
public class PhotoService {

   @Autowired
   private PhotoRepository photoRepo;

   public boolean upload(String title, MultipartFile multipart) {
      try {
         return photoRepo.save(title, multipart.getContentType(), multipart.getBytes());
      } catch (DataAccessException | IOException ex) {
         ex.printStackTrace();
         return false;
      }
   }
   
}
