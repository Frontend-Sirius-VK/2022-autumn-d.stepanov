const URL_MAIN = 'http://10.82.32.253:8080/';
const URL_ANIME = 'https://animego.org/anime';
const URL_MANGA = 'https://animego.org/manga';
const URL_PERSONS = 'https://animego.org/characters';
const URL_LOGIN = 'http://localhost:3002/login';

import AnimegoLogo from '../../../backend/image/logo/logo.png';
import template from './header.handlebars';

export class Header {
    constructor(parent) {
        this.parent = parent;
    }

    render() {
        const context = {URL_MAIN, AnimegoLogo, URL_ANIME, URL_MANGA, URL_PERSONS, URL_LOGIN};
        const html = template(context);

        this.parent.innerHTML += html;
    }
}

