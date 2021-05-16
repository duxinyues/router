/*
 * @FileName: hooks
 * @Author: duxinyue
 * @Date: 2021-05-15 15:28:58
 * @LastEditors: duxinyue
 * @LastEditTime: 2021-05-15 15:44:57
 * @FilePath: \router\src\utils\hooks.js
 * @Description: 自定义Hook
 */
import {
    __RouterContext as RouterContext,
    useHistory,

} from "react-router"
import  {
    useContext
} from "react";


export function useRouterContext() {
    const routerContext = useContext(RouterContext);
    const {
        history,
        location,
        match
    } = routerContext;
}

export function useHistory(){
    let history = useHistory();
    function handleClick(){
        history.push("/home");
    }

    return <button type="button" onClick={handleClick}>goHome</button>
}

export  function useLocation(){
    return  useContext(Context).location
}

export function useSearch(){
    const  location = useLocation();
    return location.search;
}

export  function useHash(){
    const location = useLocation();
    return location.hash;
}