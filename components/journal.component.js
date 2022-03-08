import { Component } from '../core/component.js';
import { renderTask } from '../templates/task.template.js';

export class JournalComponent extends Component {
    constructor(id) {
        super(id);
    }

    init() {
        this.$element.addEventListener('click', journalHandler.bind(this));
    }

    onShow() {
        const tasks = JSON.parse(localStorage.getItem('journal')) || [];

        const html = renderTasksList(tasks);

        this.$element.insertAdjacentHTML('beforeend', html);
    }

    onHide() {
        const pageTitle = this.$element.firstElementChild;
        this.$element.innerHTML = '';
        this.$element.insertAdjacentElement('afterbegin', pageTitle);
    }
}

function journalHandler(event) {
    event.preventDefault();

    const target = event.target;

    if (target.dataset.link === 'taskJournal') {
        const taskId = target.dataset.id;

        const tasks = JSON.parse(localStorage.getItem('journal')) || [];
        const candidate = tasks.find((task) => task.id === taskId);

        target.innerHTML = renderTask(candidate, { withButton: false });
    }
}

function renderTasksList(list = []) {
    if (list.length) {
        return `
            <ul class="journal__list">${list
                .map(
                    (task) => `
                <li class="journal__list--item">
                    <a href="#" class="journal__list--link">
                        <s data-link="taskJournal" data-id="${task.id}">${task.heading}</s>
                    </a>
                </li>
            `
                )
                .join(' ')}</ul>
        `;
    } else {
        return `<p>Ваш журнал выполненных задач пуст</p>`;
    }
}
