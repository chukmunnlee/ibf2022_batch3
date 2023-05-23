drop database if exists media;

create database media;

use media;

create table photos (

   m_id int auto_increment,
   title varchar(256) not null,
   media_type varchar(128) not null,
   content mediumblob,

   primary key(m_id)
);

grant all privileges on media.* to 'fred'@'%';