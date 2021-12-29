/*
 * @Author: yongyuan253015@gmail.com
 * @Date: 2021-12-28 22:25:13
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-12-28 22:34:11
 * @Description: 文件描述
 */
import { createStore, combineReducers } from 'redux';
const reducers = combineReducers({
    todos:""
})
export const store = createStore(reducers)