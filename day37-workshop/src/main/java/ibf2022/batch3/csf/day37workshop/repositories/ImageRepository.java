package ibf2022.batch3.csf.day37workshop.repositories;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import ibf2022.batch3.csf.day37workshop.models.Photo;

@Repository
public class ImageRepository {

	public static final String SQL_INSERT_IMAGE = """
			insert into posts(post_id, image_type, image) values (?, ?, ?)
		""";

	public static final String SQL_GET_IMAGE_BY_ID = """
			select * from posts where post_id = ?
		""";

	@Autowired
	private JdbcTemplate template;

	public void saveImage(String postsId, String contentType, byte[] buff) {
		template.update(SQL_INSERT_IMAGE, postsId, contentType, buff);
	}

	public Optional<Photo> getImage(String image) {
		return template.query(SQL_GET_IMAGE_BY_ID,
         rs -> {
            if (!rs.next())
               return Optional.empty();
				return Optional.of(new Photo(image, rs.getString("image_type"), rs.getBytes("image")));
			},
			image
      );
	}
}
