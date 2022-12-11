import EventBus from "../../utils/eventBus.js";
import {Content} from "../content/content.js";

export class Contents {
    constructor(parent) {
        this.parent = parent;
        this.contents = null;

        const contentsAnime = document.createElement('div');
        contentsAnime.classList.add('contents__style');       

        this.contentsAnime = contentsAnime;
        this.content = null;
        EventBus.on('animeContents:got-info', this.update.bind(this));
    }

    render() {

        this.contents = document.createElement('div');
        this.contents.classList.add('content');


        this.content = new Content(this.contentsAnime);

        this.contents.appendChild(this.contentsAnime);

        this.parent.appendChild(this.contents);

    }

    update(data = []) {
        if (!data || !data.length) {
            return;
        }
        this.contentsAnime.innerHTML = '';
        this.content.update(data);
    }
}

