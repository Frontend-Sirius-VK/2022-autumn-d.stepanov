import EventBus from "../utils/eventBus.js";

const ERROR_OBJECT = {
    status404: {
        title: 'Ошибка 404',
        description: 'Страница, которую вы запрашиваете, не существует. Возможно был введен неверный адрес.'
    },
    status400: {
        title: 'Ошибка 400',
        description: 'Вы ввели некорректный запрос, проверьте данные.'
    },
    status500: {
        title: 'Ошибка 500',
        description: 'Ошибка обращения к сервису. Попробуйте обновить страницу.'
    }
}


export class AnimeContents {
    constructor({id, urlimage, urlanime, nameanime, categoryanime, ageanime, descriptionanime}) {
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
            case 404: EventBus.emit('animeContents:error', ERROR_OBJECT.status404);
            return;

            case 400: EventBus.emit('animeContents:error', ERROR_OBJECT.status400);
            return;

            case 500:  EventBus.emit('animeContents:error', ERROR_OBJECT.status500);
            return;
        }

    }

    fetchData() {
        fetch('/api/animeContents').then((response) => {

            const {status} = response;
            this.error(status);
            return response.json();

        }).then((data) => {
            EventBus.emit('animeContents:got-info', this.parserData(data));
        })  
    }

    fetchDataGetById(id) {
        fetch(`/api/animeContents/${id}`).then((response) => {

            const {status} = response;
            this.error(status);
            return response.json();

        }).then((data) => {
            EventBus.emit('animeContents:got-by-id-info', this.parserData(data)[0]);
        })
    }

    parserData(data) {
        return data.map(element => {
            const anime = new AnimeContents(element);
            return anime;
        })
    }
}

