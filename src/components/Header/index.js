import React, { Component } from 'react'
import {Row,Col} from 'antd';
import './index.less'
import Util from '../../utils/utils'
import Axios from '../../axios';
export default class Header extends Component {
    componentWillMount(){
        this.setState({
            userName:'河畔一角'
        })
        setInterval(()=>{
            let sysTime = Util.formateDate(new Date())
            this.setState({
                sysTime
            })
        },1000)
        this.getWheatherAPIData();
    } 
    getWheatherAPIData(){
        let city = '北京'
        Axios.jsonp({
            url: "http://api.map.baidu.com/telematics/v3/weather?location="+encodeURIComponent(city)+"&output=json&ak=3p49MVra6urFRGOT9s8UBWr2"
            //url:"http://api.map.baidu.com/telematics/v3/weather?location=%E5%8C%97%E4%BA%AC&output=json&ak=3p49MVra6urFRGOT9s8UBWr2"
        }).then((res)=>{
            if(res.status=='success'){
                let data = res.results[0].weather_data[0]
                this.setState({
                    dayPictureUrl:data.dayPictureUrl,
                    weather:data.weather
                })
            }
        })
    }
 
    render() {
        return (
          <div className="header">
           <Row className="header-top">
               <Col span={24}> 
                    <span>欢迎，{this.state.userName}</span>
                    <a href="#"></a>
               </Col>
            </Row>
            <Row className="breadcrumb">
               <Col span={4} className="breadcrumb-title">
                    首页
               </Col>
               <Col span={20} className="weather">
                    <span className="date">{this.state.sysTime}</span>
                    <span className="weather-img">
                        <img src={this.state.dayPictureUrl} ></img>
                    </span >
                    <span className="weather-detail">{this.state.weather}</span>
               </Col>
           </Row>
           </div>
        )
    }
}
