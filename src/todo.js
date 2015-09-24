import {customElement, bindable} from 'aurelia-framework';

@customElement('todo')
export class Todo {
  @bindable todo;

  attached() {
    this.todoClass = this.todo.completed ? 'completed' : '';
  }
}
