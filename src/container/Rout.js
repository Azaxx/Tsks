import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../container/Rout.css'
import All from'../components/All'
import ShowSearch from '../components/showSearch';

class Rout extends React.Component {
    state={
        nodes: this.props.nodes,
        filters: []
    }
    
    showall = ()=> {
       return <All nodes={this.state.nodes}/>
    };
    
    showcomplete = () => {
            let showinputcomplete = this.state.nodes.filter(item => item.isShowed === true);
            return <All nodes = {showinputcomplete}/>
            
    };
    showincomplete = () =>{
        let showinputcomplete = this.state.nodes.filter(item => item.isShowed === false);
        return <All nodes = {showinputcomplete}/>
        
    };

    filterTasks = (text) =>{
        let searchArr = this.state.nodes.filter(item => {
            return item.text.toLowerCase().includes(text.toLowerCase());
        })
        this.setState({ ...this.state, filters: searchArr });
    };

    showSearch = () => {
        return <All nodes={this.state.filters}/>
    };

    render(){
        return (
            <Router>
                <div>
                    <div className="all-rout">
                        <span><Link className="li-rout" to="/">All</Link></span>
                        <span><Link className="li-rout" to="/complete">Complete</Link></span>
                        <span><Link className="li-rout" to="/Incomplete">Incomplete</Link></span>
                        <span><Link className="li-rout" to="/filterTasks">Search</Link></span>
                        <div><ShowSearch showtext={this.filterTasks} /></div>
                    </div>

                    <Route exact path="/" component={this.showall}></Route>
                    <Route path="/complete" component={this.showcomplete}></Route>
                    <Route path="/Incomplete" component={this.showincomplete}></Route>
                    <Route path="/filterTasks" component={this.showSearch}></Route>
                </div>
            </Router>
        )
    } 
}
export default Rout;
