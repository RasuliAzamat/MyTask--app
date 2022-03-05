export class Form {
    constructor(form, inputs) {
        this.form = form;
        this.inputs = inputs;
    }

    values() {
        const values = {};

        for (const input of Object.keys(this.inputs)) {
            values[input] = this.form[input].value;
        }

        return values;
    }

    clear() {
        for (const input of Object.keys(this.inputs)) {
            this.form[input].value = '';
        }
    }

    isValid() {
        let isFormValid = true;

        for (const input of Object.keys(this.inputs)) {
            const validators = this.inputs[input];

            let isValidatorValid = true;

            validators.forEach((validator) => {
                isValidatorValid =
                    validator(this.form[input].value, this.form[input]) && isFormValid;
            });

            isFormValid = isValidatorValid && isFormValid;
        }

        return isFormValid;
    }
}
