import { Component } from '../core/component.js';

export class HeaderComponent extends Component {
    constructor(id) {
        super(id);
    }

    init() {
        document.documentElement.classList.add('block-scroll');

        if (localStorage.getItem('visited')) {
            document.documentElement.classList.remove('block-scroll');
            return this.hide();
        }

        this.$element.addEventListener('click', headerHandler.bind(this));
    }
}

function headerHandler(event) {
    if (event.target.dataset.button === 'start') {
        this.hide();

        localStorage.setItem('visited', JSON.stringify(true));

        document.documentElement.classList.remove('block-scroll');
    }
}
