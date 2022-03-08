import { Component } from '../core/component.js';

export class JournalComponent extends Component {
    constructor(id, { loader }) {
        super(id);
        this.loader = loader;
    }
}
