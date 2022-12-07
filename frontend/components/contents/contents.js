import EventBus from "../../utils/eventBus.js";
import {Content} from "../content/content.js";

export class Contents {
    constructor(parent) {
        this.parent = parent;
        this.content = null;
        EventBus.on('animeContents:got-info', this.update.bind(this));
    }

    render() {

        const contents = document.createElement('div');
        contents.classList.add('content');

        const contentsAnime = document.createElement('div');
        contentsAnime.classList.add('contents__style');        

        this.content = new Content(contentsAnime);

        contents.appendChild(contentsAnime);

        this.parent.appendChild(contents);

    }

    update(data = []) {
        if (!data || !data.length) {
            return;
        }
        this.content.update(data);
    }
}

