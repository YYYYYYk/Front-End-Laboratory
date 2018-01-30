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
- `.concat(string1,string2)`:合并字符串，返回新字符串。
- `.slice[start,end)`:从索引位置提取字符串，返回新字符串。支持负数为参数，-1指最后一个字符，-2指倒数第二个字符。
- `.indexOf(string)`:返回指定字符串第一次出现的索引位置。
- `.lastIndexOf(string)`:从尾部搜索字符串，返回指定字符串第一次出现的索引位置（原索引值的方向）。
- `.charAt(index)`:返回指定索引位置的字符。
- `.toUpperCase()`:将字符串转换为大写，返回新字符串。
- `.toLowerCase()`:将字符串转换为小写，返回新字符串。
- `.valueOf()`:返回原始值。

```javascript
let str = '0123abc';
console.log(str.substring(1,2)+'||'+str); //1||0123abc
console.log(str.substr(1,2)+'||'+str); //12||0123abc
console.log(str.concat(str)+'||'+str); //0123abc0123abc||0123abc
console.log(str.slice[2,-1)+'||'+str); //23ab||0123abc
console.log(str.indexOf('a')+'||'+str); //4||0123abc
console.log(str.concat(str).lastIndexOf('a')+'||'+str); // 11||0123abc
console.log(str.charAt(3)+'||'+str); //3||0123abc
console.log(str.toUpperCase()+'||'+str); //0123ABC||0123abc
console.log(str.toLowerCase()+'||'+str); //0123abc||0123abc
console.log(str.valueOf()); //0123abc
```
##### 支持正则表达式的函数：
- `.search(RegExp||string)`:匹配字符串，返回第一个匹配项的位置。若参数为字符串，则与indexOf()函数无异。
- `.replace(RegExp||string1,string2)`:匹配字符串，用string2取代匹配项，并返回新字符串。
- `.split(RegExp||string)`:匹配字符串，用匹配项来分割字符串，返回分割后的新字符串数组。
- `.match(RegExp)`:匹配字符串，返回所有匹配项，组成新字符串数组。**str.match()只支持RegExp作参数！**

```javascript
let str = '0123abc0123abc';
let reg = /a/;

```

#### Boolean
##### Truthy 真值
在JavaScript中，Truthy(真值)指的是在Boolean上下文中转换后的值为真的值。所有值都是真值，除非它们被定义为 falsy (即， 除了false，0，“”，null，undefined和NaN 外)。JavaScript 在Boolean上下文中使用强制类型转换（coercion）。
JavaScript中的真值示例如下（将被转换为true类型，if 后的代码段将被执行）：
```javascript
if (true)
if ({})
if ([])
if (42)
if ("foo")
if (new Date())
if (-42)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
```

##### Falsy 假值
Falsy是在 Boolean 上下文中认定可转换为false的值.JavaScript 在需要用到布尔类型值的上下文中使用强制类型转换（Type Conversion ）将值转换为布尔值，比如：在条件语句或者循环语句中。
JavaScript中falsy值的例子 (将falsy值转换为false):
```javascript
if (false)
if (null)
if (undefined)
if (0)
if (NaN)
if ('')
if ("")
```
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
- length：它的长度等于键名最大的整数+1，中间允许空键值，获取空键值时为undefined。length是动态的，可写的，当用户给length赋值时，会删除超出范围的键值。若删除数组，将length赋值为0即可。
- for...in循环：遍历数组的键名，但也会遍历数组的额外属性和继承的属性。不推荐使用for...in遍历数组，推荐使用for或while循环。
- in运算符：可用于检查某个包含键值的键名（索引）是否存在于数组中。用法类似于对象。

##### 原生属性和函数
- `.constructor`:返回数组实例的构造函数。
- `.length`:设置或返回数组键名的个数。
- `Array.prototype`:数组构造函数的原型，添加的属性可用于数组实例。

常用
- `.push(ele)`:从尾部添加元素，返回新长度。
- `.pop(ele)`:从尾部删除元素,返回删除的元素。
- `.shift(ele)`:从头部删除,返回删除的元素。
- `.unshift(ele)`:从头部添加元素,返回新长度。
- `.concat(arr2,arr3)`:合并一个或多个数组,返回新数组。
- `.splice(index,length,ele1,ele2,...)`:从索引位置删除或添加新元素。
- `.reverse()`:反转并**返回原数组**。
- `.indexOf()`:搜索元素并返回位置。
- `.valueOf()`:获取原始值。
- `.join()`:把数组所有元素转换成字符串。
- `.fill('value',start,end)`:将value填充到start和end之前的位置。
- `.copyWithin(target,start,end)`:向目标位置复制指定范围内的元素。

```javascript
let array = [];

```
支持高阶函数
- `.forEach(function(value,index,array),this)`:调用数组的每个元素(必须)，索引和原数组传递给回调函数。
- `.find(f(i))`:为每个元素执行函数，若返回值为true则返回该元素而结束，若为false，返回undefined。
- `.findIndex(f(i))`:为每个元素执行函数，若返回值为true则返回该元素的索引而结束，若为false，则返回-1。
- `.every(f(i))`:为每个元素执行函数，若**所有**的返回值为true则返回true，若只要有一个返回false，则返回false，不再检测。
- `.filter(f(i))`:为每个元素执行函数，返回**所有**返回值为true的元素的新数组。
- `.map(f(i))`:按顺序为每个元素执行函数来处理，返回处理后的值并填入新数组中，最后返回新数组。
- `.reduce(function(total,num))`:接受一个函数作为累加器，先将将前两个值传入回掉函数运算，返回的结果与下一个值的再传入回调函数运算，直到算到最后一个为止，返回最终计算的值。若数组没有空值，则总共回调length-1次。
- `.sort()`:对数组元素进行排序，**返回**排序后的**原数组**。若为字母数组，则按升序排序，想降序再用reverse()函数。若是数字数组，无参则默认按照第一个数字字符排序，如40比5小。以函数为参数时，可指定数字按照升序还是降序排序。**注意！这会改变原数组**

```javascript
let array = [8,6,4,2,0];
array.sort((a,b)=>a-b); //
```

#### Date
Date用于处理日期与时间。
创建日期对象有四中方法：
```javascript
let date = new Date(); 
let date = new Date(milliseconds);
let date = new Date(datestring);
let date = new Date(year,month,day,hours,minutes,seconds,milliseconds);
```
##### 原生属性
- `.constructor`:返回Date函数的引用。
- `Date.prototype`:返回Date函数的原型，可向Date原型添加属性和方法。

##### 原生函数
- `.getFullYear()`:返回年份。对应.getUTCFullYear()和.setFullYear(year);
- `.getMonth()`:返回月份`(0~11)`。对应.getUTCMonth()和.setMonth(month);
- `.getDate()`:返回**一个月中**的某一天(1~31)。对应.getUTCDate()和.setDate(date);
- `.getDay`:返回**一周中**的某一天(0~6)。对应.getUTCDay();
- `.getHours()`:返回小时数(0~23)。对应.getUTCHours()和.setHours(hour);
- `.getMinutes()`:返回分钟数(0~59)。对应.getUTCMinutes()和setMinutes(minute);
- `.getSeconds()`:返回秒数(0~59)。对应.getUTCSeconds()和setSeconds(second);
- `.getMilliseconds()`:对应.getUTCMilliseconds()和.setMilliseconds(millisecond);
- `.getTime()`:返回1970-1-1至今的毫秒数。
- `Date.parse()`:返回1970-1-1-0:0:0到指定日期(字符串)的的毫秒数。
- `.toDateString()`:把 Date 对象的日期部分转换为字符串。
- `.toISOString()`:使用 ISO 标准返回字符串的日期格式。
- `.toJSON()`:以 JSON 格式返回日期字符串。
- `.toString()`:把Date对象转换成字符串。
- `.toUTCString()`:根据世界时，把Date对象转换成字符串。
- `.UTC(1234,5,6)`:根据世界时，返回1970-1-1到指定日期的毫秒数。
- `.valueOf()`:返回Date对象的原始值。

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
事件流分为事件捕获，事件处理，事件冒泡三个阶段。在W3C标准中：
1. 事件捕获是指事件在DOM树上从根元素到子孙元素，由上向下进行传播，即`document->html->body->section->...->div`。
2. 事件处理指当某个事件通过事件捕获或事件冒泡传递到某个对象上时，如果该对象绑定了事件监听函数，则执行该函数处理事件。事件监听函数分为捕获和冒泡，分别指定函数要响应事件捕获还是事件冒泡，默认是事件冒泡。
3. 事件冒泡是指事件在DOM树上从子孙元素到根元素，由下向上进行传播，即`div->...->section->body->html->document`，正好与事件捕获相反。

看图：
### 事件对象
####属性
- 常量`CAPTURING-PHASE`:
- 常量`AT-TARGET`:
- 常量`BUBBLING-PHASE`:
- 属性`target`:
- 属性`type`:
- 属性`bubbles`:
- 属性`cancelable`:
####方法

###目标事件对象

###事件监听对象

###文档事件对象

###鼠标/键盘事件对象

###DOM事件
####鼠标事件
####键盘事件
####框架/对象事件
####表单事件
####剪贴板事件
####打印事件
####拖动事件
####多媒体事件
####动画事件
####其他事件

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

