import React, { Component } from 'react'
import{Card,Table, Modal, Button, message, Badge} from 'antd';
import axios from './../../axios/index'

export default class highTable extends Component {
    state={
        dataSource:[],
        dataSource3:[]
    }
    params={
        page:1
    }
          
    componentDidMount(){
        console.log(this)
        this.request();
        this.request3()
    }
    request =()=>{
          axios.ajax({
               url:'/table/list',
               data:{
                   params:{
                       page:this.params.age
                   }
               }
           }).then((res)=>{
               if(res.code === "0"){
                   res.result.list.map((item,index)=>item.key = index ) 
                   this.setState({
                       dataSource: res.result.list,
                   })
               }
           })
       }

       request3 =()=>{
         axios.ajax({
             url:'/table/highTable',
             data:{
                 params:{
                     page:this.params.age
                 }
             }
         }).then((res)=>{
             if(res.code === "0"){
                 res.result.list.map((item,index)=>item.key = index)
                 console.log("res.result.list,",res.result.list)
                 this.setState({
                     dataSource3: res.result.list,
                 })
             }
         })
     }
     handleChange=(pagination, filters, sorter,)=>{
        this.setState({
            sortOrder:sorter.order
        })
     }
     handDelete=(item)=>{
        let id = item.id;
        Modal.confirm({
            title:'确认',
            content:'您确认要删除此条数据吗？',
            onOk:()=>{
                message.success('删除成功');
                this.request(id)
            }
        })
     }
    render() {
        const columns=[
            {
                title:'id',
                dataIndex:'id',
                width:80

            },
            {
                title:"用户名",
                dataIndex:'userName',
                width:80
            },
            {
                title:"性别",
                dataIndex:"sex",
                width:80,
                render(sex){
                    return sex ===1 ? '男':'女'
                }
            },
            {
                title:"状态",
                dataIndex:"state",
                width:80,
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
                width:120,
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
                width:120,
                dataIndex:"birthday"
            },
            {
                title:"地址",
                width:120,
                dataIndex:"address"
            },
            {
                title:"时间",
                width:80,
                dataIndex:"time"
            }
        ]
        const columns2=[
            {
                title:'id',
                dataIndex:'id',
                fixed:'left',
                width:80

            },
            {
                title:"用户名",
                fixed:'left',
                dataIndex:'userName',
                width:80
            },
            {
                title:"性别",
                fixed:'left',
                dataIndex:"sex",
                width:80,
                render(sex){
                    return sex ===1 ? '男':'女'
                }
            },
            {
                title:"状态",
                dataIndex:"state",
                width:80,
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
                width:120,
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
                width:120,
                dataIndex:"birthday"
            },
            {
                title:"生日",
                width:120,
                dataIndex:"birthday"
            },
            {
                title:"生日",
                width:120,
                dataIndex:"birthday"
            },
            {
                title:"生日",
                width:120,
                dataIndex:"birthday"
            },
            {
                title:"生日",
                width:120,
                dataIndex:"birthday"
            },
            {
                title:"生日",
                width:120,
                dataIndex:"birthday"
            },
            {
                title:"生日",
                width:120,
                dataIndex:"birthday"
            },
            {
                title:"生日",
                width:120,
                dataIndex:"birthday"
            },
            {
                title:"生日",
                width:120,
                dataIndex:"birthday"
            },
            {
                title:"生日",
                width:120,
                dataIndex:"birthday"
            },
            {
                title:"生日",
                width:120,
                dataIndex:"birthday"
            },
            {
                title:"生日",
                width:120,
                dataIndex:"birthday"
            },
            {
                title:"生日",
                width:120,
                dataIndex:"birthday"
            },
            {
                title:"生日",
                width:120,
                dataIndex:"birthday"
            },
            {
                title:"生日",
                width:120,
                dataIndex:"birthday"
            },
            {
                title:"地址",
                width:120,
                fixed:'right',
                dataIndex:"address"
            },
            {
                title:"时间",
                width:80,
                fixed:'right',
                dataIndex:"time"
            }
        ]

        const columns3=[
            {
                title:'id',
                dataIndex:'id'
            },
            {
                title:"用户名",
                dataIndex:'userName',
            },
            {
                title:"年龄",
                dataIndex:'age',
                sorter:(a,b)=>{
                    return a.age-b.age
                },
                sortOrder:this.state.sortOrder
            },
            {
                title:"性别",
                dataIndex:"sex",
                width:80,
                render(sex){
                    return sex ===1 ? '男':'女'
                }
            },
            {
                title:"状态",
                dataIndex:"status",
                render(status){
                    let config = {
                        "1":'咸鱼一条',
                        "2":"风华浪子",
                        "3":"北大才子",
                        "4":"百度FE",
                        "5":"创业者"
                    }
                    return config[status]
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
        const columns4=[
            {
                title:'id',
                dataIndex:'id'
            },
            {
                title:"用户名",
                dataIndex:'userName',
            },
            {
                title:"年龄",
                dataIndex:'age'
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
                dataIndex:"status",
                render(status){
                    let config = {
                        "1":'咸鱼一条',
                        "2":"风华浪子",
                        "3":"北大才子",
                        "4":"百度FE",
                        "5":"创业者"
                    }
                    return config[status]
                }
            },
            {
                title:"兴趣",
                dataIndex:"interest",
                render(interest){ //interst是形参,可以写为任何变量
                    let config = {
                        "1":<Badge status="success" text="成功"></Badge>,
                        "2":<Badge status="error" text="报错"></Badge>,
                        "3":<Badge status="default" text="正常"></Badge>,
                        "4":<Badge status="processing" text="进行中"></Badge>,
                        "5":<Badge status="warning" text="警告"></Badge>,
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
            },{
                title:'操作',
                /* render(text,item){
                    onClick 中传参通过箭头函数去传参,这样xie ,this.handDelete指的是Button,而不是
                    highTable当前组件，所以render 方法也的写为箭头函数
                    return <Button href="#" onClick={(item)=> {this.handDelete(item)}}>删除</Button>
                }
                */
               render:(text,item)=>{
                   return <Button onClick={(item)=>this.handDelete(item)}>删除</Button>
               }

            }

        ]
        return (
            <div>
                {/* 当表头和内容对不齐时，给每一列设置宽度 */}
                 <Card title="头部固定" style={{margin:'10px 0'}}>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        scroll={{y:240}}
                    ></Table>
                </Card>
                {/* x轴滚动，每列宽度加起来多一点就好(多个10像素),在需要固定的列的地方添加fixed:'left‘属性 */}
                <Card title="左侧固定" style={{margin:'10px 0'}}>
                    <Table
                        bordered
                        columns={columns2}
                        dataSource={this.state.dataSource}
                        scroll={{x:2700,y:240}}
                    ></Table>
                </Card>
                {/* 在前端处理排序，设置列sorter，sortOrder,onchange */}
                <Card title="前端年龄排序" style={{margin:'10px 0'}}>
                    <Table
                        bordered
                        columns={columns3}
                        dataSource={this.state.dataSource3}
                        onChange={this.handleChange}
                    ></Table>
                </Card>

                <Card title="操作" style={{margin:'10px 0'}}>
                    <Table
                        bordered
                        columns={columns4}
                        dataSource={this.state.dataSource3}
                        pagination={false}
                    ></Table>
                </Card>
            </div>
        )
    }
}
