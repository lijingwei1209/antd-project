import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Home extends Component {
    render() {
        return (
                <div>
                    <ul>
                        <li >
                            <Link to="/main">Home</Link>
                        </li>
                        <li >
                            <Link to="/about"> About</Link>
                        </li>
                        <li >
                            <Link to="/topics">Topic</Link>
                        </li>
                        <li >
                            <Link to="/wish3">wish3</Link>
                        </li>
                        <li >
                            <Link to="/wish1">wish1</Link>
                        </li>
                        <li >
                            <Link to="/wish2">wish2</Link>
                        </li>
                    </ul>
                    <hr />
                    {this.props.children}
                </div>
        )
    }
}
