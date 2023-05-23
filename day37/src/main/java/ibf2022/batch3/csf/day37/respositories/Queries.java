package ibf2022.batch3.csf.day37.respositories;

public class Queries {

   public static final String SQL_SAVE_PHOTO = """
         insert into photos(title, media_type, content) values (?, ?, ?)
      """;

   public static final String SQL_GET_PHOTO_BY_ID = """
         select * from photos where m_id = ?
      """;
}
