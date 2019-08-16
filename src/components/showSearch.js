import React,{Component} from 'react';
import '../container/Rout.css'

class ShowSerach extends Component {
    state={
        showinput: ''
    }
    createInput = (e) => {
            this.setState({showinput: e.target.value});
            this.props.showtext(e.target.value)
    }
    render(){
        return(
            <div>
            <input
                placeholder="Enter new task"
                className="li-input"
                value={this.state.showinput}
                onChange={this.createInput}
                type="text"> 
                </input>
                </div>
        )
    };
};
export default ShowSerach;