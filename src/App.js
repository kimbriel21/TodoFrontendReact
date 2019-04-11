import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import BaseLayout from './layouts/BaseLayout'
//npm install --save react router react-router-dom
import {BrowserRouter} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom' //Redirect

import Router from "./router";
import asyncComponent from "./hoc/asyncComponent";

const AsyncNewLogin = asyncComponent(()=>{
    return import('./containers/Login');
});

class App extends Component {
    state = {
        userAuth : false,
    };

    componentWillMount(){
        this.setState({
            ...this.state,
            userAuth : localStorage.getItem('token') !== null,

        });
    }

  render() {
        const {userAuth} = this.state;
        return (

            <BrowserRouter>
                <div className="App">
                    {userAuth ?

                        <BaseLayout>
                            <div style={{display : 'flex'}}>
                                <Router/>
                            </div>
                        </BaseLayout>
                        :
                        null
                    }
                    {
                        !userAuth ?
                            <Switch>
                                <Route path="/login" exact component={AsyncNewLogin} />
                                <Route render={()=> <h1>404 NOT FOUND</h1>}/>
                            </Switch>
                            : null
                    }
                </div>
            </BrowserRouter>
        );
  }
}

export default App;
