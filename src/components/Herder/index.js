import React from 'react';
import { Row,Col } from "antd"
import axios from '../../axios'
import Util from '../../utils/utils'
export default class  Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            userName:'',
            dayPictureUrl:'',
            weather:''
        };
    }
    componentWillMount(){
        this.setState({
            userName:'Mr huang'
        })
        setInterval(()=>{
            let sysTime = Util.formateDate(new Date().getTime());
            this.setState({
                sysTime
            })
        },1000)
        this.getWeatherAPIData();
    }
    getWeatherAPIData(){
        let city = '北京';

        axios.jsonp({
            url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        }).then((res)=>{
            console.log(res)
            if(res.status == 'success'){
                let data = res.results[0].weather_data[0];
                this.setState({
                    dayPictureUrl:data.dayPictureUrl,
                    weather:data.weather
                })
            }
        })
    }
    render(){
        return (
            <div className='header'>
                <Row>
                    
                </Row>
            </div>
        )
    }
}