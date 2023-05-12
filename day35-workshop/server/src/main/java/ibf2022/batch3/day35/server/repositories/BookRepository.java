package ibf2022.batch3.day35.server.repositories;

import java.util.List;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import ibf2022.batch3.day35.server.models.BookSummary;

@Repository
public class BookRepository {

   @Autowired
   private MongoTemplate template;

   /*
    * db.book.find({ 
         title: { $regex: "title", $options: "i" }
      })
      .limit(20)
      .projection({ title: 1, bookID: 1, _id: 0 })
      .sort({ title: 1 })
    */
    public List<BookSummary> findBooksByTitle(String title) {
      Criteria criteria = Criteria.where("title").regex(title, "i");
      Query query = Query.query(criteria)
         .with(Sort.by(Direction.ASC, "title"))
         .limit(20);
      query.fields()
         .include("title", "bookID")
         .exclude("_id");

      return template.find(query, Document.class, "book")
         .stream()
         .map(doc -> new BookSummary(doc.getInteger("bookID"), doc.getString("title")))
         .toList();
    }
   
}
