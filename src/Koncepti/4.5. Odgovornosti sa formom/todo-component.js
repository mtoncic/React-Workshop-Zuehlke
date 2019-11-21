import React from 'react';
import TodoList from './todo-list';

class Todo extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            subject: "",
            points: 0,
            items: [],
            sumOfPoints: 0,
            id: 0
        }

        this.updatePoints = this.updatePoints.bind(this);
        this.updateSubject = this.updateSubject.bind(this);
        this.changeTodoStatus = this.changeTodoStatus.bind(this);
    }

    changeTodoStatus(id){
        const { items } = this.state;
        let todo = items.filter(todo => todo.id === id)[0];
        let todos = items.filter(todo => todo.id !== id);
        todo.active = false;
        todos.push(todo);

        this.setState( prevState => ({
            items: todos,
            sumOfPoints: prevState.sumOfPoints + todo.points
        }))
    }

    updatePoints(event){
        this.setState({
            points: parseInt(event.target.value)
        })
    }

    updateSubject(event){
        this.setState({
            subject: event.target.value
        })
    }

    addTodo(event){
        event.preventDefault();
        this.setState(prevState => ({
            items: [...prevState.items, { id: prevState.id++, subject: prevState.subject, points: prevState.points, active: true}],
            subject: "",
            points: 0
        }));
    }

    render(){
        const { subject, points, items, sumOfPoints } = this.state;

        return <div className="container">
                    <div className="row card blue-grey darken-1">
                        <div className="card-content white-text">
                        Points: {sumOfPoints}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s4">
                            <label>Description:</label> <input name="subject" type="text" value={ subject } onChange={ this.updateSubject } placeholder="Todo" />
                            <label>Number of points (value):</label><input name="points" type="number" value={ points } onChange={ this.updatePoints } placeholder="Points" />
                            <a href="" className="waves-effect waves-light btn" onClick={(event) => this.addTodo(event)}>ADD</a>
                        </div>
                    </div>
                        <div className="row">
                                <h5>List of TODO's:</h5>
                                <TodoList changeTodoStatus={this.changeTodoStatus} items={items} />
                        </div>
        </div>
       
    }

}

export default Todo;