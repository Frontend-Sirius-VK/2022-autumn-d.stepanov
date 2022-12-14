import { Loader } from '../loader/loader.js';
import EventBus from "../../utils/eventBus.js";

export class PageContent {
    constructor(parent) {
        this.parent = parent;

        const pageContent = document.createElement('div');
        pageContent.classList.add('page-content');
        this.pageContent = pageContent;

        EventBus.on('animeContents:loading', this.render.bind(this));
        EventBus.on('animeContents:got-by-id-info', this.update.bind(this));
    }

    render(data) {

        if (!data) {
            this.pageContent.innerHTML = '';
            const loader = new Loader(this.pageContent);
            loader.render();
            this.parent.append(this.pageContent);
            return;
        }

        const contentPost = document.createElement('div');
        contentPost.classList.add('content-post');

        const image = document.createElement('img');
        image.classList.add('content-post__img');
        image.src = data.urlImage;
        image.alt = 'AnimeGo';


        const contentDescription = document.createElement('div');
        contentDescription.classList.add('content-post-description');

        const link = document.createElement('a');
        link.classList.add('content-post-description__a');
        link.href = data.urlAnime + data.id;
        link.target = '_blank';
        link.textContent = data.nameAnime;

        const contentCategory = document.createElement('span');
        contentCategory.classList.add('content-post-description__span');
        contentCategory.textContent = data.categoryAnime + ' / ' + data.ageAnime;

        const description = document.createElement('p');
        description.classList.add('content-post-description__p');
        description.textContent = data.descriptionAnime;

        contentDescription.append(link, contentCategory, description);

        contentPost.append(image, contentDescription);

        this.pageContent.append(contentPost);

        this.parent.append(this.pageContent);


    }

    update(data = {}) {
        if (!data || !Object.keys(data)) {
            return;
        }
        this.pageContent.innerHTML = '';
        this.render(data);
    }
}