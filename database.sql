CREATE TABLE "koalas" (
	"id" SERIAL PRIMARY KEY,
	"name" varchar(200) not null,
	"gender" varchar(10) not null,
	"age" int,
	"ready_to_transfer" BOOLEAN
	);