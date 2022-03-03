import { Component } from '../core/component.js';

export class HeaderComponent extends Component {
    constructor(id) {
        super(id);
    }

    init() {
        if (localStorage.getItem('visited')) return this.hide();

        document.documentElement.classList.add('block-scroll');

        this.$element.addEventListener('click', headerHandler.bind(this));
    }
}

function headerHandler(event) {
    if (event.target.dataset.name === 'startButton') {
        this.hide();

        localStorage.setItem('visited', JSON.stringify(true));

        document.documentElement.classList.remove('block-scroll');
    }
}
