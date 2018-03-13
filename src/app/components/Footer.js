
import React from "react";
import PropTypes from "prop-types";

// stateless, presentational component
// returns virtual dom
export default function Footer(props) { 
        console.log("Footer called");

        let {year, company, address }= props;

        return (
            <div> 
                <hr />
               <p>Copyrights @{year}, {company}</p>
               <p> City: {address.city}</p>
            </div>
        )
} 


Footer.defaultProps = {
    
}

Footer.propTypes = {
    
}