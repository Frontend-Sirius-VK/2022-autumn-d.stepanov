create table anime_contents
(
	id int generated always as identity primary key,
	url_image text,
	url_anime text,
	name_anime text,
	category_anime text,
	age_anime int,
	description_anime text
)

