import React from "react";

//default import
import Header from "./components/Header";
import Footer from "./components/Footer";

export class App extends React.Component {
    
    // keyword
    // create virtual dom
    // returns virtual dom, immutable
    render() {
        return (
          <div >
              <Header title="React App" />
              <h1>Welcome</h1>
              <Footer year="2018" company="GL" 
                      address = { {city: 'BLR'} } />
          </div>      
        )
    }
}