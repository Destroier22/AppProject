create table usuarios(
	iduser int primary key,
    login varchar(15) not null unique,
    senha varchar(15) not null
);