import EventBus from "../../utils/eventBus.js";
import {AnimeContent} from "../content/content.js";

export class ContentsAnime {
    constructor(parent) {
        this.parent = parent;
        this.animeContent = null;
        EventBus.on('animeContents:got-info', this.update.bind(this));
    }

    render() {

        const contents = document.createElement('div');
        contents.classList.add('content');

        const contentsAnime = document.createElement('div');
        contentsAnime.classList.add('contents__style');        

        this.animeContent = new AnimeContent(contentsAnime);

        contents.appendChild(contentsAnime);

        this.parent.appendChild(contents);

    }

    update(data = {}) {
        if (!data || !data.length) {
            return;
        }
        this.animeContent.update(data);
    }
}

