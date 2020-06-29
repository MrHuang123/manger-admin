import React from 'react';
import { Row, Col } from 'antd';
import Herder from './components/Herder';
import Footer from './components/Footer';
import NavLeft from './components/NavLeft';

export default class Admin extends React.Component {
    render(){
        return (
            <div>
                <Row>
                    <Col span='3'>
                        <NavLeft></NavLeft>
                    </Col>
                    <Col span='21'> 
                            <Herder></Herder>
                            <Col>
                                content
                            </Col>
                            <Footer></Footer>
                    </Col>
                </Row>
            </div>
        )
    }
}