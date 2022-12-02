import {MainView} from '../View/MainView.js';
import {AnimeContents} from '../Model/AnimeContents.js';


export class MainController {
    async process() {
        const view = new MainView();
        view.render();

        const animeContents = new AnimeContents();
        animeContents.fetchData();

    }
}

