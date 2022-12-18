import EventBus from "../../utils/eventBus.js";
import {Content} from "../content/content.js";
import template from './contents.handlebars';

export class RenderContent {
    constructor(parent) {
        this.parent = parent;
        this.renderContent = null;

        // const contents = document.createElement('div');
        // contents.classList.add('contents');       

        // this.contents = contents;
        this.content = null;
        EventBus.on('animeContents:got-info', this.update.bind(this));
    }

    render() {



        this.parent.innerHTML += html;

        console.log(document.querySelector('.contents'))

        this.content = new Content(document.querySelector('.contents'));

    }

    update(data = []) {
        if (!data || !data.length) {
            return;
        }
        const container = document.querySelector('.contents');
        container.innerHTML = '';
        this.content.update(data);
    }
}

