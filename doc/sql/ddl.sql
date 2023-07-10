use itranswarp

CREATE TABLE article (
  id varchar(36) NOT NULL,
  categoryId varchar(36) NOT NULL,
  createdAt BIGINT NOT NULL,
  imageId varchar(36) DEFAULT '',
  publishAt BIGINT,
  textId varchar(36) NOT NULL,
  updatedAt BIGINT,
  userId Bvarchar(36) NOT NULL,
  version BIGINT DEFAULT 0,
  views BIGINT DEFAULT 0,
  name VARCHAR(100) NOT NULL,
  tags VARCHAR(100) NOT NULL,
  description VARCHAR(1000) NOT NULL,
  INDEX IDX_CAT_PUB (categoryId,publishAt),
  PRIMARY KEY(id)
) Engine=INNODB DEFAULT CHARSET=UTF8MB4;

CREATE TABLE text_content (
  id varchar(36) NOT NULL,
  createdAt BIGINT NOT NULL,
  updatedAt BIGINT,
  version BIGINT,
  hash VARCHAR(64) NOT NULL,
  content TEXT NOT NULL,
  CONSTRAINT UNI_HASH UNIQUE (hash),
  PRIMARY KEY(id)
) Engine=INNODB DEFAULT CHARSET=UTF8MB4;

CREATE TABLE category(
  id varchar(36) NOT NULL,
  createdAt BIGINT NOT NULL,
  displayOrder BIGINT NOT NULL,
  updatedAt BIGINT,
  version BIGINT,
  tag VARCHAR(32) NOT NULL,
  name VARCHAR(100) NOT NULL,
  description VARCHAR(1000) NOT NULL,
  PRIMARY KEY(id)
) Engine=INNODB DEFAULT CHARSET=UTF8MB4;