CREATE TABLE NFT (
  token_id INT,
  token_img varchar(200),
  token_name varchar(100),
  token_owner varchar(100),
  contract_address varchar(100),
  token_description varchar(500),
  token_price FLOAT,
  collection_no INT,
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(token_id)
);

CREATE TABLE Contracts (
  contract_address varchar(100),
  contract_description varchar(500),
  contract_title varchar(100),
  contract_category varchar(100),
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(contract_address)
);

CREATE TABLE History (
  history_id INT AUTO_INCREMENT,
  token_id INT,
  history_token_price FLOAT,
  from_address varchar(100),
  to_address varchar(100),
  transaction_hash varchar(100),
  transaction_time datetime,
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(history_id)
);

CREATE TABLE Collections (
  collection_no INT,
  collection_name varchar(100),
  collection_key varchar(100),
  collection_profile_img varchar(200),
  collection_banner_img varchar(200),
  collection_description varchar(500),
  collection_author varchar(100),
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(collection_no)
);

CREATE TABLE Users (
  user_account varchar(100),
  user_balance FLOAT,
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(user_account)
);

ALTER TABLE History ADD FOREIGN KEY (token_id) REFERENCES NFT (token_id);
ALTER TABLE NFT ADD FOREIGN KEY (contract_address) REFERENCES Contracts (contract_address);
ALTER TABLE NFT ADD FOREIGN KEY (collection_no) REFERENCES Collections (collection_no);


/* After creating database,
* mysql -u root -p < /PATH/TO/YOUR/schema.sql -D DATABASE_NAME*/
