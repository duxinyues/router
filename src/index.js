/*
 * @Author: yongyuan at <yongyuan253015@gmail.com>
 * @Date: 2021-05-11 15:00:31
 * @LastEditTime: 2021-12-29 21:18:19
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: \router\src\index.js
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';

import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { store } from './redux/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
