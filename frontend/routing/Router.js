import {MainController} from '../controller/mainController.js';
import {ContentController} from '../controller/contentController.js';

const routes = [
    {
        path: /^\/$/,
        controller: MainController
    },
    {
        path: /anime\/d/,
        controller: ContentController
    },
]


export class Router {
    constructor() {

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

    invokeController() {
        const id = this.getId();

        const pathname = window.location.pathname;

        const result = routes.find((route) => {
            const regexp = new RegExp(route.path);
            const matches = pathname.match(regexp);

            if (!matches) {
                return false;
            }
            return true;
        });

        if (!result) {
            return;
        }

        const ControllerClass = result.controller;
        const controller = new ControllerClass();
        controller.process(id);

    }

    start() {
        this.invokeController();
    }

}

export const router = new Router();