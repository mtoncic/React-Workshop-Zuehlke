import ReactDOM from 'react-dom';
import React from 'react';
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import '../node_modules/materialize-css/dist/js/materialize'

// import { TodoItem } from './Koncepti/1. Components & Props/todo-item';
// import { TodoList } from './Koncepti/1. Components & Props/todo-list';
// import { Person } from './Koncepti/1. Components & Props/todo-item';
// import { TodoItem } from './Koncepti/3. State & Lifecycle/todo-item';
// import { TodoList } from './Koncepti/3. State & Lifecycle/todo-list';
// import { TodoItem } from './Koncepti/4. Kako rukovodimo događajima/todo-item';
// import { TodoList } from './Koncepti/4. Kako rukovodimo događajima/todo-list';
// import { TodoItem } from './Koncepti/4.5. Odgovornosti bez forme/todo-item';
// import { TodoList } from './Koncepti/4.5. Odgovornosti bez forme/todo-list';
 import Todo from './Koncepti/4.5. Odgovornosti bez forme/todo-component';


//import Todo from './Koncepti/5.Kraj/react-način/todo-component'

ReactDOM.render(<Todo />, document.getElementById('root'));