import {AnimeCotroller} from '../controller/animeController.js';
import {AnimePage} from '../controller/animePage.js';
import EventBus from '../utils/eventBus.js';


const routes = [
    {
        path: `\^/\$`,
        controller: AnimeCotroller,
        id: false
    },
    {
        path: `/anime/\\d`,
        controller: AnimePage,
        id: true
    },
]


export class Router {
    constructor() {
        EventBus.off('animeContents:loading');
        EventBus.off('animeContents:error');
        EventBus.off('animeContents:got-by-id-info');
        EventBus.off('animeContents:got-info');
        this.onDocumentClick = this.onDocumentClick.bind(this);
    }

    getId() {
        const pathName = window.location.pathname;
        const rex = /\w+$/;
        try {
            return pathName.match(rex)[0];
        } catch (error) {
            return;
        }
    }

    onDocumentClick(event) {
        const {target} = event;
        const {tagName} = target;

        if (tagName === 'A') {
            event.preventDefault();

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
        const pathname = window.location.pathname;
        console.log(pathname);

        const result = routes.find((route) => {
            console.log(route.path);
            const regexp = new RegExp(route.path);
            const matches = pathname.match(regexp);
            return Boolean(matches); 
        });

        console.log(result);

        console.log(result);

        if (!result) {
            return;
        }

        const ControllerClass = result.controller;
        console.log(result.controller);
        const controller = new ControllerClass();

        if (!result.id) {
            controller.process();
        } else {
            const rex = /\w+$/;
            controller.process(pathname.match(rex)[0])
        }
    }

    run() {
        this.invokeController();
    }

    start() {
        document.addEventListener('click', this.onDocumentClick);
    }

    stop() {
        document.removeEventListener('click', this.onDocumentClick);
    }

}

export const router = new Router();