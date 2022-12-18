import EventBus from "../../utils/eventBus.js";
import {Content} from "../content/content.js";

export class RenderContent {
    constructor(parent) {
        this.parent = parent;
        this.renderContent = null;

        const contentsAnime = document.createElement('div');
        contentsAnime.classList.add('renderContent__style');       

        this.contentsAnime = contentsAnime;
        this.content = null;
        EventBus.on('animeContents:got-info', this.update.bind(this));
    }

    render() {

        this.renderContent = document.createElement('div');
        this.renderContent.classList.add('renderContent');


        this.content = new Content(this.contentsAnime);

        this.renderContent.appendChild(this.contentsAnime);

        this.parent.appendChild(this.renderContent);

    }

    update(data = []) {
        if (!data || !data.length) {
            return;
        }
        this.contentsAnime.innerHTML = '';
        this.content.update(data);
    }
}

