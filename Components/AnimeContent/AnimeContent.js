export class AnimeContent {
    constructor(parent) {
        this.parent = parent;
        this.container = null;
    }

    render(data) {

        const heading = document.createElement('h2');
        heading.classList.add('content__heading_text_style');
        heading.innerHTML += 'Новые аниме на сайте';

        console.log(data);


        data.forEach(element => {
            const image = document.createElement('img');
            image.classList.add('content__image');
            image.src = element.url_image;
            image.alt = 'AnimeGo';

            const container = document.createElement('div');
            container.classList.add('content__style');


            const contentDescription = document.createElement('div');
            contentDescription.classList.add('content__description');

            const linkAnime = document.createElement('a');
            linkAnime.classList.add('links__anime');
            linkAnime.href = element.url_anime;
            linkAnime.innerHTML += element.name_anime;

            const contentCategory = document.createElement('span');
            contentCategory.innerHTML += element.category_anime + ' / ' + element.age_anime;

            const description = document.createElement('p');
            description.classList.add('content__description_text_style');
            description.innerHTML += element.description_anime;

            contentDescription.append(linkAnime, contentCategory, description);

            container.append(image, contentDescription);
            this.container = container;

            this.parent.prepend(this.container);
        });

        this.parent.prepend(heading);
            
    }

    update(data) {
        this.render(data);
    }
}

