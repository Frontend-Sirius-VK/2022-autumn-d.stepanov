import {Header} from '../Components/Header/Header.js';


export class MainView {
    constructor() {
        this.header = null;
    }

    render() {
        const root = document.querySelector('#root')
        const container = document.createElement('div');
        container.classList.add('page-container');

        const header = document.createElement('header');
        header.classList.add('header');
        this.header = new Header();

        container.append(header);
        root.append(container);
        this.header.render(header);
    }
}
