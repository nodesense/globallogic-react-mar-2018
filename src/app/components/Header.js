
import React, {Component} from "react";
// React.Component == Component

import PropTypes from "prop-types";

// create creates object, calls render method
export default class Header extends Component {
    constructor(props) {
        super(props);
        console.log("Header cons", props);
    }
     
    
    render() {
        console.log("Header render");
        
        // props is a keyword
        //let title = this.props.title;
        let {title} = this.props;

        return (
            <div> 
            <h2>{title}</h2>
            </div>
        )
    }
} 

// keywords
Header.defaultProps = {
    
}

// keywords
Header.propTypes = {
    
}