<!--
 * @FileName: 
 * @Author: duxinyue
 * @Date: 2021-05-13 17:05:16
 * @LastEditors: duxinyue
 * @LastEditTime: 2021-05-13 17:25:10
 * @FilePath: \router\router.md
 * @Description: 
-->
## 浏览器记录

在浏览器中存有history和location对象。可以通过其中的一些方法，可以进行导航跳转：

1. history.pushState
   
   无需刷新增加页面栈记录，实现改变浏览器路径。

2. history.replaceState

    修改当前的页面栈的记录。

3. window.history.go

加载历史列表中的某个特定具体页面，可传具体的参数，表示跳转到页面栈中的位置。

该方法只是移动页面栈指针，并不会修改页面栈的记录，就是不会改动到页面栈的数量。

