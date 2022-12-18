export class Error {
    constructor(parent) {
        this.parent = parent;
    }

    render({title, description}) {

        if (!title || !description) {
            return;
        }
        
        try {
            const errorContainer = document.createElement('div');
            errorContainer.classList.add('error-container__div');

            const errorStatus = document.createElement('p');
            errorStatus.classList.add('error-container__status');
            errorStatus.textContent = title;

            const errorText = document.createElement('p');
            errorText.classList.add('error-container__text');
            errorText.textContent = description;

            errorContainer.append(errorStatus, errorText);

            this.parent.append(errorContainer);
        } catch(error) {
            return;
        }

    }

}
