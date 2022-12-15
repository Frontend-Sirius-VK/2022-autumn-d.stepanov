// import template from './descriptionSite.handlebars';

// const DESCRIPTION_H1 = 'AnimeGO — смотреть аниме онлайн бесплатно';
// const DESCRIPTION_ONE = 'Вот уже много лет японская анимация пользуется огромным успехом по всему миру, включая Россию. Эти ленты любят за яркий сюжет, оригинальную рисовку и неизменный накал эмоций';
// const DESCRIPTION_TWO = 'Многие поклонники любят смотреть аниме онлайн, однако для этого часто приходится пользоваться несколькими источниками, поскольку ни один из них нельзя назвать универсальным. Но у нас есть отличная новость для любителей аниме! Мы запустили новый проект AnimeGO, посвящённый онлайн-просмотру аниме. Теперь Вам не придётся бороздить просторы интернета в поисках любимого тайтла – все лучшие аниме в хорошем качестве уже есть на нашем портале. Мы сами очень любим этот жанр и поэтому постарались сделать наш сайт как можно более удобным и захватывающим.';

export class Description {
    constructor(parent) {
        this.parent = parent;
    }

    render() {

        const pageDescription = document.createElement('div');
        pageDescription.classList.add('page-description');

        const description = document.createElement('div');
        description.classList.add('description');

        const heading = document.createElement('h1');
        heading.classList.add('description__h1');
        heading.textContent = 'AnimeGO — смотреть аниме онлайн бесплатно';

        const descriptionOne = document.createElement('p');
        descriptionOne.classList.add('description__p');
        descriptionOne.textContent = 'Вот уже много лет японская анимация пользуется огромным успехом по всему миру, включая Россию. Эти ленты любят за яркий сюжет, оригинальную рисовку и неизменный накал эмоций ';
        

        const descriptionTwo = document.createElement('p');
        descriptionTwo.classList.add('description__p')
        descriptionTwo.textContent = 'Многие поклонники любят смотреть аниме онлайн, однако для этого часто приходится пользоваться несколькими источниками, поскольку ни один из них нельзя назвать универсальным. Но у нас есть отличная новость для любителей аниме! Мы запустили новый проект AnimeGO, посвящённый онлайн-просмотру аниме. Теперь Вам не придётся бороздить просторы интернета в поисках любимого тайтла – все лучшие аниме в хорошем качестве уже есть на нашем портале. Мы сами очень любим этот жанр и поэтому постарались сделать наш сайт как можно более удобным и захватывающим.';

        description.append(heading, descriptionOne, descriptionTwo);

        pageDescription.appendChild(description);

        this.parent.appendChild(pageDescription);

        // const context = {DESCRIPTION_H1, DESCRIPTION_ONE, DESCRIPTION_TWO};
        // const html = template(context);

        // this.parent.innerHtml += html;
    }
}

