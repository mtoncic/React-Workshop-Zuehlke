import React from 'react';

// export function TodoItem(props){
//     return "todo";
// }

// export const TodoItem = function(props){
//     return "todo";
// }

// export const TodoItem = (props) => {
//     return "todo";
// } 

// export class TodoItem extends React.Component {
//     render(){
//         // ovde pristupamo propsu preko this pokazivača
//         // this.props 
//         return "todo";
//     }
// }

// export class Person extends React.Component {
//     render(){
//         return JSON.stringify(this.props);
//     }
// } 


export const TodoItem = (props) => {
    return <div className="collection-item">
                <div>                    <label>Description</label> 
                    <div className="todo-item-subject">
                        description
                    </div>
                    <label>Points</label>
                    <div className="todo-item-points">
                        points
                    </div>
                </div>
                <div>
                    <hr />
                    <label>
                        <input type="checkbox" className="filled-in" />
                    <span>Done</span>
                    </label>
                </div>
    </div>
}


// export const TodoItem = (props) => {
//     return <div className="collection-item">
//                 <div>
//                     <label>Description</label> 
//                     <div className="todo-item-subject">
//                         { props.subject }
//                     </div>
//                     <label>Points</label>
//                     <div className="todo-item-points">
//                         { props.points }
//                     </div>
//                 </div>
//                 <div hidden={props.active === false}>
//                     <hr />
//                     <label>
//                         <input type="checkbox" className="filled-in" />
//                     <span>Done</span>
//                     </label>
//                 </div>
//     </div>
// }
