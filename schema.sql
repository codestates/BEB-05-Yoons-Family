CREATE TABLE NFT (
  token_id INT,
  image varchar(200),
  name varchar(100),
  owner varchar(100),
  contract_address varchar(100),
  description varchar(500),
  price FLOAT,
  PRIMARY KEY(token_id)
);

CREATE TABLE History (
  id INT AUTO_INCREMENT,
  token_id INT,
  price FLOAT,
  from_address varchar(100),
  to_address varchar(100),
  transaction_hash varchar(100),
  transaction_time datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(id)
);

ALTER TABLE History ADD FOREIGN KEY (token_id) REFERENCES NFT (token_id);

/* After creating database,
* mysql -u root -p < /PATH/TO/YOUR/schema.sql -D DATABASE_NAME*/
