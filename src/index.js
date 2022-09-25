import './styles.css'

import {Todo, TodoList} from './js/classes';
import { crearTodoHtml } from './js/crear-todo';


const tarea = new Todo('Aprender Javascript');

export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHtml);

