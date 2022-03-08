export function renderTask(task, options = { withButton: true, withPriority: true }) {
    const journal = JSON.parse(localStorage.getItem('journal')) || [];
    const candidate = journal.find((journalTask) => journalTask.id === task.id);

    const doneButton = `
        <button class="task__item--button button" data-button="done" data-id="${
            task.id
        }" data-heading="${task.heading}">
            ${candidate ? 'Отмена' : 'Сделано'}
        </button>
    `;

    const deleteButton = `
        <button class="task__item--button button" data-button="delete" data-id="${task.id}" data-heading="${task.heading}">
            Удалить
        </button>
    `;

    return `
        <div class="tasks__item ${candidate ? 'done' : ''}" data-done="${task.done}">
            <div class="task__item--level ${options.withPriority ? task.priority : 'none'}"></div>

                <div class="task__item--body">
                    <div class="task__item--info">
                        <h3 class="tasks__item--title">
                            ${task.heading}
                        </h3>
                        <div class="task__item--dates">
                            <p class="task__item--date">
                                Добавлено: <span class="task__item--date" data-name="date">
                                    ${task.date}
                                </span>
                            </p>
                            <p class="task__item--date">
                                Дедлайн: <span class="task__item--date red" data-name="deadline">
                                    ${new Date(task.deadline).toLocaleDateString()} 
                                    ${new Date(task.deadline).toLocaleTimeString()}
                                </span>
                            </p>
                        </div>
                    </div>
                <div class="task__item--controlrs">
                    ${options.withButton ? doneButton : ''}
                    ${options.withButton ? deleteButton : ''}
                </div>
            </div>
        </div>
    `;
}
