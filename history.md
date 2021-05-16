<!--
 * @FileName: history库
 * @Author: duxinyue
 * @Date: 2021-05-14 20:33:42
 * @LastEditors: duxinyue
 * @LastEditTime: 2021-05-14 20:58:04
 * @FilePath: \router\history.md
 * @Description: 
-->
# history库
在React  Router的依赖中，有一个依赖库history。

history在React  Router中年起着导航的执行者和监听者的角色，它负责与外界沟通，让React Router只关心路由逻辑。

history提供了3个历史对象，分别是：

1. browserHistory（浏览器历史对象）
2. hashHistory（哈希历史对象）
3. memoryHistory（内存历史对象）


这三类历史对象都可以：

1. 监听外界地址变化
2. 获取当前地址
3. 增加和修改历史页面栈
4. 在页面栈中移动当前历史栈的指针
5. 阻止跳转，以及定义跳转提示
6. 获取页面栈的长度和最后导航行为
7. 转换地址对象
   

## browserHistory

  1. 提供基准地址
  2. 设置强制刷新模式
  3. 对历史栈标志符长度【keyLength】的控制

## hashhistory：

1. 设置不同的hash模式【hashType】
2. 可提供基准地址


## memoryHistory:

1. 访问整个历史栈
2. 设置初始历史栈以及初始栈指针的能力
3. 获取当前栈指针的能力
4. 对历史栈标志符长度【keyLength】的控制
5. 导航确认


