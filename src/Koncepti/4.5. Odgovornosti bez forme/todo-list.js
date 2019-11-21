import React from 'react';
import TodoItem from './todo-item';

function FetchTodos () {
    return [
        {
            subject: "Finish your homework",
            points: 3,
            active: true,
            id: 0,
        },
        {
            subject: "Change your habits",
            points: 5,
            active: true,
            id: 1,
        }
    ];
}

export default class TodoList extends React.Component {
    constructor(props){
        super(props);

        this.state = { 
            todos: []
        };

        this.changeTodoStatus = this.changeTodoStatus.bind(this);
    }

    changeTodoStatus(id){
        const { todos } = this.state;
        let todo = todos.filter(todo => todo.id === id)[0];
        let filteredTodos = todos.filter(todo => todo.id !== id);
        todo.active = false;
        filteredTodos.push(todo);

        this.setState({todos: filteredTodos});
        this.props.updateSumOfPoints(todo.points);
    }

    componentDidMount(){
        // fetch todos and update the state
        const todos = FetchTodos();
        this.setState({todos});
    }

    render(){
        const { todos } = this.state;
        if (!todos) return [];
        const activeTodos = todos.filter(item => item.active === true).map(todo => {
            return <TodoItem key={todo.id} changeTodoStatus={this.changeTodoStatus} id={todo.id} key={todo.id} active={todo.active} subject={todo.subject} points={todo.points}/>
        });
        const doneTodos = todos.filter(item => item.active === false).map(todo => {
            return <TodoItem key={todo.id} changeTodoStatus={this.changeTodoStatus} id={todo.id} key={todo.id} active={todo.active} subject={todo.subject} points={todo.points}/>
        });

        return <div>
                <div className="col s6">
                    <h6>Active:</h6>
                    <div className="collection">{ activeTodos }</div>
                </div>
                <div className="col s6">
                    <h6>Done:</h6>
                    <div className="collection">{ doneTodos }</div>
                </div>
        </div>;
    }
}