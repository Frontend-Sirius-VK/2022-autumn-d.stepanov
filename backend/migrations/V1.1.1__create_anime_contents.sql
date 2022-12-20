create table anime_contents
(
	id int generated always as identity primary key,
	urlImage text,
	urlAnime text,
	nameAnime text,
	categoryAnime text,
	ageAnime int,
	descriptionAnime text,
	episode int,
	status text,
	categories text,
	originalSource text
)

