import { Loader } from '../loader/loader.js';
import EventBus from "../../utils/eventBus.js";

export class Content {
    constructor(parent) {
        this.parent = parent;

        const container = document.createElement('div');
        container.classList.add('content__style');
        this.container = container;

        EventBus.on('animeContents:loading', this.render.bind(this));
    }

    render(data) {

        if (!data) {
            this.container.innerHTML = '';
            const loader = new Loader(this.container);
            loader.render();
            this.parent.append(this.container);
            return;
        }

        const heading = document.createElement('h2');
        heading.classList.add('content__heading_text_style');
        heading.textContent = 'Новые аниме на сайте';

        this.parent.prepend(heading);


        data.forEach(element => {
            const image = document.createElement('img');
            image.classList.add('content__image');
            image.src = element.url_image;
            image.alt = 'AnimeGo';

            this.container = document.createElement('div');
            this.container.classList.add('content__style');


            const contentDescription = document.createElement('div');
            contentDescription.classList.add('content__description');

            const link = document.createElement('a');
            link.classList.add('links__anime');
            link.href = element.url_anime + element.id;
            link.target = '_blank';
            link.textContent = element.name_anime;

            const contentCategory = document.createElement('span');
            contentCategory.textContent = element.category_anime + ' / ' + element.age_anime;

            const description = document.createElement('p');
            description.classList.add('content__description_text_style');
            description.textContent = element.description_anime;

            contentDescription.append(link, contentCategory, description);

            this.container.append(image, contentDescription);

            this.parent.append(this.container);
        });
            
    }

    update(data) {
        this.container.innerHTML = '';
        this.render(data);
    }
}

