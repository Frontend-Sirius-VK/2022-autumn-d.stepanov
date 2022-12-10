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
        image.src = data[0].url_image;
        image.alt = 'AnimeGo';


        const contentDescription = document.createElement('div');
        contentDescription.classList.add('content__description');

        const link = document.createElement('a');
        link.classList.add('links__anime');
        link.href = data[0].url_anime + data[0].id;
        link.target = '_blank';
        link.textContent = data[0].name_anime;

        const contentCategory = document.createElement('span');
        contentCategory.textContent = data[0].category_anime + ' / ' + data[0].age_anime;

        const description = document.createElement('p');
        description.classList.add('content__description_text_style');
        description.textContent = data[0].description_anime;

        contentDescription.append(link, contentCategory, description);

        pageContent.append(image, contentDescription);

        this.container.append(pageContent);

        this.parent.append(this.container);


    }

    update(data = []) {
        if (!data || !data.length) {
            return;
        }
        this.container.innerHTML = '';
        this.render(data);
    }
}