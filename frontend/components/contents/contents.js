import EventBus from "../../utils/eventBus.js";
import {Content} from "../content/content.js";

export class Contents {
    constructor(parent) {
        this.parent = parent;
        this.pageContents = null;

        const contents = document.createElement('div');
        contents.classList.add('contents');       

        this.contents = contents;
        this.content = null;
        EventBus.on('animeContents:got-info', this.update.bind(this));
    }

    render() {

        this.pageContents = document.createElement('div');
        this.pageContents.classList.add('page-contents');


        this.content = new Content(this.contents);

        this.pageContents.appendChild(this.contents);

        this.parent.appendChild(this.pageContents);

    }

    update(data = []) {
        if (!data || !data.length) {
            return;
        }
        this.contents.innerHTML = '';
        this.content.update(data);
    }
}

