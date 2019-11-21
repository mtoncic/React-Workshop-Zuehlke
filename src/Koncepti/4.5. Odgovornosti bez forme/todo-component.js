import React from 'react';
import TodoList from './todo-list';

class Todo extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            items: [],
            sumOfPoints: 0,
        }
    }

    updateSumOfPoints = (additionalPoints) => {   // ovde koristimo lambdu i bindovanje za kontekst nije potrebno, potrazumevano je kontekst klase
        this.setState( (prevState) => ({
            sumOfPoints: prevState.sumOfPoints + additionalPoints
        })); //pripazite na višak zagrada koji se stavlja, nije samo () => { } već () => ({}), dobra praksa kada se vraća objekat
    }

    render(){
        const { items, sumOfPoints } = this.state;

        return <div className="container">
                    <div className="row card blue-grey darken-1">
                        <div className="card-content white-text">
                        Points: {sumOfPoints}
                        </div>
                    </div>
                        <div className="row">
                                <h5>List of TODO's:</h5>
                                <TodoList updateSumOfPoints={this.updateSumOfPoints} changeTodoStatus={this.changeTodoStatus} items={items} />
                        </div>
        </div>
       
    }

}

export default Todo;