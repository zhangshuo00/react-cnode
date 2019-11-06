import React ,{Component}from 'react';
import Header from './components/Header'
import {HashRouter as Router,Route} from 'react-router-dom'
import Home from './container/Home'
import Start from './container/Start'
import About from './container/About'
import Api from './container/Api'
import Login from './container/Login'
import Detail from './container/Detail'
import Sider from './container/Sider'

export default class App extends Component{
    render(){
        return(
            <Router basename='/'>
                <div>
                    <Header/>
                    <div className="main">
                        <div className="content">
                            <Route path='/home' component={Home}/>
                            <Route path='/start' component={Start}/>
                            <Route path='/api' component={Api}/>
                            <Route path='/about' component={About}/>
                            <Route path='/login' component={Login}/>
                            <Route path='/detail/:id' component={Detail}/>
                        </div>
                        <Sider/>
                    </div>
                </div>
            </Router>
        )
    }
};
