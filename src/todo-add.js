import {customElement, bindable} from 'aurelia-framework';

@customElement('todo-add')
export class TodoAdd {
  @bindable addCallback;
}
