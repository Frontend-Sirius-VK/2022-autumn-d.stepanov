import {Header} from '../components/header/header.js';
import {PageContent} from '../components/pageContent/pageContent.js';
import EventBus from '../utils/eventBus.js';
import {Error} from '../components/error/error.js';


export class ContentView {
    constructor() {
        this.header = null;
        this.pageContent = null;
        this.container = null;

        EventBus.on('animeContents:not-found', this.errorUpdate.bind(this));
        EventBus.on('animeContents:bad-request', this.errorUpdate.bind(this));
        EventBus.on('animeContents:server-error', this.errorUpdate.bind(this));
    }

    render() {
        
        const root = document.querySelector('#root');
        this.container = document.createElement('div');
        this.container.classList.add('page-container');

        this.header = new Header(this.container);

        this.pageContent = new PageContent(this.container);

        root.append(this.container);
        this.header.render();
        this.pageContent.render();
    }

    errorUpdate(data) {
        if (this.container) {
            this.container.innerHTML = '';
        }
        const error = new Error(this.container);
        error.render(data);
    }

}
