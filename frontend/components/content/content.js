export class Content {
    constructor(parent) {
        this.parent = parent;
        this.container = null;
    }

    render(data) {

        const heading = document.createElement('h2');
        heading.classList.add('content__heading_text_style');
        heading.textContent += 'Новые аниме на сайте';

        this.parent.prepend(heading);

        data.forEach(element => {
            const image = document.createElement('img');
            image.classList.add('content__image');
            image.src = element.url_image;
            image.alt = 'AnimeGo';

            const container = document.createElement('div');
            container.classList.add('content__style');


            const contentDescription = document.createElement('div');
            contentDescription.classList.add('content__description');

            const link = document.createElement('a');
            link.classList.add('links__anime');
            link.href = element.url_anime;
            link.target = '_blank';
            link.textContent = element.name_anime;

            const contentCategory = document.createElement('span');
            contentCategory.textContent = element.category_anime + ' / ' + element.age_anime;

            const description = document.createElement('p');
            description.classList.add('content__description_text_style');
            description.textContent = element.description_anime;

            contentDescription.append(link, contentCategory, description);

            container.append(image, contentDescription);
            this.container = container;

            this.parent.append(this.container);
        });
            
    }

    update(data) {
        this.render(data);
    }
}

