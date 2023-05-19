package ibf2022.batch3.csf.revision2.server.repositories;

import java.util.List;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import ibf2022.batch3.csf.revision2.server.models.GameSummary;

@Repository
public class GamesRepository {

	@Autowired
	private MongoTemplate template;

	/*
	 * db.games.find({ name: { $regex: "filter", $options: "i" } })
	 * 	.sort({ name: 1 })
	 * 	.skip(skip)
	 * 	.limit(limit)
	 * 	.projection({ _id: 0, gid: 1, name: 1 })
	 */
	public List<GameSummary> getGames(String filter, int skip, int limit) {

		Criteria criteria = Criteria.where("name").regex(filter, "i");

		Query query = new Query(criteria)
			.with(Sort.by(Direction.ASC, "gid"))
			.skip(skip)
			.limit(limit);
		query.fields()
			.exclude("_id")
			.include("gid", "name");

		return template.find(query, Document.class, "games").stream()
			.map(doc -> 
					new GameSummary(doc.getInteger("gid"), doc.getString("name")))
			.toList();
	}

}
