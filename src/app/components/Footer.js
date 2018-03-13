
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
    company: 'Global Logic India Pvt Ltd'
}

Footer.propTypes = {
    // mandatory
    year: PropTypes.number.isRequired, 
    // optional
    company: PropTypes.string,

    //address: PropTypes.object

    address : PropTypes.shape({
        city: PropTypes.string.isRequired
    }).isRequired
    
}