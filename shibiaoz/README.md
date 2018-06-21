## location 打开行为与浏览器机制的关系


- 多次执行location.href 代码保证执行，浏览器是否发送请求，建立连接
```
var dom = document.getElementById('btn');
        var url1 = 'http://www.baidu.com/';
        var url2 = 'http://www.jiedaibao.com/';
        dom.onclick = function () {
            window.location.href = url1;
            window.location.href = url2;
        }
```
结果是打开`借贷宝`,window.location.href = url1; 这行代码是被执行了的，但是没有并没有建立连接
通过chrome://net-internals/#events 来分析，
![同步多次执行](./1.jpeg)


- 设置延迟
```
var dom = document.getElementById('btn');
var url1 = 'http://www.baidu.com/';
var url2 = 'http://www.jiedaibao.com/';
dom.onclick = function () {
    window.location.href = url1;
    setTimeout( () => {
        window.location.href = url2;
    },200);
}
```
结果依然是打开`借贷宝`,这时候window.location.href = url1也是被执行了，有没有请求百度呢？
结论是：请求百度了，并且建立了连接请求，然后并未进行跳转，然后被后面的借贷宝跳转覆盖了
![同步多次执行](./2.jpeg)