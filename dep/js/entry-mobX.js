// const module_2 = require('./module2.js')
// import * as moudle_2 from './module2';
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './appContainer';

import Immutable from 'immutable';

import TodoList from './mobx/TodoList';
import Todo from './mobx/Todo';
import TodoView from './mobx/TodoView';
import TodoListView from './mobx/TodoListView';;

import DevTools from 'mobx-react-devtools'



// import {Component} from 'react';
// import {observer} from "mobx-react";
// import {observable, computed} from 'mobx';

// class Todo {
//     id = Math.random();
//     @observable title = "";
//     @observable finished = false;
// }

// class TodoList {
//     @observable todos = [];
//     @computed get unfinishedTodoCount() {
//         return this.todos.filter(todo => !todo.finished).length;
//     }
// }

// @observer
// class TodoListView extends Component {
//     render() {
//         return <div>
//             <ul>
//                 {this.props.todoList.todos.map(todo =>
//                     <TodoView todo={todo} key={todo.id} />
//                 )}
//             </ul>
//             Tasks left: {this.props.todoList.unfinishedTodoCount}
//         </div>
//     }
// }

// const TodoView = observer(({todo}) =>
//     <li>
//         <input
//             type="checkbox"
//             checked={todo.finished}
//             onClick={() => todo.finished = !todo.finished}
//         />{todo.title}
//     </li>
// )




const store = new TodoList();

ReactDOM.render(
    <AppContainer>
        <div>
        <TodoListView todoList={store} />
        <DevTools />
        </div>
    </AppContainer>,
    document.getElementById('app-container')
);

store.todos.push(
    new Todo("Get Coffee"),
    new Todo("Write simpler code")
);
// store.todos[0].finished = true;

if (module.hot && module.hot.accept) {
  module.hot.accept('./mobx/TodoListView', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    let appContainer = require('./mobx/TodoListView');
    const NextApp = appContainer.default || appContainer;
    ReactDOM.render(
      <AppContainer>
        <div>
        <TodoListView todoList={store} />
        <DevTools />
        </div>
      </AppContainer>,
      document.getElementById('app-container')
    );
  });
}