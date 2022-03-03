import { Component } from '../core/component.js';

export class NavigationComponent extends Component {
    constructor(id) {
        super(id);
    }

    init() {
        this.$element.addEventListener('click', navigationHandler.bind(this));
    }
}

function navigationHandler(event) {
    event.preventDefault();

    const links = this.$element.querySelectorAll('[data-name*="Link"]');

    if (event.target.dataset.name === 'menuBurger') {
        document.documentElement.classList.toggle('block-scroll');
        this.$element.classList.toggle('active');
    }

    if (event.target.href) {
        for (const link of links) {
            if (link.classList.contains('active')) {
                link.classList.remove('active');
            }
        }

        event.target.classList.add('active');
        this.$element.classList.remove('active');

        if (event.target.dataset.name === 'indexLink') {
            location.href = location.origin + location.pathname;
        } else {
            location.href = location.origin + location.pathname + event.target.hash;
        }
    }
}
