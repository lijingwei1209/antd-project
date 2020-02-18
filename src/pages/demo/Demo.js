import React, { Component } from 'react'
import { Table, Card } from 'antd'
import axios from '../../axios/index'
import utils from '../../utils/utils';

export default class Demo extends Component {
    constructor(props){
        super(props);
        this.state={
            dataSource:[]
        }
    }
    params={
        page:1
    }
    componentDidMount(){
        this.request();
    }

    request =()=>{
        axios.ajax1({
             url:'/demo',
             data:{
                 params:{
                     page:this.params.page
                 }
             }
         }).then((res)=>{
             console.log("res",res)
             let list = res.allSchoolInfos.map((item,index)=>{
                 item.key = index;
                 return item;
             })
             this.setState({
                dataSource: list
            })
            
         })
     }
     //排序
   /*   handleChange=(pagination, filters, sorter,)=>{
         console.log("===",sorter)
        this.setState({
            sortOrder:sorter.order
        })
     } */
     sorter=(key)=>{
        return (rowa,rowb)=> this.sortFun(rowa[key],rowb[key])
    }
    
    sortFun=(a,b)=>{
        if(!a || !b){
            return
        }
        if((typeof a)!== "number"){
           return a.chinese.localeCompare(b.chinese, 'zh')
        }
    }

    render() {
        const columns=[
            {
                title:'id',
                dataIndex:'key',
                width:80

            },
            {
                title:"机构",
                dataIndex:'schoolName',
                width:100,
               /*  sorter:(a,b)=>{
                    return a.schoolName-b.schoolName
                },
                sortOrder:this.state.sortOrder */
                //sorter:utils.sorter('schoolName'),
                sorter:this.sorter('timeStamp')
            },
            {
                title:"更新时间",
                dataIndex:"timeStamp",
                sorter:this.sorter('timeStamp')
            },
            {
                title:"排课数",
                dataIndex:"totalClassNum",
                width:80,
                sorter:this.sorter('totalClassNum')
            },
            {
                title:"正在上课数",
                width:120,
                dataIndex:"totalAttendNum",
                sorter:this.sorter('totalAttendNum')
            }
        ]
        return (
            <Card >
                <Table
                    bordered
                    columns={columns}
                    dataSource={this.state.dataSource}
                    pagination={false}
                   // onChange={this.handleChange}
                ></Table>
            </Card>
        )
    }
}

