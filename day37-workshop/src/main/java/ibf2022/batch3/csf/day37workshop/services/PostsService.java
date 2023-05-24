package ibf2022.batch3.csf.day37workshop.services;

import java.io.IOException;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import ibf2022.batch3.csf.day37workshop.models.Photo;
import ibf2022.batch3.csf.day37workshop.repositories.ImageRepository;
import ibf2022.batch3.csf.day37workshop.repositories.PostsRepository;

@Service
public class PostsService {

	@Autowired
	private ImageRepository imageRepo;

	@Autowired
	private PostsRepository postsRepo;

	public Optional<Photo> getImageById(String imageId) {
		return imageRepo.getImage(imageId);
	}

	@Transactional(rollbackFor = IOException.class)
	public String posts(String title, String content, MultipartFile image) throws IOException {

		String postId = UUID.randomUUID().toString().substring(0, 8);
		
		// MySQL will rollback if MongoDB operation throws an exception
		imageRepo.saveImage(postId, image.getContentType(), image.getBytes());
		
		// MongoDB
		postsRepo.insertPosts(postId, title, content);

		return postId;

	}
}
