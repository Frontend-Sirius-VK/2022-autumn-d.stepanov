import EventBus from "../../Utils/eventBus.js";
import {AnimeContent} from "../AnimeContent/AnimeContent.js";

export class ContentsAnime {
    constructor() {
        this.animeContent = null;
        EventBus.on('animeContents:got-info', this.update.bind(this));
    }

    render(container) {

        const contents = document.createElement('div');
        contents.classList.add('contents__style');        

        this.animeContent = new AnimeContent(contents);
        container.appendChild(contents);

    }

    update(data = {}) {
        if (!data || !Object.keys(data).length) {
            return;
        }
        this.animeContent.update(data);
    }
}

