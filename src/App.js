import React from 'react';
import Todo from './components/components/Todo'
import Header from './components/components/Header'
import AddTodo from './components/components/AddTodo'
import './components/components/App.css'





class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

 state={
     todos:[
       {
       id:1,
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
 AddTodo=(title)=>{
   console.log('hi')
 }
  render() {
    return (
      <div className='App'>
            <div className="container">
            <Header/>
            
            <br></br>
            <AddTodo AddTodo={this.state.todos}/>
            <Todo todos={this.state.todos} markComplete={this.markComplete}
            delTodo={this.delTodo}/>
          </div>
      </div>
    );
  }
}

export default App;
