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

        // todo
    }

    componentDidMount(){
        // fetch todos and update the state
        const todos = FetchTodos();
        this.setState({todos});
    }

    render(){
       // todo
    }
}