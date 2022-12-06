import {Header} from '../components/header/header.js';
import {DescriptionAnimego} from '../components/descriptionSite/descriptionSite.js';
import {ContentsAnime} from '../components/contents/contents.js';


export class MainView {
    constructor() {
        this.header = null;
        this.descriptionAnimego = null;
        this.contentAnime = null;
    }

    render() {
        const root = document.querySelector('#root');
        const container = document.createElement('div');
        container.classList.add('page-container');


        this.header = new Header(container);

        this.descriptionAnimego = new DescriptionAnimego(container);

        this.contentAnime = new ContentsAnime(container);

        root.append(container);
        this.header.render();
        this.descriptionAnimego.render();
        this.contentAnime.render();
    }

}
