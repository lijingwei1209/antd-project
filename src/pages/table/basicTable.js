import React, { Component } from 'react'
import{Card,Table} from 'antd';
import axios from './../../axios/index'

export default class basicTable extends Component {
    state={
        dataSource:[],
        dataSource2:[]
    }
    componentDidMount(){
        const data =[
            {
                id:'0',
                userName:"Jack",
                sex:'1',
                state:"1"
            }
        ]
        this.request()
        this.setState({
            dataSource:data
        })
    }
    request =()=>{
     /*    const baseurl = "http://yapi.demo.qunar.com/mock/80590/api/"
        axios.get(baseurl+"table/list").then(
            (res)=>{
                //console.log(JSON.stringify(res))
                console.log(res)
                if(res.status===200){
                    console.log(res.data.result.list)
                    this.setState({
                        dataSource2:res.data.result.list
                    })
                }
            }
        ) */
        axios.ajax({
            url:'/table/list',
            data:{
                params:{
                    page:1,
                    pageSize:10
                }
            }
        }).then((res)=>{
            if(res.code === "0"){
                this.setState({
                    dataSource2: res.result.list
                })
            }
        })
    }

    render() {
        const columns=[
            {
                title:'id',
                dataIndex:'id'
            },
            {
                title:"用户名",
                dataIndex:'userName'
            },
            {
                title:"性别",
                dataIndex:"sex"
            },
            {
                title:"状态",
                dataIndex:"state"
            },
            {
                title:"兴趣",
                dataIndex:"interest"
            },
            {
                title:"生日",
                dataIndex:"birthday"
            },
            {
                title:"地址",
                dataIndex:"address"
            },
            {
                title:"时间",
                dataIndex:"time"
            }
        ]
        return (
            <div>
                <Card title="基础表格">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    ></Table>
                </Card>
                <Card title="动态数据渲染">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}

                    ></Table>
                </Card>
            </div>
        )
    }
}
