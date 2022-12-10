import {ContentView} from '../view/contentView.js';
import {AnimeContents} from '../model/animeContents.js';
import EventBus from '../utils/eventBus.js';


export class ContentController {
    async process(url) {
        const view = new ContentView();
        view.render();

        const animeContents = new AnimeContents();
        EventBus.emit('animeContents:loading');
        animeContents.fetchDataGetById(url)
    }
}