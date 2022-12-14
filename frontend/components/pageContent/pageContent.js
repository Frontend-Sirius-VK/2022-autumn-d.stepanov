import { Loader } from '../loader/loader.js';
import EventBus from "../../utils/eventBus.js";

export class PageContent {
    constructor(parent) {
        this.parent = parent;

        const container = document.createElement('div');
        container.classList.add('page-content');
        this.container = container;

        EventBus.on('animeContents:loading', this.render.bind(this));
        EventBus.on('animeContents:got-by-id-info', this.update.bind(this));
    }

    render(data) {

        if (!data) {
            this.container.innerHTML = '';
            const loader = new Loader(this.container);
            loader.render();
            this.parent.append(this.container);
            return;
        }

        const pageContent = document.createElement('div');
        pageContent.classList.add('content__style');

        const image = document.createElement('img');
        image.classList.add('content__image');
        image.src = data.urlImage;
        image.alt = 'AnimeGo';


        const contentDescription = document.createElement('div');
        contentDescription.classList.add('content__description');

        const link = document.createElement('a');
        link.classList.add('links__anime');
        link.href = data.urlAnime + data.id;
        link.target = '_blank';
        link.textContent = data.nameAnime;

        const contentCategory = document.createElement('span');
        contentCategory.textContent = data.categoryAnime + ' / ' + data.ageAnime;

        const description = document.createElement('p');
        description.classList.add('content__description_text_style');
        description.textContent = data.descriptionAnime;

        contentDescription.append(link, contentCategory, description);

        pageContent.append(image, contentDescription);

        this.container.append(pageContent);

        this.parent.append(this.container);


    }

    update(data = {}) {
        if (!data || !Object.keys(data)) {
            return;
        }
        this.container.innerHTML = '';
        this.render(data);
    }
}