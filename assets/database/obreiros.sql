create table obreiros(
    idobreiro int primary key,
    nome varchar(40) not null unique,
    fone varchar (15) not null unique,
    email varchar (225)not null unique
);
