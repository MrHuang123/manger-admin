import React from 'react';
import { Row, Col } from 'antd';
import Herder from './components/Herder';
import Footer from './components/Footer';
import NavLeft from './components/NavLeft';
import './style/common.less'
export default class Admin extends React.Component {
    render(){
        return (
            <Row className='container'>
                <Col span='4'  className='nav-left'>
                    <NavLeft></NavLeft>
                </Col>
                <Col span='20' className='main'>  
                        <Herder></Herder>
                        <Col className='content'>
                            {this.props.children}
                        </Col>
                        <Footer></Footer>
                </Col>
            </Row>
        )
    }
}