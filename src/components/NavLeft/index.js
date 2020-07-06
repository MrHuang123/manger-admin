import React from 'react';
import MenuConfig from '../../config/menuConfig';
import './index.less'
import { Menu } from 'antd';
// import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {switchMenu} from '../../redux/action'

const { SubMenu } = Menu;
class  NavLeft extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currentKey: ''
        }
    }
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
        return <Menu.Item title={item.title} key={item.key}>
                    <NavLink to={item.key}>{item.title}</NavLink>
               </Menu.Item>
        })
    }
    handleClick = ({ item, key })=>{
        // console.log(item.key,item.item.props.title)
        if(key === this.state.currentKey) return
        // 事件派发，自动调用reducer，通过reducer保存到store对象中
        console.log(this.props)
        const { dispatch } = this.props;
        dispatch(switchMenu(item.props.title));
        // this.setState({
        //     currentKey: key
        // });
    }
    render(){
        return (
            <div className='nav-left'>
                <div className='logo'>
                    <img src='/assets/logo-ant.svg' alt=''></img>
                    {/* <h1>manger</h1> */}
                </div>
                <Menu onClick={this.handleClick} theme="dark" mode="vertical">
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}

export default connect()(NavLeft)