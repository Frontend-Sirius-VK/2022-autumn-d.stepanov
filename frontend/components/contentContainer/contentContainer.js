import EventBus from "../../utils/eventBus.js";
import {Content} from "../content/content.js";
import template from './contentContainer.handlebars';

export class ContentContainer {
    constructor(parent) {
        this.parent = parent;

        const contentsPost = document.createElement('div');
        contentsPost.classList.add('contents-post');
        this.contentsPost = contentsPost;

        this.content = null;
        EventBus.on('animeContents:got-info', this.update.bind(this));
    }

    render() {

        const html = template();

        this.parent.innerHTML += html;

        this.content = new Content(document.querySelector('.contents'), this.contentsPost);

    }

    update(data = []) {
        if (!data || !data.length) {
            return;
        }

        this.contentsPost.innerHTML = '';
        this.content.update(data);
    }
}

