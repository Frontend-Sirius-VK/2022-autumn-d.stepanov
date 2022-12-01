import {MainView} from '../View/MainView.js';

export class MainController {
    process() {
        const view = new MainView();
        view.render();
    }
}