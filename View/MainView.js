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

        // const columnLeftElement = document.createElement('div');
        // columnLeftElement.classList.add('column-left');
        // this.columnLeft = new ColumnLeft();

        // const columnRightElement = document.createElement('div');
        // columnRightElement.classList.add('column-right');
        // this.columnRight = new ColumnRight();

        // container.append(columnLeftElement, columnRightElement);
        // root.append(container);
        // this.columnLeft.render(columnLeftElement);
        // this.columnRight.render(columnRightElement);
    }
}
