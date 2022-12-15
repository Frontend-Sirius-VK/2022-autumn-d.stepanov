const URL_MAIN = 'http://localhost:3002/';
const URL_ANIME = 'https://animego.org/anime';
const URL_MANGA = 'https://animego.org/manga';
const URL_PERSONS = 'https://animego.org/characters';
const URL_LOGIN = 'http://localhost:3002/login';

import AnimegoLogo from '../../../backend/image/logo/logo.png';

export class Header {
    constructor(parent) {
        this.parent = parent;
    }

    render() {

        const pageHeader = document.createElement('header');
        pageHeader.classList.add('page-header');
        
        const header = document.createElement('div');
        header.classList.add('header');

        const linkMain = document.createElement('a');
        linkMain.href = URL_MAIN;

        const icons = document.createElement('img');
        icons.classList.add('header-image');
        icons.src = AnimegoLogo;
        icons.alt = 'Логотип Анимего';
        linkMain.append(icons);

        const anime = document.createElement('div');
        anime.classList.add('header-contents');
        const linkAnime = document.createElement('a');
        linkAnime.classList.add('header-contents-links');
        linkAnime.href = URL_ANIME;
        linkAnime.target = '_blank';
        linkAnime.textContent = 'Аниме';
        anime.append(linkAnime);

        const manga = document.createElement('div');
        manga.classList.add('header-contents');
        const linkManga = document.createElement('a');
        linkManga.classList.add('header-contents-links');
        linkManga.href = URL_MANGA;
        linkManga.target = '_blank';
        linkManga.textContent = 'Манга';
        manga.append(linkManga);

        const persons = document.createElement('div');
        persons.classList.add('header-contents');
        const linkPersons = document.createElement('a');
        linkPersons.classList.add('header-contents-links');
        linkPersons.href = URL_PERSONS;
        linkPersons.target = '_blank';
        linkPersons.textContent = 'Персонажи';
        persons.append(linkPersons);

        const login = document.createElement('div');
        login.classList.add('header-contents');
        const linkLogin = document.createElement('a');
        linkLogin.classList.add('header-contents-links');
        linkLogin.href = URL_LOGIN;
        linkLogin.textContent = 'Войти';
        login.append(linkLogin);

        header.append(linkMain, anime, manga, persons, login);

        pageHeader.appendChild(header);

        this.parent.appendChild(pageHeader);
    }
}

