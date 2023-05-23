package ibf2022.batch3.csf.day37.respositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Repository;

import ibf2022.batch3.csf.day37.models.Photo;

import static ibf2022.batch3.csf.day37.respositories.Queries.*;

import java.util.Optional;

@Repository
public class PhotoRepository {

   @Autowired
   private JdbcTemplate template;

   public Optional<Photo> findPhotoById(Integer photoId) {
      Optional<Photo> opt = template.query(SQL_GET_PHOTO_BY_ID,
         rs -> {
            if (!rs.next())
               return Optional.empty();
            Photo p = new Photo(photoId, rs.getString("title")
                  , rs.getString("media_type"), rs.getBytes("content"));
               return Optional.of(p);
         },
         photoId
      );
      return opt;
   }

   public boolean save(String title, String contentType, byte[] content) {
      return template.update(
         SQL_SAVE_PHOTO, title, contentType, content
      ) > 0;
   }
   
}
