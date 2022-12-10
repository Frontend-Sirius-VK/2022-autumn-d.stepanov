import EventBus from "../utils/eventBus.js";

export class AnimeContents {
    constructor(urlImage = '', nameAnime = 'название аниме', categoryAnime = 'категория аниме', ageAnime = 0, descriptionAnime = 'описание аниме') {
        this.urlImage = urlImage;
        this.nameAnime = nameAnime;
        this.categoryAnume = categoryAnime;
        this.ageAnime = ageAnime;
        this.descriptionAnime = descriptionAnime;
    }

    error(status) {
        switch(status) {
            case 404: EventBus.emit('animeContents:not-found', ['Ошибка 404', 'Страница, которую вы запрашиваете, не существует. Возможно был введен неверный адрес.']);
            return;

            case 400: EventBus.emit('animeContents:bad-request', ['Ошибка 400', 'Вы ввели некорректный запрос, проверьте данные.']);
            return;

            case 500:  EventBus.emit('animeContents:server-error', ['Ошибка 500', 'Ошибка обращения к сервису. Попробуйте обновить страницу.']);
            return;
        }

    }

    fetchData() {
        fetch('/contents').then((response) => {

            const {status} = response;
            this.error(status);
            return response.json();

        }).then((data) => {
            EventBus.emit('animeContents:got-info', data);
        })  
    }

    fetchDataGetById(id) {
        fetch(`/contents/${id}`).then((response) => {

            const {status} = response;
            this.error(status);
            return response.json();

        }).then((data) => {
            EventBus.emit('animeContents:got-by-id-info', data);
        })
    }
}

