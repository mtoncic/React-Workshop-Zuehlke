import React from 'react';

const TodoItem = (props) => {
    return <div className="collection-item">
                <div>
                    <label>Description</label> 
                    <div className="todo-item-subject">
                        { props.subject }
                    </div>
                    <label>Points</label>
                    <div className="todo-item-points">
                        { props.points }
                    </div>
                </div>
                <div hidden={props.active === false}>
                    <hr />
                    <label>
                        <input onChange={() => props.changeTodoStatus(props.id)} type="checkbox" className="filled-in" />
                    <span>Done</span>
                    </label>
                </div>
    </div>
}

export default TodoItem;