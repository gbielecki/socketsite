import React from 'react';
import { DotLoader } from 'react-spinners';

const borderStyle = {
    borderBottom: '1px solid #ededed'
  };

  const buttonPadding = {
    margin: '2px'
  };

  

const Todo = ({todo,remove}) => {
    return (
        // <li > 
            <div>
                <div className="row mt-3" style={borderStyle}>
                    <div className="col col-lg-3 col-xs-12">
                        <input type="checkbox" />
                        <label>{todo.name}</label>
                    </div>
                    <div className="col col-lg-5 col-xs-12">
                        <label>{todo.description}</label>
                    </div>
                    <div className="col col-lg-4 col-xs-12">
                        <label>{todo.author}</label> 
                        <button className="btn btn-danger float-right buttonPadding" onClick={()=>{remove(todo.id)}}>X</button> 
                    </div>
                    <hr />
                </div>
            </div>
        //  </li>
    );
}


const TodoList = ({todos, remove}) => {
    const todoNode = todos.map((todo) => {
        return (<Todo todo={todo} key={todo.id} remove={remove} />)
    });
    return (<div> {todoNode}</div>)
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
            data: [],
            listLoaded: false
        }
    }

    componentDidMount(){
        const s = new SyncanoClient('young-hill-1592');
        s.post('socketlist/socketList')
        .then(socketsList=>{
            console.log(socketsList);
            this.setState({data: socketsList})
            this.setState({listLoaded: true})
        });
    }

    getCookie(name) {
        const match = document.cookie.match(new RegExp(name + '=([^;]+)'));
        if (match) return match[1];
      }

    addTodo(val){
        this.setState({listLoaded: false})
        const s = new SyncanoClient('young-hill-1592');
        const {data} = this.state;
        s.post('socketlist/addsocket', {socketName: val, socketDescription: val})
        .then(socketsList=>{
            this.setState({data: socketsList})
            this.setState({listLoaded: true})
        });
      }

      handleRemove(id){
        this.setState({listLoaded: false})
        const s = new SyncanoClient('young-hill-1592');
        s.post('socketlist/removeSocket', {socketId: id})
        .then(socketsList=>{
            console.log(socketsList);
            this.setState({data: socketsList})
            this.setState({listLoaded: true})
        });
        // Filter all todos except the one to be removed
        // const remainder = this.state.data.filter((todo) => {
        //   if(todo.id !== id) return todo;
        // });
        // // Update state with filter
        // this.setState({data: remainder});
      }

    render(){
        const { listLoaded } = this.state;
        return (
          <div>
            <Title todoCount={this.state.data.length}/>
            <TodoForm addTodo={this.addTodo.bind(this)}/>
            {
                listLoaded ? 
                <TodoList 
                todos={this.state.data} 
                remove={this.handleRemove.bind(this)}
                /> 
                : <DotLoader
                color={'#C3C2C4'} 
              />
            }
          </div>
        );
      }
}

export default TodoApp;