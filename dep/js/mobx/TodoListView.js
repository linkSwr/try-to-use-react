import TodoView from './TodoView';
import Todo from './Todo';
import {observer} from 'mobx-react';
import React, {Component} from 'react';

const addItem = (todoList) => {
    return () => {
        todoList.todos.push(new Todo(Math.random()));
    }
}

const setLastTitle = (todoList) => {
    return () => {
        let item = todoList.todos.filter((todo) => todo.title).pop()
        item.title = new Date().toString();
    }
}

@observer
class TodoListView extends Component {
    render() {
        return <div>
            <ul>
                {this.props.todoList.todos.map(todo =>
                    <TodoView todo={todo} key={todo.id} />
                )}
            </ul>
            Tasks left: {this.props.todoList.unfinishedTodoCount}
            <br/>
            <button onClick={addItem(this.props.todoList)}>添加</button>
            <button onClick={setLastTitle(this.props.todoList)}>修改title</button>
        </div>
    }
}

export default TodoListView