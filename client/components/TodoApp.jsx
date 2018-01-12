import React from 'react';

const Todo = ({todo,remove}) => {
    return (
        <li onClick={remove(todo.id)} > {todo.text} </li>
    );
}


const TodoList = ({todos, remove}) => {
    const todoNode = todos.map((todo) => {
        return (<Todo todo={todo} key={todo.id} remove={remove} />)
    });
    return (<ul> {todoNode}</ul>)
}

const TodoForm = ({addTodo}) => {
    let input;

    return (
        <div>
            <input ref={node => {
                input = node;
            }} />
            <button onClick={()=> {
                addTodo(input.value);
                input.value = '';
            }}> 
            +
            </button>
        </div>
    )
}

const Title = ({todoCount}) => {
    return (
      <div>
         <div>
            <h1>to-do ({todoCount})</h1>
         </div>
      </div>
    );
  }

  window.id = 0;
class TodoApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    getCookie(name) {
        const match = document.cookie.match(new RegExp(name + '=([^;]+)'));
        if (match) return match[1];
      }

    addTodo(val){
        const s = new SyncanoClient('falling-wildflower-6623');
        const {data} = this.state;
        console.log(data);
        console.log(val);
        s.post('socketlist/addsocket', {socketName: val, socketDescription: val, token: this.getCookie('token')})
        .then(socketsList=>{
            console.log(socketsList);
            this.setState({data: socketsList})
        });
        console.log(this.state);
      }

      handleRemove(id){
        // Filter all todos except the one to be removed
        const remainder = this.state.data.filter((todo) => {
          if(todo.id !== id) return todo;
        });
        // Update state with filter
        this.setState({data: remainder});
      }

    render(){
        return (
          <div>
            <Title todoCount={this.state.data.length}/>
            <TodoForm addTodo={this.addTodo.bind(this)}/>
        <TodoList 
          todos={this.state.data} 
          remove={this.handleRemove.bind(this)}
        />
      </div>
        );
      }
}

export default TodoApp;