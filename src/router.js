import React from 'react';
import {Route, Switch} from 'react-router-dom' //Redirect
import asyncComponent from "./hoc/asyncComponent";

const AsyncNewTodo = asyncComponent(()=>{
    return import('./containers/Todo');
});

const AsyncNewCreateTodo = asyncComponent(()=>{
    return import('./containers/Todo/create.js');
});

const AsyncNewConfirmationTodo = asyncComponent(()=>{
    return import('./containers/Todo/confirmation.js');
});

const AsyncNewCompleteTodo = asyncComponent(()=>{
    return import('./containers/Todo/complete.js');
});


class Router extends React.Component{

    componentWillMount(){

        // console.log(localStorage.getItem('myData') !== null, this.state)
    }

    render(){
        return(

            <Switch>
                <Route path="/todo" exact component={AsyncNewTodo} />
                <Route path="/todo-create" exact component={AsyncNewCreateTodo} />
                <Route path="/todo-confirmation" exact component={AsyncNewConfirmationTodo} />
                <Route path="/todo-complete" exact component={AsyncNewCompleteTodo} />
                <Route render={()=> <h1>404 NOT FOUND</h1>}/>
            </Switch>
        );
    }
}

export default Router;