import { Component } from '../core/component.js';
import { TransformDataService } from '../services/data.transform.service.js';
import { databaseService } from '../services/database.service.js';
import { renderNote } from '../templates/task.template.js';

export class TasksComponent extends Component {
    constructor(id, { loader }) {
        super(id);
        this.loader = loader;
    }

    init() {
        this.$element.addEventListener('click', tasksControlHandler.bind(this));
    }

    async onShow() {
        try {
            this.loader.show();

            const tasksObject = await databaseService.getData();
            const tasksArray = TransformDataService.fbObjectToArray(tasksObject);
            const html = tasksArray.map((task) => renderNote(task));

            this.loader.hide();

            this.$element.insertAdjacentHTML('beforeend', html.join(' '));
        } catch (error) {
            const errorText = `<p>Ваш список задач пуст</p>`;
            this.$element.insertAdjacentHTML('beforeend', errorText);

            this.loader.hide();
        }
    }

    onHide() {
        const pageTitle = this.$element.firstElementChild;
        this.$element.innerHTML = '';
        this.$element.insertAdjacentElement('afterbegin', pageTitle);
    }
}

function tasksControlHandler(event) {
    const target = event.target;
    const taskId = target.dataset.id;

    const task = target.closest('.tasks__item');
    const taskDone = Boolean(task.dataset.done);
    const taskHeading = task.querySelector('.tasks__item--title').textContent;
    const taskDate = task.querySelector('[data-name="date"]').textContent;
    const taskDeadline = task.querySelector('[data-name="deadline"]').textContent;

    if (target.dataset.button === 'done') {
        task.classList.toggle('done');

        let journal = JSON.parse(localStorage.getItem('journal')) || [];
        let candidate = journal.find((task) => task.id === taskId);

        if (candidate) {
            journal = journal.filter((task) => task.id !== taskId);
            target.textContent = 'Сделано';
        } else {
            journal.push({
                id: taskId,
                headeing: taskHeading.trim(),
                date: taskDate.trim(),
                deadline: taskDeadline.trim(),
                done: taskDone,
            });
            target.textContent = 'Отмена';
        }

        localStorage.setItem('journal', JSON.stringify(journal));
    }

    if (target.dataset.button === 'delete') {
        databaseService.deleteData(taskId);

        let journal = JSON.parse(localStorage.getItem('journal')) || [];
        journal = journal.filter((journal) => journal.id !== taskId);
        localStorage.setItem('journal', JSON.stringify(journal));

        task.remove();
    }
}
