import React from 'react';
import { Component } from "react";

const MyContext = React.createContext();

class MyProvider extends Component {

    state = {
        stage :1,
        idnum :[],
        bday:''
    }

    

    render(){
        return(
            <>
            <MyContext.Provider value={{
                state: this.state
             }}>
                {this.props.children}

                </MyContext.Provider>
            </>
        )
    }
}
export{
    MyProvider,
    MyContext
}