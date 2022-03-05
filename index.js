import { HeaderComponent } from './components/header.component.js';
import { NavigationComponent } from './components/navigation.component.js';
import { JournalComponent } from './components/journal.component.js';
import { AddComponent } from './components/add.component.js';
import { TasksComponent } from './components/tasks.component.js';

const header = new HeaderComponent('header');
const navigation = new NavigationComponent('navigation');
const tasks = new TasksComponent('tasks');
const journal = new JournalComponent('journal');
const add = new AddComponent('add');