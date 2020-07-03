//引入createStore创建store，引入applyMiddleware 来使用中间件
import {createStore,applyMiddleware} from 'redux';
import reducer from '../reducer'

// 安装redux-devtools-extension的可视化工具。
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
    meunNume:''
};

const configureStore = ()=>createStore(reducer,initialState);

export default configureStore;