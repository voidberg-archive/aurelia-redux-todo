import {customElement, bindable} from 'aurelia-framework';

@customElement('todo-footer')
export class TodoFooter {
  @bindable filter;
  @bindable visibilityCallback;
}
