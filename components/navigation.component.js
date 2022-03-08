import { Component } from '../core/component.js';

export class NavigationComponent extends Component {
    constructor(id) {
        super(id);
    }

    init() {
        this.$element.addEventListener('click', navigationHandler.bind(this));
    }

    registerLink(links) {
        this.links = links;
    }
}

function navigationHandler(event) {
    event.preventDefault();

    if (event.target.dataset.button === 'menu') {
        document.documentElement.classList.toggle('block-scroll');
        this.$element.classList.toggle('active');
    }

    if (event.target.dataset.link) {
        const links = this.$element.querySelectorAll('[data-link]');
        document.documentElement.classList.remove('block-scroll');

        for (const link of links) link.classList.remove('active');
        event.target.classList.add('active');
        this.$element.classList.remove('active');

        if (event.target.dataset.link === 'index') {
            location.href = location.origin + location.pathname;
        } else {
            location.href = location.origin + location.pathname + event.target.hash;
        }

        const activeView = this.links.find((link) => link.name === event.target.dataset.link);

        this.links.forEach((link) => link.component.hide());
        activeView.component.show();
    }
}
