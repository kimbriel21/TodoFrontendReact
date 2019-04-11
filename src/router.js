import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import asyncComponent from "./hoc/asyncComponent";


const AsyncNewMember = asyncComponent(()=>{
    return import('./containers/Member');
});

const AsyncNewLogin = asyncComponent(()=>{
    return import('./containers/Login');
});



class Router extends React.Component{



    componentWillMount(){

        // console.log(localStorage.getItem('myData') !== null, this.state)
    }



    render(){
        return(

            <Switch>
                <Route path="/members" exact component={AsyncNewMember} />
                {/*<Route path="/login" exact component={AsyncNewLogin} />*/}
                {/*<Redirect from={'/'} to={'/members'}/> /!*Not working with redirect route this 404 not found*!/*/}
                <Route render={()=> <h1>404 NOT FOUND</h1>}/>

            </Switch>
        );
    }
}

export default Router;