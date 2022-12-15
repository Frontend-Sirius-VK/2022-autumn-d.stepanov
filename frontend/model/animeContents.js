import EventBus from "../utils/eventBus.js";

const NOT_FOUND = ['Ошибка 404', 'Страница, которую вы запрашиваете, не существует. Возможно был введен неверный адрес.'];
const BAD_REQUEST = ['Ошибка 400', 'Вы ввели некорректный запрос, проверьте данные.'];
const SERVER_ERROR = ['Ошибка 500', 'Ошибка обращения к сервису. Попробуйте обновить страницу.'];


export class AnimeContents {
    constructor(id = null, urlimage = null, urlanime = null, nameanime = null, categoryanime = null, ageanime = null, descriptionanime = null) {
        this.id = id;
        this.urlImage = urlimage;
        this.urlAnime = urlanime;
        this.nameAnime = nameanime;
        this.categoryAnime = categoryanime;
        this.ageAnime = ageanime;
        this.descriptionAnime = descriptionanime;
    }

    error(status) {
        switch(status) {
            case 404: EventBus.emit('animeContents:not-found', NOT_FOUND);
            return;

            case 400: EventBus.emit('animeContents:bad-request', BAD_REQUEST);
            return;

            case 500:  EventBus.emit('animeContents:server-error', SERVER_ERROR);
            return;
        }

    }

    fetchData() {
        fetch('/api/contents').then((response) => {

            const {status} = response;
            this.error(status);
            return response.json();

        }).then((data) => {
            EventBus.emit('animeContents:got-info', this.pareserData(data));
        })  
    }

    fetchDataGetById(id) {
        fetch(`/api/contents/${id}`).then((response) => {

            const {status} = response;
            this.error(status);
            return response.json();

        }).then((data) => {
            EventBus.emit('animeContents:got-by-id-info', this.pareserData(data)[0]);
        })
    }

    pareserData(data) {
        return data.map(element => {
            const anime = new AnimeContents();
            anime.id = element.id;
            anime.urlImage = element.urlimage;
            anime.urlAnime = element.urlanime;
            anime.nameAnime = element.nameanime;
            anime.categoryAnime = element.categoryanime;
            anime.ageAnime = element.ageanime;
            anime.descriptionAnime = element.descriptionanime;
            return anime;
        })
    }
}

