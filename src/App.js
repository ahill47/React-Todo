import React from 'react';
import Todo from './components/components/Todo'
import Header from './components/components/Header'
import AddTodo from './components/components/AddTodo'
import './components/components/App.css'
import uuid from 'uuid'





class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

 state={
     todos:[
       {
       id: uuid.v4(),
       title:'Learn Functional React',
       completed:false
     },
     {
       id:2,
     title:'Learn Class Classes',
     completed:false
   },
   {
    id:3,
    title:'Learn Node.js',
    completed:false
      }
   ]
};

// update State
markComplete=(id)=>{
this.setState({todos:this.state.todos.map(todo =>{
  if (todo.id === id){
    todo.completed =! todo.completed
  }
  return todo;
})});
}

delTodo=(id)=>{
 this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})}
  

 //
 addTodo=(title)=>{
  const newTodo={
    id:uuid.v4(),
    title,
    completed:false
  }
  this.setState({todos:[...this.state.todos, newTodo]})
 }
  render() {
    return (
      <div className='App'>
            <div className="container">
            <Header/>
            
            <br></br>
            {/* dont add .state AddTodo has its own state it isn't using App State */}
            <AddTodo addTodo={this.addTodo}/>
            <Todo todos={this.state.todos} markComplete={this.markComplete}
            delTodo={this.delTodo}/>
          </div>
      </div>
    );
  }
}

export default App;
