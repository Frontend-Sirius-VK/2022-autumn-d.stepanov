export class Error {
    constructor(parent) {
        this.parent = parent;
    }

    render(data) {
        // const root = document.querySelector('#root');
        // this.parent = document.createElement('div');

        const errorContainer = document.createElement('div');
        errorContainer.classList.add('error-container__div');

        const errorStatus = document.createElement('p');
        errorStatus.classList.add('error-container__status');
        errorStatus.textContent = data[0];

        const errorText = document.createElement('p');
        errorText.classList.add('error-container__text');
        errorText.textContent = data[1];

        errorContainer.append(errorStatus, errorText);

        this.parent.append(errorContainer);
        // root.append(this.parent);
    }

}