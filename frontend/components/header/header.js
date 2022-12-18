const URL_MAIN = 'http://localhost:3002/';
const URL_ANIME = 'https://animego.org/anime';
const URL_MANGA = 'https://animego.org/manga';
const URL_PERSONS = 'https://animego.org/characters';
const URL_LOGIN = 'http://localhost:3002/login';

export class Header {
    constructor(parent) {
        this.parent = parent;
    }

    render() {

        const header = document.createElement('header');
        header.classList.add('header');
        
        const headerStyle = document.createElement('div');
        headerStyle.classList.add('header__style');

        const linkMain = document.createElement('a');
        linkMain.href = URL_MAIN;

        const icons = document.createElement('img');
        icons.classList.add('image');
        icons.src = '/backend/image/logo/logo.png';
        icons.alt = 'Логотип Анимего';
        linkMain.append(icons);

        const anime = document.createElement('div');
        anime.classList.add('header-content');
        const linkAnime = document.createElement('a');
        linkAnime.classList.add('links');
        linkAnime.href = URL_ANIME;
        linkAnime.target = '_blank';
        linkAnime.textContent = 'Аниме';
        anime.append(linkAnime);

        const manga = document.createElement('div');
        manga.classList.add('header-content');
        const linkManga = document.createElement('a');
        linkManga.classList.add('links');
        linkManga.href = URL_MANGA;
        linkManga.target = '_blank';
        linkManga.textContent = 'Манга';
        manga.append(linkManga);


        const persons = document.createElement('div');
        persons.classList.add('header-content');
        const linkPersons = document.createElement('a');
        linkPersons.classList.add('links');
        linkPersons.href = URL_PERSONS;
        linkPersons.target = '_blank';
        linkPersons.textContent = 'Персонажи';
        persons.append(linkPersons);

        const login = document.createElement('div');
        login.classList.add('header-content');
        const linkLogin = document.createElement('a');
        linkLogin.classList.add('links');
        linkLogin.href = URL_LOGIN;
        linkLogin.textContent = 'Войти';
        login.append(linkLogin);

        headerStyle.append(linkMain, anime, manga, persons, login);

        header.appendChild(headerStyle);

        this.parent.appendChild(header);
    }
}

