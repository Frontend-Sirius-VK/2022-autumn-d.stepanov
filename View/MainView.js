import {Header} from '../Components/Header/Header.js';
import {DescriptionAnimego} from '../Components/DescriptionSiteAnimego/DescriptionAnimego.js'
import {ContentsAnime} from '../Components/ContentsAnime/ContentsAnime.js'


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

        const header = document.createElement('header');
        header.classList.add('header');
        this.header = new Header();

        const descriptionAnimego = document.createElement('div');
        descriptionAnimego.classList.add('descriptionAnimego');
        this.descriptionAnimego = new DescriptionAnimego();

        const contentAnime = document.createElement('div');
        contentAnime.classList.add('content');
        this.contentAnime = new ContentsAnime();

        container.append(header, descriptionAnimego, contentAnime);
        root.append(container);
        this.header.render(header);
        this.descriptionAnimego.render(descriptionAnimego)
        this.contentAnime.render(contentAnime);
    }

}
