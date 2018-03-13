
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Home extends Component {
    constructor(props) {
        super(props);

        // keyword
        // mutable
        this.state = {
            counter: 0,
            name: ''
        }

        // creates a wrapper function for decrement
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        console.log("increment called");
        //BAD: Mutating state
        this.state.counter++;

        //BAD, render method
        this.forceUpdate();
    }
 
    decrement() {
        //console.trace();
        
        //Good API

        console.log("Counter ", this.state.counter);
        // immutablity
        // keyword
        // async 
        // render method
        this.setState({
            counter: this.state.counter - 1
        });

        console.log("before name setstate Counter ", this.state.counter);

        this.setState({
            name: 'My name' + this.state.counter
        });

        console.log("after setstate Counter ", this.state.counter);
    }

    // internal keyword
    shouldComponentUpdate(nextProps, nextState){
        console.log("home should update");
        console.log("Current state ", this.state);
        console.log("next State", nextState);
        return nextState.counter % 3 == 0; //call render, false no render
    }
    
    
    render() {
        console.log("Home render called");
        
        return (
            <div> 
            <h2>Home</h2>
            <p> Counter: {this.state.counter}</p>
            <button onClick={() => this.increment()}>
             +1
            </button>
 
            <button onClick={this.decrement}>
              -1
            </button>
             

            </div>
        )
    }
} 


Home.defaultProps = {
    
}

Home.propTypes = {
    
}