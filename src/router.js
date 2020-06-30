import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import App from './App';
import Admin from './admin';
import Login from './pages/Login';
import Home from "./pages/home";

export default class ERouter extends Component {
    render(){
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path='/login' component={Login}></Route>
                        <Route path='/' render={()=>
                            <Admin>
                                <Switch>
                                    <Route path='/home' component={Home}></Route>
                                    <Redirect to='/home'></Redirect>
                                 </Switch>
                            </Admin>
                        } ></Route>
                    </Switch>
                </App>
            </HashRouter>
        )
    }
}