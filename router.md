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

4. window.history.forward
   
    跳转到当前页面栈指针所指前一个记录的方法，页面栈的指针前移动一个位置。
    相当于window.history.go(1)，调用window.history.forward()不会刷新页面

5. window.history.back

    在浏览器中后跳，页面栈中指针后移动一个位置，等同于window.history.go(-1)，和点击后退按钮一个效果。

6. window.location.href

    在导航中产产生新的历史记录，将字符串设置到window.location与设置到window.location.href行为一致

7. window.location.hash

    hash以‘#’开头，通过hash可以修改URL的hash值。

8. window.location.replace()
   
    替换或者是修改当前页面栈的记录。


## 浏览器的相关事件

1. popstate
   
    在history.pushState或者history.replaceState产生的页面栈中，当页面发生‘前进’或者‘后退’的时候，就会触发popstate事件，可以通过window.addEventListener()监听这些事件。
    ```
        window.addEventListener("popstate", function (event) {
            console.log(event)
        })
    ```

2. hashchange
   
    监听浏览器hash值的变化，语法：
    ```
        window.addEventListener("hashchange", function (event) {
            console.log(event);
        })
    ```

3. 手动触发事件
   
    对于popstate事件，只有在移动页面栈指针的时候才被触发，这样不利于我们对事件的控制。

    dispatchEvent方法，可以在不移动页面栈指针的时候控制popstate事件的触发。