import React, { Component } from 'react'
import './index.less'

export default class Life extends Component {
    constructor(props){
        super(props);
        this.state ={
            count:0
        }
    }
    hanleAdd(){
        console.log("this",this)
    }
    render() {
        return (
            <div className="content">
                <p>React 声明周器</p>
                <button onClick={this.hanleAdd()}>点击一下</button>
                <p>{this.state.count}</p>
            </div>
        )
    }
}

