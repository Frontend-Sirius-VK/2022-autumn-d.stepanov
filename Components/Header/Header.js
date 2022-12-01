export class Header {
    constructor(parent) {
        this.parent = parent;
    }

    render(container) {

        const header = document.createElement('div');
        header.classList.add('header__style');

        const icons = document.createElement('img');
        icons.src = './Components/Header/logo.png';
        icons.alt = 'AnimeGo';

        const anime = document.createElement('div');
        const linkAnime = document.createElement('a');
        linkAnime.classList.add('links');
        linkAnime.href = 'https://animego.org/anime';
        linkAnime.innerHTML += 'Аниме';
        anime.append(linkAnime);

        const login = document.createElement('div');
        const linkLogin = document.createElement('a');
        linkLogin.classList.add('links');
        linkLogin.href = 'http://localhost:3002/login';
        linkLogin.innerHTML += 'Войти';
        login.append(linkLogin);

        header.append(icons, anime, login);


        container.appendChild(header);
    }
}
