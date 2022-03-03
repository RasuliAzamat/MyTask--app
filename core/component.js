export class Component {
    constructor(id) {
        this.$element = document.getElementById(id)
        this.init()
    }

    init() {}

    show() {
        this.$element.classList.add('active')
    }

    hide() {
        this.$element.classList.remove('active')
    }
}
