export class Validators {
    static correctLength(value = '', element) {
        const valueLength = value.trim().length;

        if (valueLength <= 0 || valueLength >= 30) {
            showError(element, 'correctLength');
            return false;
        } else {
            hideError(element);
            return true;
        }
    }

    static correctDate(value, element) {
        if (
            !(
                new Date(value).getTime() >= Date.now() &&
                new Date(value).getTime() <= new Date(Date.now() * 2)
            )
        ) {
            showError(element, 'correctDate');
            return false;
        } else {
            hideError(element);
            return true;
        }
    }
}

function showError(element, errorName = '') {
    const parentElement = element.closest('.form__item');

    const errorСorrectLengthText = `
        <p class="form__item--error">
            Поле должно быть заполненным. Максимальноe количество симполов: 30.
        </p>`;
    const errorСorrectDateText = `
        <p class="form__item--error">
            Дата не может быть ниже сегодняшней и выше чем на 50 лет.
        </p>`;

    if (parentElement.classList.contains('error')) {
        hideError(element);
    }
    parentElement.classList.add('error');

    parentElement.insertAdjacentHTML(
        'beforeend',
        errorName === 'correctLength' ? errorСorrectLengthText : errorСorrectDateText
    );
}

function hideError(element) {
    element.closest('.form__item').classList.remove('error');
    element.nextElementSibling?.remove();
}
