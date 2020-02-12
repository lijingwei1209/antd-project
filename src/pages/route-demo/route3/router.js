import React, { Component } from 'react'
import { HashRouter,Route, Switch } from 'react-router-dom'
import Main from './Main'
import About from './../route1/About';
import Topics from './../route1/Topic'
import Home from './Home'
import Info from './Info'
import NoMatch from './NotFound'

export default class router extends Component {
    //嵌套路由
    render() {
        return (
            <HashRouter>
                <Home>
                    <Switch>
                    {/* 1.外层不能是用精准配匹，如果使用，内层就配匹不到了
                        2. render中=》后面不能有{}*/}
                    <Route path="/main" render={()=>
                        <Main>
                            <Route path="/main/:mainId" component={Info}></Route>
                        </Main> 
                    }></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/topics" component={Topics}></Route>
                    <Route component={NoMatch}></Route>
                    </Switch>
                </Home>
            </HashRouter>
        ) 
    }
}
