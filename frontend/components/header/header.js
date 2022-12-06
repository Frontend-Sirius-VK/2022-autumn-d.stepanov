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
        linkMain.href = 'http://localhost:3002/';

        const icons = document.createElement('img');
        icons.src = '/frontend/image/logo/logo.png';
        icons.alt = 'Логотип Анимего';
        linkMain.append(icons);

        const anime = document.createElement('div');
        const linkAnime = document.createElement('a');
        linkAnime.classList.add('links');
        linkAnime.href = 'https://animego.org/anime';
        linkAnime.target = '_blank';
        linkAnime.textContent = 'Аниме';
        anime.append(linkAnime);

        const manga = document.createElement('div');
        const linkManga = document.createElement('a');
        linkManga.classList.add('links');
        linkManga.href = 'https://animego.org/manga';
        linkManga.target = '_blank';
        linkManga.textContent = 'Манга';
        manga.append(linkManga);


        const persons = document.createElement('div');
        const linkPersons = document.createElement('a');
        linkPersons.classList.add('links');
        linkPersons.href = 'https://animego.org/characters';
        linkPersons.target = '_blank';
        linkPersons.textContent = 'Персонажи';
        persons.append(linkPersons);

        const login = document.createElement('div');
        const linkLogin = document.createElement('a');
        linkLogin.classList.add('links');
        linkLogin.href = 'http://localhost:3002/login';
        linkLogin.textContent = 'Войти';
        login.append(linkLogin);

        headerStyle.append(linkMain, anime, manga, persons, login);

        header.appendChild(headerStyle);


        this.parent.appendChild(header);
    }
}

