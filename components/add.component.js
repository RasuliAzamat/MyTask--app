import { Component } from '../core/component.js';
import { TasksComponent } from "./tasks.component.js";
import { Form } from '../core/form.js';
import { Validators } from '../core/validators.js';
import { databaseService } from '../services/database.service.js';

export class AddComponent extends Component {
    constructor(id) {
        super(id);
    }

    init() {
        this.$element.addEventListener('submit', formHandler.bind(this));

        this.form = new Form(this.$element, {
            heading: [Validators.correctLength],
            deadline: [Validators.correctDate],
        });
    }
}

function formHandler(event) {
    event.preventDefault();

    if (this.form.isValid()) {
        const formData = {
            ...this.form.values(),
            done: false,
            priority: this.$element.priority.value,
            date: new Date().toLocaleDateString(),
        };

        databaseService.postData(formData);

        this.form.clear();

        alert('Задача успешно добавлена')
    }
}
