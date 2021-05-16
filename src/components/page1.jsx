/*
 * @FileName: 
 * @Author: duxinyue
 * @Date: 2021-05-15 11:54:32
 * @LastEditors: duxinyue
 * @LastEditTime: 2021-05-15 12:13:23
 * @FilePath: \router\src\components\page1.jsx
 * @Description: 
 */
import  React  from "react"
const CountContext = React.createContext();
export function Page1(props){
    console.log(props)
    return <Toolbar/>
}
 function Toolbar(props){
    
    return <CountContext.Consumer>
        {
            (count)=>{
                console.log(count)
                return <p>{count}</p>
            }
        }
    </CountContext.Consumer>
}