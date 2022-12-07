import {Header} from '../components/header/header.js';
import {Description} from '../components/descriptionSite/descriptionSite.js';
import {Contents} from '../components/contents/contents.js';


export class MainView {
    constructor() {
        this.header = null;
        this.description = null;
        this.contents = null;
    }

    render() {
        const root = document.querySelector('#root');
        const container = document.createElement('div');
        container.classList.add('page-container');


        this.header = new Header(container);

        this.description = new Description(container);

        this.contents = new Contents(container);

        root.append(container);
        this.header.render();
        this.description.render();
        this.contents.render();
    }

}
