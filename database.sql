CREATE TABLE "koalas" (
	"id" SERIAL PRIMARY KEY,
	"name" varchar(200) not null,
	"gender" varchar(10) not null,
	"age" int,
	"ready_to_transfer" BOOLEAN,
	"notes" varchar(300)
	);

INSERT INTO "koalas" ("name", "gender", "age", "ready_to_transfer", "notes") VALUES 
('Scotty', 'Male', 4, 'True', 'Born in Guatamala'),
('Jean', 'Female', 5, 'True', 'Allergic to lots of lava'),
('Ororo', 'Female', 7, 'False', 'Loves listening to Paula (Abdul)'),
('Logan', 'Male', 15, 'False', 'Loves the sauna'),
('Charlie', 'Male', 9, 'True', 'Favorite band is Nirvana'),
('Betsy', 'Female', 4, 'True', 'Has a pet iguana');