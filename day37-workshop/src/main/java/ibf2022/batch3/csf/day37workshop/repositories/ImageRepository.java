package ibf2022.batch3.csf.day37workshop.repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class ImageRepository {

	public static final String SQL_INSERT_IMAGE = """
			insert into posts(post_id, image_type, image) values (?, ?, ?)
		""";

	@Autowired
	private JdbcTemplate template;

	public void saveImage(String postsId, String contentType, byte[] buff) {
		template.update(SQL_INSERT_IMAGE, postsId, contentType, buff);
	}
}
