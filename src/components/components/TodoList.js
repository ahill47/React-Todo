import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoList extends Component {
    //cross off completted task
    getStyle=()=>{
     return {
         background:"#f4f4f4",
         padding: '10px',
         borderBottom:'1px #ccc dotted',
         textDecoration: this.props.todo.completed ? "line-through"
         : 'none'
     }
    }

 // prop drilling :(


    render() {
        //destrut
        const { id , title }= this.props.todo;
        return (
            <div style ={this.getStyle()}>
              <p>
                  <input type="checkbox"onChange={this.props.markComplete.bind (this,id)}/>{' '}
                  {title}</p>
                 <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}> X </button>
            </div>
        )
    }
}
//PropTypes
TodoList.propTypes ={
    todo: PropTypes.object.isRequired
  }
const btnStyle={
    background:"red",
    color:'white',
    border:'none',
    padding:'5px 10px',
    borderRadius:'50%',
    cursor:'pointer',
    

    
}

export default TodoList
