import {Header} from '../components/header/header.js';
import {Description} from '../components/descriptionSite/descriptionSite.js';
import {Contents} from '../components/contents/contents.js';
import EventBus from '../utils/eventBus.js';
import {Error} from '../components/error/error.js';


export class MainView {
    constructor() {
        this.header = null;
        this.description = null;
        this.contents = null;
        this.container = null;

        EventBus.on('animeContents:error', this.errorUpdate.bind(this));
    }


    render() {
        const root = document.querySelector('#root');
        this.container = document.createElement('div');
        this.container.classList.add('page-container');

        this.header = new Header(this.container);

        this.description = new Description(this.container);

        this.contents = new Contents(this.container);

        root.append(this.container);
        this.header.render();
        this.description.render();
        this.contents.render();
    }


    errorUpdate(data) {
        if (this.container) {
            this.container.innerHTML = '';
        }
        const error = new Error(this.container);
        error.render(data);
    }

}
