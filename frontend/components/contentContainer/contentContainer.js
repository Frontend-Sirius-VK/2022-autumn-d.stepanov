import EventBus from "../../utils/eventBus.js";
import {Content} from "../content/content.js";

export class ContentContainer {
    constructor(parent) {
        this.parent = parent;
        this.ContentContainer = null;

        const contentsAnime = document.createElement('div');
        contentsAnime.classList.add('content-container__style');       

        this.contentsAnime = contentsAnime;
        this.content = null;
        EventBus.on('animeContents:got-info', this.update.bind(this));
    }

    render() {

        this.ContentContainer = document.createElement('div');
        this.ContentContainer.classList.add('content-container');


        this.content = new Content(this.contentsAnime);

        this.ContentContainer.appendChild(this.contentsAnime);

        this.parent.appendChild(this.ContentContainer);

    }

    update(data = []) {
        if (!data || !data.length) {
            return;
        }
        this.contentsAnime.innerHTML = '';
        this.content.update(data);
    }
}

