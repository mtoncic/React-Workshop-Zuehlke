import React from 'react';
import TodoItem from './todo-item';

class TodoList extends React.Component {
    constructor(props){
        super(props);

        this.changeTodoStatus = this.changeTodoStatus.bind(this);
    }

    changeTodoStatus(id){
        this.props.changeTodoStatus(id);
    }

    render(){
        const { items } = this.props;
        if (!items) return [];
        const activeTodos = items.filter(item => item.active === true).map(todo => {
            return <TodoItem changeTodoStatus={this.changeTodoStatus} id={todo.id} key={todo.id} active={todo.active} subject={todo.subject} points={todo.points}/>
        });
        const doneTodos = items.filter(item => item.active === false).map(todo => {
            return <TodoItem changeTodoStatus={this.changeTodoStatus} id={todo.id} key={todo.id} active={todo.active} subject={todo.subject} points={todo.points}/>
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

export default TodoList;