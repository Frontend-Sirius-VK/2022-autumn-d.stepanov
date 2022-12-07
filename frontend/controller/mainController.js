import {MainView} from '../view/mainView.js';
import {AnimeContents} from '../model/animeContents.js';


export class MainController {
    async process() {
        const view = new MainView();
        view.render();

        const animeContents = new AnimeContents();
        animeContents.fetchData();

    }
}

