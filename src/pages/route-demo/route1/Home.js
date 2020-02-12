import React, { Component } from 'react'
import { HashRouter, Route, Link, Switch } from 'react-router-dom'
import Main from './Main'
import About from './About';
import Topics from './Topic'

export default class Home extends Component {
    render() {
        return (
            <HashRouter>
                {/*  <Route/>必须用div包起来 */}
                <div>
                    <ul>
                        <li >
                            <Link to="/">Home</Link>
                        </li>
                        <li >
                            <Link to="/about"> About</Link>
                        </li>
                        <li >
                            <Link to="/topics">Topic</Link>
                        </li>
                    </ul>
                    <hr />
                    {/* 没有加载exact属性之前，/about路由回会加载main和about组件 */}
                    {/* <Route  exact={true} path="/" component={Main}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/topics" component={Topics}></Route> */}

                    {/* Switch配匹到main 就不在执行后面的代码了，所以永远是Main,
                        所以如果想要各路由匹配各组件，还是需要给/路由添加exact=true属性
                    */}
                    <Switch>
                        <Route exact={true} path="/" component={Main}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/topics" component={Topics}></Route>
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}
