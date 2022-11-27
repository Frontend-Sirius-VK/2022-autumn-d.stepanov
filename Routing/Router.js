import {MainController} from '../Controller/MainController.js'

const routes = {
    '/': MainController,
}

export class Router {
    constructor() {
        this.onDocumentClick = this.onDocumentClick.bind(this);
    }

    onDocumentClick(event) {
        const {target} = event;
        const {tagName} = target;

        if (tagName === 'A') {

            if (target.href !== undefined) {
                this.go(target.href);
            }
        }
    }

    go(pathname) {
        window.history.pushState({}, '', pathname);
        this.invokeController();
    }

    invokeController() {
        const ControllerClass = routes[window.location.pathname];
        const controller = new ControllerClass();
        controller.process();
    }

    start() {
        document.addEventListener('click', this.onDocumentClick);
        this.invokeController();
    }

    stop() {
        document.removeEventListener('click', this.onDocumentClick);
    }
}

export const router = new Router();