# JavaScript

## 数据类型
### 基本数据类型
#### Number数值

##### 原生属性
- `.constructor`:数值对象的构造函数引用。
- `Number.prototype`:Number构造函数的原型，添加新属性后其生成的数值对象可使用。
- `Number.MAX_VALUE`:可表示的最大的数：1.7976931348623157e+308。
- `Number.MIN_VALUE`:可表示的最小的数：5e-324。
- `Number.NaN`:非数值。

```javascript
let n = 1; //1
n.constructor;  //function Number()
Number.prototype; //Number { 0 }
Number.MAX_VALUE; //1.7976931348623157e+308
Number.MIN_VALUE; //5e-324
```
##### 原生函数
- `.toString(2/8/16/2~36)`:将数值转换成对应基数的数值，再转换成字符串。
- `.valueOf()`:返回数值的原始值。
- `.toExponential()`:把对象的数值转换为指数计数法,再转换成字符串。
- `.toFixed() `:将数值转换为含有小数点指定位数的字符串。 

```javascript
let n = 1; //1
let m = new Number(20);  //Number { 2 }

m.toString(2); //'10100'
m.toString(8); //'24'
m.toString(10); //'20'(default)
m.toString(16); //'14'

m.valueOf(); //20
m.toExponential(); //'2e+1'
m.toFixed(4); //'20.0000'
```

##### 数值的全局函数
- `parseInt(string,key)`:将字符串转换成整数（默认十进制）。第二个参数再2~36之间，表示被解析的值的进制，返回该值对应的十进制数。超过2~36的范围则返回NaN。若第二个参数是0/null/undefined,则直接忽略。从左到右转换，直到非数值即停止。
- `parseFloat()`:将字符串转换为浮点数。
- `isNaN()`:判断一个值是否为NaN。
- `isFinite()`:检测是否为正常的数值并返回布尔值。

#### String字符串

##### 原生属性
- `str.constructor`:创建字符串对象的构造函数的引用。
- `str.length`:字符串的长度。
- `String.prototype`:构造函数的原型。

##### 原生函数
- `.substring[from,to)`:从索引位置提取字符串，返回新字符串，必须是非负整数作参数。
- `.substr(start,length)`:从索引起始位置，按指定数目提取字符串，返回新字符串。
- `.concat(string)`:合并返回新字符串。
- `.slice[start,end)`:从索引位置提取字符串，返回新字符串。支持负数为参数，-1指最后一个字符，-2指倒数第二个字符。
- `.indexOf(string)`:返回指定字符串第一次出现的索引位置。
- `.lastIndexOf()`:从尾部搜索字符串，返回指定字符串第一次出现的索引位置（原索引值的方向）。
- `.charAt(index)`:返回指定索引位置的字符。
- `.toUpperCase()`:将字符串转换为大写，返回新字符串。
- `.toLowerCase()`:将字符串转换为小写，返回新字符串。
- `.valueOf()`:返回原始值。

##### 支持正则表达式的函数：
- `.search(RegExp||string)`:匹配字符串，返回第一个匹配项的位置。若参数为字符串，则与indexOf()函数无异。
- `.replace(RegExp||string1,string2)`:匹配字符串，用string2取代匹配项，并返回新字符串。
- `.split(RegExp||string)`:匹配字符串，用匹配项来分割字符串，返回分割后的新字符串数组。
- `.match(RegExp)`:匹配字符串，返回所有匹配项，组成新字符串数组。**str.match()只支持RegExp作参数！**


#### Boolean
#### Null
#### Undefined
#### Object
#### Symbol(ES6)

### 引用类型
#### Object
#### Functtion
##### 函数式编程(新型软件开发模式)
#### Array数组

##### 特性
##### 原生属性和函数
- `.constructor`:
- `.length`:
- `.prototype`:
常用
- `.push(ele)`:从尾部添加元素。
- `.pop(ele)`:从尾部删除元素。
- `.shift(ele)`:从头部删除并返回删除的元素。
- `.unshift(ele)`:从头部添加元素并返回长度。
- `.splice(index,length,ele1,ele2,...)`:从索引位置删除或添加新元素。
- `.reverse()`:反转并返回原数组。
- `.indexOf()`:搜索元素并返回位置。
- `.valueOf()`:获取原始值。
- `.join()`:把数组所有元素装转换成字符串。
- `.fill('value',start,end)`:将value填充到start和end之前的位置。

支持高阶函数
- `.forEach()`:
- `.find(function)`:
- `.every()`:
- `.filter()`:
- `.map()`:
- `.reduce()`:
- `.sort()`:
```javascript
let array = [8,6,4,2,0];
array.sort((a,b)=>a-b); //
```

#### Date
#### RegExp
#### Math

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

