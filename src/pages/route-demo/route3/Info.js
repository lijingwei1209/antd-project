import React, { Component } from 'react'

export default class Info extends Component {
    render() {
        return (
            <div>
                这是测试动态路由功能
                {/* 这是获取动态路由的参数 */}
                动态路由的值是:{this.props.match.params.mainId}
            </div>
        )
    }
}
