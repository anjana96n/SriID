import React from 'react';
import { Component } from "react";

const MyContext = React.createContext();

class MyProvider extends Component {

    state = {
        stage :1,
        idnum :[],
        bday:''
    }
 
    addIDnum=(idcard) =>{
        this.setState((prevState,props)=>({
            idnum:[
                ...prevState.idnum,
                idcard
            ]
        }))
    }
    

    render(){
        return(
            <>
            <MyContext.Provider value={{
                state: this.state,
                addID:this.addIDnum
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