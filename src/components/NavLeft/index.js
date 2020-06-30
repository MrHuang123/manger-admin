import React from 'react';
import MenuConfig from '../../config/menuConfig';
import './index.less'
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
export default class  NavLeft extends React.Component {
    componentWillMount(){
        const menuTreeNode = this.renderMenu(MenuConfig);
        this.setState({
            menuTreeNode
        })
    }
    //菜单渲染
    renderMenu = (data)=>{
        return data.map((item)=>{
            if(item.children){
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
                // return this.renderMenu(item.children)
            }
        return <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item>
        })
    }
    handleClick = ()=>{
        console.log(1111)
    }
    render(){
        return (
            <div className='nav-left'>
                <div className='logo'>
                    <img src='/assets/logo-ant.svg' alt=''></img>
                    <h1>xinhua MS</h1>
                </div>
                <Menu onClick={this.handleClick} theme="dark" mode="vertical">
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}