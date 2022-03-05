import { Component } from '../core/component.js';
import { Form } from '../core/form.js';
import { Validators } from '../core/validators.js';

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
            date: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
            priority: this.$element.priority.value,
        };
    }
}
