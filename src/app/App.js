import React from "react";

//default import
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./components/Home";

import Cart from "./cart/components/Cart";

export class App extends React.Component {
    
    // keyword
    // create virtual dom
    // returns virtual dom, immutable
    render() {
        return (
          <div >
              <Header title="React App" />
              <h1>Welcome</h1>
              
              <Cart />

              <Home />
              <Footer year={2018}
                      address = { {city: 'BLR'} } />
          </div>      
        )
    }
}