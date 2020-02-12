import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Main extends Component {
    render() {
        return (
            <div>
                Main
                <Link to="/main/a">嵌套路由</Link>
                <hr/>
                {/* 此处是显示嵌套路由子组件的地方，也就是<Route path="/main/a" component={Achild}></Route>这个内容的地方 */}
                {this.props.children}
            </div>
        )
    }
}
