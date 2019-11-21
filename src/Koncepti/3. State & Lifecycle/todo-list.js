import React from 'react';
import TodoItem from './todo-item';

function FetchTodos () {
    return [
        {
            subject: "Finish your homework",
            points: 3,
            id: 0,
        },
        {
            subject: "Change your habits",
            points: 5,
            id: 1,
        }
    ];
}

export class TodoList extends React.Component {
    constructor(props){
        super(props);

        this.state = { 
            todos: []
        }
    }

    componentDidMount(){
        // fetch todos and update the state
        const todos = FetchTodos();
        this.setState({todos});
    }

    render(){
        const { todos } = this.state;
        if (!todos) return [];

        const todoElements = todos.map(todo => {
            return <TodoItem id={todo.id} key={todo.id} subject={todo.subject} points={todo.points}/>
        });

        return <div>
                <div className="col s6">
                    <div className="collection">{ todoElements }</div>
                </div>
        </div>;
    }
}


// export class TodoList extends React.Component {
//     constructor(props){
//         super(props);
        
//         this.state = { 
//             todos: []
//         }
//     }

//     componentDidMount(){
//         // fetch todos and update the state
//     }

//     render(){
//         const { items } = this.state;
//         if (!items) return [];

//         const activeTodos = items.filter(item => item.active === true).map(todo => {
//             return <TodoItem id={todo.id} active={todo.active} subject={todo.subject} points={todo.points}/>
//         });
//         const doneTodos = items.filter(item => item.active === false).map(todo => {
//             return <TodoItem id={todo.id} active={todo.active} subject={todo.subject} points={todo.points}/>
//         });

//         return <div>
//                 <div className="col s6">
//                     <h6>Active:</h6>
//                     <div className="collection">{ activeTodos }</div>
//                 </div>
//                 <div className="col s6">
//                     <h6>Done:</h6>
//                     <div className="collection">{ doneTodos }</div>
//                 </div>
//         </div>;
//     }
// }
