import React,{Component} from 'react';
import './todoList.css';

import Rout from '../container/Rout'

class Todolist extends Component {
    state={
        userInput: '',
        list: []
    }

    changeUserInput(input){
        this.setState({...this.state, userInput: input});
        // console.log(this.state.list)
    }

    addTodolist(){
        let listArr = this.state.list;
        let item = {
            text: this.state.userInput,
            isShowed: false
        }
        listArr.push(item);
        this.setState({
            list: listArr
        })
        this.setState({userInput: ''})
    }

    toggleIsShowed = (index) => {
        const newArr = this.state;
        newArr.list[index].isShowed = !newArr.list[index].isShowed
        this.setState({...this.state, list: newArr.list});
    };

    deleteInput= (index) => {
        let property = this.state.list;
		property.splice(index,1);
		this.setState({list: property})
    };
 
    render(){
        return ( 
            <>
                <div className="todo-list-main">
                    <p className="todo-header">To-Do App!</p>
                    <p className="todo-header2">Add New To-Do</p>
                    <input
                    placeholder="Enter new task"
                        className="inputvalue"
                        value={this.state.userInput}
                        onChange={(e)=> this.changeUserInput(e.target.value)}
                        type="text" 
                        /> 
                    <button 
                        className="btn"
                        onClick={()=> this.addTodolist(this.state.userInput)}>Add
                    </button>
                </div>
                <div className="todo-list-body">
                    <p className="letsget">Let's get some work done!</p>
                    <div className="line"></div>
                        <Rout nodes={this.state.list} toggleIsShowed={this.toggleIsShowed} deleteInput={this.deleteInput}/>
                </div>
                <div className="todo-lsit-footer">
                    {/* <img src="/src/components/images/1.png"/> */}
                    <p className="footerText">Proudly powered by Cosmic JS</p>
                </div>
            </>
        )
    }
}
export default Todolist;