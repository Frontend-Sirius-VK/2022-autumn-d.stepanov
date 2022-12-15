import { Loader } from '../loader/loader.js';
import EventBus from "../../utils/eventBus.js";
// import imageAnime from '../../../backend/image/animeContent/';

let files = [];

function importAll(r) {
    r.keys().forEach((s, i, arr) => files[i] = r(s));
}

importAll(require.context('../../../backend/image/animeContent/', true, /\.jpg$/));
console.log(files);

export class Content {
    constructor(parent) {
        this.parent = parent;

        const contentsPost = document.createElement('div');
        contentsPost.classList.add('contents-post');
        this.contentsPost = contentsPost;

        EventBus.on('animeContents:loading', this.render.bind(this));
    }

    render(data) {

        if (!data) {
            this.contentsPost.innerHTML = '';
            const loader = new Loader(this.contentsPost);
            loader.render();
            this.parent.append(this.contentsPost);
            return;
        }

        const contentsHeading = document.createElement('h2');
        contentsHeading.classList.add('contents-heading__h2');
        contentsHeading.textContent = 'Новые аниме на сайте';

        this.parent.prepend(contentsHeading);


        data.forEach(element => {

            // console.log(imageAnime);

            const {id, urlImage, urlAnime, nameAnime, categoryAnime, ageAnime, descriptionAnime} = element;

            this.contentsPost = document.createElement('div');
            this.contentsPost.classList.add('contents-post');

            const image = document.createElement('img');
            image.classList.add('contents-post__img');
            image.src = '';
            image.alt = 'AnimeGo';


            const contentDescription = document.createElement('div');
            contentDescription.classList.add('contents-post-description');

            const link = document.createElement('a');
            link.classList.add('contents-post-description__a');
            link.href = urlAnime + id;
            link.target = '_blank';
            link.textContent = nameAnime;

            const contentCategory = document.createElement('span');
            contentCategory.classList.add('contents-post-description__span');
            contentCategory.textContent = categoryAnime + ' / ' + ageAnime;

            const description = document.createElement('p');
            description.classList.add('contents-post-description__p');
            description.textContent = descriptionAnime;

            contentDescription.append(link, contentCategory, description);

            this.contentsPost.append(image, contentDescription);

            this.parent.append(this.contentsPost);
        });
            
    }

    update(data) {
        this.contentsPost.innerHTML = '';
        this.render(data);
    }
}

