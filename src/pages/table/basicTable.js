import React, { Component } from 'react'
import{Card,Table, Modal, Button, message} from 'antd';
import axios from './../../axios/index'
import utils from '../../utils/utils';

export default class basicTable extends Component {
    state={
        dataSource:[],
        dataSource2:[]
    }
    params ={
        page:1
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
        data.map((item,index)=>{
           return item.key= index;
        })
        
        this.setState({
            dataSource:data
        })

        this.request()
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
       let _this = this;
        console.log(this)
        axios.ajax({
            url:'/table/list',
            data:{
                params:{
                    page: this.params.page
                }
            }
        }).then((res)=>{
            if(res.code === "0"){
                res.result.list.map((item,index)=>{
                   return item.key = index;
                })
                this.setState({
                    dataSource2: res.result.list,
                    selectedRowKeys:[],
                    selectedRows:null,
                    pagination:utils.pagination(res,(current)=>{
                        console.log(this)
                        //to-do
                        _this.params.page = current
                        this.params.page=current 
                        this.request()
                    })


                })
            }
        })
    }

    onRowClick = (record,index) =>{
        let selectKey = [index]; //多选就是个数组
        Modal.info({
            title:'信息',
            content:`用户名：${record.userName}`
        })
        this.setState({
            selectedRowKeys:selectKey,
            selectedItem:record
        })

    }
    //多选执行删除操作
    handleDelete=(()=>{
        let rows = this.state.selectedRows;
        let ids = [];
        rows.map((item)=>{
           return ids.push(item.id)
        })
        Modal.confirm({
            title:"删除提示",
            content:`您确定要删除这些数据吗？${ids.join(',')}`,
            onOk:()=>{
                message.success('删除成功')
                this.request()
            }
        })

    })
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
                dataIndex:"sex",
                render(sex){
                    return sex ===1 ? '男':'女'
                }
            },
            {
                title:"状态",
                dataIndex:"state",
                render(state){
                    let config = {
                        "1":'咸鱼一条',
                        "2":"风华浪子",
                        "3":"北大才子",
                        "4":"百度FE",
                        "5":"创业者"
                    }
                    return config[state]
                }
            },
            {
                title:"兴趣",
                dataIndex:"interest",
                render(interest){ //interst是形参,可以写为任何变量
                    let config = {
                        "1":'游泳',
                        "2":"打篮球",
                        "3":"踢足球",
                        "4":"跑步",
                        "5":"爬山",
                        "6":"骑行",
                        "7":"桌球",
                        "8":"麦霸"
                    }
                    return config[interest]
                }
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
        const {selectedRowKeys} = this.state;
        const rowSelection = {
            type:'radio',
            selectedRowKeys,
            onChange:(selectedRowKeys,selectedRows)=>{
                this.setState({
                    selectedRowKeys,
                })
            }
        }
        const rowCheckSelection ={
            type:'checkbox',
            selectedRowKeys,
            onChange:(selectedRowKeys,selectedRows)=>{
                let ids = [];
                console.log(selectedRows)
                selectedRows.map((item)=>ids.push(item.id))
                this.setState({
                    selectedRowKeys,
                    selectedRows,
                    //selectedIds:ids
                })
            }
        }
    
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
                <Card title="Mock-单选" style={{margin:'10px 0'}}>
                    <Table  
                        bordered
                        rowSelection ={rowSelection}
                        onRow={(record,index) => {
                            return {
                              //onClick: event => {}, // 点击行
                              onClick:()=>{
                                  //方法定义在外面
                                  this.onRowClick(record,index)
                              }
                            };
                          }}
                        columns={columns}
                        dataSource={this.state.dataSource2}
                       
                    >
                    </Table>
                </Card>
                <Card title="Mock-多选" style={{margin:'10px 0'}}>
                    <div>
                        <Button onClick={this.handleDelete}></Button>
                    </div>
                    <Table  
                        bordered
                        rowSelection ={rowCheckSelection}
                        onRow={(record,index) => {
                            return {
                              //onClick: event => {}, // 点击行
                              onClick:()=>{
                                  //方法定义在外面
                                  this.onRowClick(record,index)
                              }
                            };
                          }}
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={this.state.pagination}
                    >
                    </Table>
                </Card>
            </div>
        )
    }
}
