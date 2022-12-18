import { Loader } from '../loader/loader.js';
import EventBus from "../../utils/eventBus.js";
import template from './content.handlebars';

function getImage(nameImage) {
    return require(`../../../backend/image/animeContent/${nameImage}`); 
}

export class Content {
    constructor(parent, container) {
        this.parent = parent;
        this.container = container;

        EventBus.on('animeContents:loading', this.render.bind(this));
    }

    render(data) {
        if (!data || !data.length) {
            this.container.innerHTML = '';
            const loader = new Loader(this.container);
            loader.render();
            this.parent.append(this.container);
            return;
        }

        data.forEach(element => {

            const {id, urlImage, urlAnime, nameAnime, categoryAnime, ageAnime, descriptionAnime} = element;
            const newUrlImage = getImage(urlImage);

            const context = {newUrlImage, urlAnime, id, nameAnime, categoryAnime, ageAnime, descriptionAnime};

            const html = template(context);

            this.parent.innerHTML += html;

        });
            
    }

    update(data) {
        this.container.innerHTML = '';
        this.render(data);
    }
}

