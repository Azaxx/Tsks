import React,{Component} from 'react';
import Search from '../container/Search'

class All extends Component{
  state={
      nodes: this.props.nodes
  }
    
  toggleIsShowed = (index) => {
      const newArr = this.state;
      newArr.nodes[index].isShowed = !newArr.nodes[index].isShowed
      this.setState({...this.state, nodes: newArr.nodes});
  }

  deleteInput= (index) => {
      let property = this.state.nodes;
  property.splice(index,1);
  this.setState({list: property})
  }

  render(){
    let filtered = this.state.nodes;
    return (
      <ul>
        { filtered.map((arg,index) => <Search
          key={index} 
          task={arg}
          deleteInput={()=> this.deleteInput(index)}
          toggleIsShowed={() => this.toggleIsShowed(index)}
          isShowed={arg.isShowed}
        />)}
      </ul>
    )
  };
}   

export default All;