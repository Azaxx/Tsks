import React from 'react';
import '../components/todoList'

function Search(props) {
    const mapTask = () => {
        if(!props.task.isShowed){
            return <> <button onClick={props.toggleIsShowed} className="btndonesize"> 
            Complete
        </button><span>{props.task.text}</span></>
        } else {
            return<><button onClick={props.toggleIsShowed} className="btndonesize"> 
            Undo
        </button> <strike>{props.task.text}</strike> </>
        }
    };
    return ( 
        <li> 
            <button onClick={props.deleteInput} className="btndone btndonesize">
                Delete
            </button > 
            { mapTask() } 
        </li>
    )
}

export default Search;