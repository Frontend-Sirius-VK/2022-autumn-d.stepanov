import { Loader } from '../loader/loader.js';
import EventBus from "../../utils/eventBus.js";
import template from './content.handlebars';

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

            const html = template(element);
            this.parent.innerHTML += html;

        });
            
    }

    update(data) {
        this.container.innerHTML = '';
        this.render(data);
    }
}

