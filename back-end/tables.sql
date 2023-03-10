CREATE TABLE 

    IF NOT EXISTS record_client(
	id VARCHAR(255) PRIMARY KEY NOT NULL,
	name VARCHAR(255)  NOT NULL,
	adress VARCHAR(100) NOT NULL,
	adress_number INT NOT NULL,
	phone VARCHAR(100) NOT NULL
);

CREATE TABLE 

    IF NOT EXISTS record_pet(
	id VARCHAR(100) PRIMARY KEY NOT NULL  ,
	name VARCHAR(255)  NOT NULL,
    age INT NOT NULL,
    type ENUM("DOG" , "CAT") NOT NULL,
	breed VARCHAR(100) NOT NULL,
	date VARCHAR(100)  NOT NULL,
	client_Id VARCHAR(100) NOT NULL,

	FOREIGN KEY (client_Id) REFERENCES record_client(id)
     
);