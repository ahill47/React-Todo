import React from 'react';
import TodoList from "./TodoList"
// import PropTypes from 'prop-types'

class Todo extends React.Component {
 
  render() {
    
    return this.props.todos.map((todo)=>(
    <TodoList key= {todo.id} todo={todo} markComplete={this.props.markComplete}
    delTodo={this.props.delTodo}/>
    ));
  }
}
// Todo.propTypes ={
//   todo: PropTypes.array.isRequired
// }
export default Todo;
