import { Description } from '../descriptionSite/descriptionSite';
import template from './error.handlebars';

export class Error {
    constructor(parent) {
        this.parent = parent;
    }

    render(data) {
        const [errorStatus, text] = data;
        const context = {errorStatus, text};
        const html = template(context);

        this.parent.innerHTML += html;
    }

}