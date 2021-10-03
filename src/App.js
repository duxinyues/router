/*
 * @Author: yongyuan253015@gmail.com
 * @Date: 2021-09-08 22:38:54
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-03 15:52:22
 * @Description: 文件描述
 */
import React, { useState, useEffect } from "react";
function App() {
  useEffect(() => {
    const divDom = document.getElementById("content");
    console.log("color  effect",divDom.style.color);

    return ()=>{
      console.log("清除副作用函数")
    }
  },[])
  const [num, setNum] = useState(0);
  return <div
    id="content"
    style={{ color: num !==0 ? "red" : "" }}
    onClick={() => { setNum(a => num + 2) }}
  >
    value: {num}
  </div>
}
export default App;
