export class Header {
    constructor(parent) {
        this.parent = parent;
    }

    render(container) {

        const header = document.createElement('div');
        header.classList.add('header__style');

        const icons = document.createElement('img');
        icons.src = '../Image/Logo/logo.png';
        icons.alt = 'AnimeGo';

        const anime = document.createElement('div');
        const linkAnime = document.createElement('a');
        linkAnime.classList.add('links');
        linkAnime.href = 'https://animego.org/anime';
        linkAnime.innerHTML += 'Аниме';
        anime.append(linkAnime);

        const manga = document.createElement('div');
        const linkManga = document.createElement('a');
        linkManga.classList.add('links');
        linkManga.href = 'https://animego.org/manga';
        linkManga.innerHTML += 'Манга';
        manga.append(linkManga);


        const persons = document.createElement('div');
        const linkPersons = document.createElement('a');
        linkPersons.classList.add('links');
        linkPersons.href = 'https://animego.org/characters';
        linkPersons.innerHTML += 'Персонажи';
        persons.append(linkPersons);

        const login = document.createElement('div');
        const linkLogin = document.createElement('a');
        linkLogin.classList.add('links');
        linkLogin.href = 'http://localhost:3002/login';
        linkLogin.innerHTML += 'Войти';
        login.append(linkLogin);

        header.append(icons, anime, manga, persons, login);


        container.appendChild(header);
    }
}

