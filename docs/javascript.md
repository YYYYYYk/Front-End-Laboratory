# JavaScript

## 数据类型
### 基本数据类型
### 引用类型

## 原型(链)
### 原型概念
### 原型链
## 作用域(链)
- 变量/函数(声明)提升

## DOM操作

## 事件
### 事件流
事件流分为事件捕获，事件处理，事件冒泡。在W3C标准中
1. 事件捕获是指事件在DOM树上从根元素到子孙元素，由上向下进行传播，即`document->html->body->section->...->div`。
2. 事件处理指当某个事件通过事件捕获或事件冒泡传递到某个对象上时，如果该对象绑定了事件监听函数，则执行该函数处理事件。事件监听函数分为捕获和冒泡，分别指定函数要响应事件捕获还是事件冒泡，默认是事件冒泡。
3. 事件冒泡是指事件在DOM树上从子孙元素到根元素，由下向上进行传播，即`div->...->section->body->html->document`，正好与事件捕获相反。

看图：
### 事件对象
### 事件代理/委托

## Ajax-异步JavaScript和XML
Ajax是一种无需重载更新界面而异步更新数据的技术。Ajax本质上是利用XMLHttpRequest对象进行

Ajax实例：

(1) 创建XMHtttpRequest对象：
```javascript
var xhr;
if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
} else {
    xhr = new ActiveXObject('Microsoft.XMLHTTP');
}
```
(2) 绑定事件回调函数：
xhr对象的readyState属性有5个值，表示请求的活动状态。只要readyState值发生变化就会触发一次onreadystatechange事件，利用这个事件可检测每次状态变化后的readyState值。
- 0 未初始化，未调用`open()`方法初始化。
- 1 已启动，已调用`open()`方法未`send()`方法。
- 2 已发送，已调用`send()`方法，未收到数据。
- 3 已收到，已收到部分数据。
- 4 已完成，已收到全部的数据。

```javascript
xhr.onreadystatechange = function() {
  if (xhr.readyState==4) {
      if(xhr.status==200||xhr.status==304){
          console.log(xhr.responseText);
      }
  }
}
```
(3) 初始化Ajax参数：
```javascript
xhr.open('GET',url,true);
```
(4) 发送异步请求：
```javascript
xhr.send(null); //参数仅用于POST请求
```

## 同源策略与跨域访问

## 正则表达式

## 模块化

## 闭包

## 递归

## 性能优化

## 内存泄漏

