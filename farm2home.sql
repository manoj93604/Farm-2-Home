create schema farm2home;

use Farm2Home;

CREATE TABLE users(
    userId int AUTO_INCREMENT,
    user_name varchar(25),
    user_type varchar(25),
    mobile_number int(10),
    email varchar(50),
    password varchar(100),
    PRIMARY KEY(userId)
    );
