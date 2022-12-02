import EventBus from "../Utils/eventBus.js";

export class AnimeContents {
    constructor(urlImage = '../Image/AnimeContent/NejnUkus.jpg', nameAnime = 'название аниме', categoryAnime = 'категория аниме', ageAnime = 1990, descriptionAnime = 'описание аниме') {
        this.urlImage = urlImage;
        this.nameAnime = nameAnime;
        this.categoryAnume = categoryAnime;
        this.ageAnime = ageAnime;
        this.descriptionAnime = descriptionAnime;
    }

    fetchData() {
        fetch('/animeContents').then((response) => response.json()).then((data) => {
            EventBus.emit('animeContents:got-info', data);
        })
    }
}

