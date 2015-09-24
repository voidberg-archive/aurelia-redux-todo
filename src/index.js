import { createStore } from 'redux';
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from './actions';
import todoApp from './reducers';

export class TodoIndex {
  constructor() {
    this.todoStore = createStore(todoApp);

    this.todoStore.subscribe(() =>
      this.update()
    );

    this.update();
  }

  update() {
    const state = this.todoStore.getState();

    this.visibleTodos = this.selectTodos(state.todos, state.visibilityFilter);
    this.visibilityFilter = state.visibilityFilter;
  }

  selectTodos(todos, filter) {
    switch (filter) {
      case VisibilityFilters.SHOW_ALL:
        return todos;
      case VisibilityFilters.SHOW_COMPLETED:
        return todos.filter(todo => todo.completed);
      case VisibilityFilters.SHOW_ACTIVE:
        return todos.filter(todo => !todo.completed);
    }
  }

  addClicked(value) {
    this.todoStore.dispatch(addTodo(value));
  }

  filterChanged(nextFilter) {
    this.todoStore.dispatch(setVisibilityFilter(nextFilter));
  }

  completeTodo(index) {
    this.todoStore.dispatch(completeTodo(index));
  }

  activate() {
  }
}
