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

        const views = Array.from(document.querySelectorAll('[data-view]'));
        const activeView = views.find((view) => view.id === event.target.dataset.link);

        for (const view of views) view.classList.remove('active');
        activeView.classList.add('active');
    }
}
