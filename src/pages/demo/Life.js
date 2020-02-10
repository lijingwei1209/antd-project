import React, { Component } from 'react'
import {Button} from 'antd'
import './index.less'
//这样就引入了antd的css 文件，不是@import '~antd/dist/antd.css';
import 'antd/dist/antd.css'  

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
                <Button onClick={this.hanleAdd()}>antd点击一下</Button>
                <button onClick={this.hanleAdd()}>点击一下></button>
                <p>{this.state.count}</p>
                
            </div>
        )
    }
}

