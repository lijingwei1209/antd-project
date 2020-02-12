import React, { Component } from 'react'
import { HashRouter,Route } from 'react-router-dom'
import Main from './Main'
import About from './../route1/About';
import Topics from './../route1/Topic'
import Home from './Home'
import Achild from './Child'

/* export default class router extends Component {
    //路由配置的2种方式,抽取路由
    render() {
        return (
            <HashRouter>
                <Home>
                    <Route exact={true} path="/" component={Main}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/topics" component={Topics}></Route>
                </Home>
            </HashRouter>
        ) 
    }
}
 */


export default class router extends Component {
    //嵌套路由
    render() {
        return (
            <HashRouter>
                <Home>
                    {/* 1.外层不能是用精准配匹，如果使用，内层就配匹不到了
                        2. render中=》后面不能有{}*/}
                    <Route path="/main" render={()=>
                        <Main>
                            <Route path="/main/a" component={Achild}></Route>
                        </Main> 
                    }></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/topics" component={Topics}></Route>
                </Home>
            </HashRouter>
        ) 
    }
}
