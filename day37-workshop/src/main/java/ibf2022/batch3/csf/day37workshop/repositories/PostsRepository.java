package ibf2022.batch3.csf.day37workshop.repositories;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class PostsRepository {

	@Autowired
	private MongoTemplate template;

	/*
	 * db.posts.insert({
	 * 	_id: postId,
	 * 	title: "title",
	 * 	content: "content",
	 * })
	 */
	public void insertPosts(String postId, String title, String content) {
		Document doc = new Document();
		doc.put("_id", postId);
		doc.put("title", title);
		doc.put("content", content);

		template.insert(doc, "posts");
	}
}
