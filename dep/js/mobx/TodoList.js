import {observable, computed} from 'mobx';

class TodoList {
    @observable todos = [];
    @computed get unfinishedTodoCount() {
        let lastTitle = '';
        lastTitle = this.todos.filter(todo => todo.title).pop();
        if (lastTitle) {
            lastTitle = lastTitle.title;
        }
        return this.todos.filter(todo => !todo.finished).length + lastTitle;
    }
}

export default TodoList