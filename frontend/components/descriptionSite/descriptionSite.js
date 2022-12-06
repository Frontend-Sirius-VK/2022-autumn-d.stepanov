export class DescriptionAnimego {
    constructor(parent) {
        this.parent = parent;
    }

    render() {

        const description = document.createElement('div');
        description.classList.add('descriptionAnimego');

        const descriptionAnimego = document.createElement('div');
        descriptionAnimego.classList.add('descriptionAnimego__style');

        const heading = document.createElement('h1');
        heading.classList.add('descriptionAnimego__heading');
        heading.textContent = 'AnimeGO — смотреть аниме онлайн бесплатно';

        const descriptionOne = document.createElement('p');
        descriptionOne.classList.add('descriptionAnimego__text');
        descriptionOne.textContent = 'Вот уже много лет японская анимация пользуется огромным успехом по всему миру, включая Россию. Эти ленты любят за яркий сюжет, оригинальную рисовку и неизменный накал эмоций ';
        

        const descriptionTwo = document.createElement('p');
        descriptionTwo.classList.add('descriptionAnimego__text')
        descriptionTwo.textContent = 'Многие поклонники любят смотреть аниме онлайн, однако для этого часто приходится пользоваться несколькими источниками, поскольку ни один из них нельзя назвать универсальным. Но у нас есть отличная новость для любителей аниме! Мы запустили новый проект AnimeGO, посвящённый онлайн-просмотру аниме. Теперь Вам не придётся бороздить просторы интернета в поисках любимого тайтла – все лучшие аниме в хорошем качестве уже есть на нашем портале. Мы сами очень любим этот жанр и поэтому постарались сделать наш сайт как можно более удобным и захватывающим.';

        descriptionAnimego.append(heading, descriptionOne, descriptionTwo);

        description.appendChild(descriptionAnimego);

        this.parent.appendChild(description);
    }
}

