import {customElement, bindable} from 'aurelia-framework';

@customElement('todo-list')
export class TodoList {
  @bindable todos;
  @bindable completeCallback;
}
