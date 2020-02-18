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
        var arr =[33,0,3,1,6,19,20];
        arr.sort(function(a,b){
            return a-b
        })
        console.log(arr)
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
                 item.key = index+1;
                 return item;
             })
             const totalList = list.length>0?[...list,{key:'合计',...res.totalInfo}]:[]
             console.log(list)
             this.setState({
                dataSource: totalList
            })
            
         })
     }

    sorter=(key)=>{
        return (rowa,rowb)=> this.sortFun(rowa[key],rowb[key])
    }
    
    sortFun=(a,b)=>{
        // if(!a || !b){
        //     return
        // }
        if((typeof a)!== "number"){
            return new Date(a) instanceof Date ? new Date(a).getTime() - new Date(b).getTime() : a.chinese.localeCompare(b.chinese, 'zh')
        }else{
            console.log(typeof(a) ,a,b,a-b)
            return a-b
        }
    }

    render() {
        const columns=[
            {
                title:'id',
                dataIndex:'key',
                width:80,
                render: (text, record, index) => {
                    if (record.key == '合计') {
                      return text;  
                  }else{
                      return index++
                  }
                }
            },
            {
                title:"机构",
                dataIndex:'schoolName',
                width:100,
                sorter:this.sorter('schoolName'),
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
                    footer={this.handlefooter}
                ></Table>
            </Card>
        )
    }
}

