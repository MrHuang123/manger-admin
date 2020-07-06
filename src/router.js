import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import App from './App';
import Admin from './admin';
import Login from './pages/Login';
import Home from "./pages/home";
import Buttons from './pages/ui/buttons';
import Modals from './pages/ui/modals';
import Loadings from './pages/ui/loadings';
import NoMatch from './pages/nomatch';
import Gallery from './pages/ui/gallery';
import Messages from './pages/ui/messages';
import Notice from './pages/ui/notice';
import tabs from './pages/ui/tabs';
import Carousel from './pages/ui/carousel';
import FormRegister from './pages/form/register';
import FormLogin from './pages/form/register';
import BasicTable from './pages/table/basicTable';
import BighTable from './pages/table/highTable';
import RichText from './pages/rich';
import OpenCityForm from './pages/city';
import Order from './pages/order/index';
import BikeMap from './pages/map';
import User from './pages/user/index';
import Bar from './pages/echarts/bar/index'
import Pie from './pages/echarts/pie/index'
import Line from './pages/echarts/line/index'
import Permission from './pages/permission'
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
                                    <Route path='/ui/buttons' component={Buttons}></Route>
                                    <Route path='/ui/modals' component={Modals}></Route>
                                    <Route path='/ui/loadings' component={Loadings}></Route>
                                    <Route path='/ui/gallery' component={Gallery}></Route>
                                    <Route path='/ui/messages' component={Messages}></Route>
                                    <Route path='/ui/notice' component={Notice}></Route>
                                    <Route path='/ui/tabs' component={tabs}></Route>
                                    <Route path='/ui/carousel' component={Carousel}></Route>
                                    <Route path="/form/login" component={FormLogin} />
                                    <Route path="/form/reg" component={FormRegister} />
                                    <Route path="/table/basic" component={BasicTable} />
                                    <Route path="/table/high" component={BighTable} />
                                    <Route path="/rich" component={RichText} />
                                    <Route path='/city' component={OpenCityForm}></Route>
                                    <Route path="/order" component={Order} />
                                    <Route path='/bikeMap' component={BikeMap} />
                                    <Route path='/user' component={User} />
                                    <Route path="/charts/bar" component={Bar} />
                                    <Route path="/charts/pie" component={Pie} />
                                    <Route path="/charts/line" component={Line} />
                                    <Route path="/permission" component={Permission} />
                                    <Redirect to='/home'></Redirect>
                                     {/* <Route component={NoMatch} /> */}
                                 </Switch>
                            </Admin>
                        } ></Route>
                    </Switch>
                </App>
            </HashRouter>
        )
    }
}