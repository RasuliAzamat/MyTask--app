import { HeaderComponent } from './components/header.component.js';
import { NavigationComponent } from './components/navigation.component.js';
import { JournalComponent } from './components/journal.component.js';
import { AddComponent } from './components/add.component.js';
import { TasksComponent } from './components/tasks.component.js';
import { LoaderComponent } from './components/loader.component.js';

const loader = new LoaderComponent('loader');
const header = new HeaderComponent('header');
const navigation = new NavigationComponent('navigation');
const tasks = new TasksComponent('tasks', { loader });
const journal = new JournalComponent('journal', { loader });
const add = new AddComponent('add');

navigation.registerLink([
    { name: 'tasks', component: tasks },
    { name: 'add', component: add },
    { name: 'journal', component: journal },
]);
