# ECMAScript6

## `let`和`const`命令
### let基本用法

`let`命令用来声明变量，用法类似于`var`，但是所声明的变量，只在`let`命令所在的代码块内有效。让JavaScript语言在全局作用域和函数作用域基础上新增了块级作用域。

```javascript
{ 
    let a = 1;
    var b = 2;
}
console.log(a); //Uncaught ReferenceError: a is not defined. 参数错误，a没有定义。
console.log(b); //2
```
解释：变量a用`let`命令在块级作用域`{}`中声明，外部无法读取内部的内容。

### let的作用

- 块级作用域，防止变量污染全局。在`if(){}`，`for(){}`，`do{}while()`中let 声明的变量具有块级作用域。
- 移除变量提升，用`let`声明的变量必须在使用前声明，否则会报错而不是undefined。
- 移除顶层对象，过去顶层对象`window`和全局对象是等价的，而用let声明的对象`a`无法用`window.a`调用。

### const基本用法
const声明一个只读的常量。一旦声明，常量的值就不能改变，而且const一旦声明就必须立即初始化，不能留到以后赋值。

```javascript
{
    const PI = 3.14;
    PI = 3; // Uncaught TypeError: Assignment to constant variable. 类型错误，禁止给常量赋值。
    const NAME;  //Uncaught SyntaxError: Missing initializer in const declaration. 语法错误：没有在常量声明时赋值。
}
console.log(PI);  //Uncaught ReferenceError: PI is not defined. 参数错误，PI没有定义。
```

### const的作用

- 声明定义常量，必须立即初始化，禁止赋值。
- 块级作用域，和let一样，const声明的常量也有块级作用域。
- 没有变量提升，必须在使用之前声明和初始化。

## 解构赋值
ES6新增了一种可以从数组和对象中取值和赋值的语法结构。
### 基本用法
#### 数组`[]`方式

#### 对象`{}`方式

### 结构赋值的作用

- 交换数据
```javascript
[a,b]=[b,a];
```
- 返回

## `Symbol`数据类型
symbol表示独一无二的值，凡是symbol数据类型的属性名就是独一无二的，保证不与其他属性名冲突。

**`symbol`**是ES6新增的`基本数据类型`，ES5中基本数据类型包括了`number`，`string`，`boolean`，`null`，`undefined`5种(除了复杂数据类型`object`)。因此目前有6种基本数据类型和1种复杂数据类型。
symbol值由Symnol()函数生成，**没有`new`关键字**。

每一个 Symbol 值都是不相等的，这意味着 Symbol 值可以作为标识符，用于对象的属性名，就能保证不会出现同名的属性。Symbol对象用作属性名时，只能通过`[]`声明和使用,不能通过`.`运算符使用，否则变为普通字符串。

### Symbol的属性与函数

### Symbol的作用
- 用于对象属性名
- 消除魔术字符串

## `Set`和`Map`数据结构

## `Iterator`和`For-of`循环

## `Class`与继承

## `Module`模块

## `Promise`对象

Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。它由社区最早提出和实现，ES6 将其写进了语言标准，统一了用法，原生提供了`Promise`对象。

所谓`Promise`，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。

`Promise`对象有以下两个特点。

（1）对象的状态不受外界影响。`Promise`对象代表一个异步操作，有三种状态：`pending`（进行中）、`fulfilled`（已成功）和`rejected`（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是`Promise`这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变。

（2）一旦状态改变，就不会再变，任何时候都可以得到这个结果。`Promise`对象的状态改变，只有两种可能：从`pending`变为`fulfilled`和从`pending`变为`rejected`。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。如果改变已经发生了，你再对`Promise`对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。

注意，为了行文方便，本章后面的`resolved`统一只指`fulfilled`状态，不包含`rejected`状态。

有了`Promise`对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。此外，`Promise`对象提供统一的接口，使得控制异步操作更加容易。

`Promise`也有一些缺点。首先，无法取消`Promise`，一旦新建它就会立即执行，无法中途取消。其次，如果不设置回调函数，`Promise`内部抛出的错误，不会反应到外部。第三，当处于`pending`状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。

如果某些事件不断地反复发生，一般来说，使用 [Stream](https://nodejs.org/api/stream.html) 模式是比部署`Promise`更好的选择。

```javascript
const promise = new Promise(function(resolve, reject) {
  // ... some code

  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});
```

## `Generator`生成器函数

## `Async`函数

## `Proxy`对象

## `Reflect`对象

## 对象的扩展

### ES5原生属性和方法
- `.toString()`， 输出`[object Object]`.
对象转字符串：
字符串转对象：
- 

### ES6新增属性和方法

## 数组的扩展

### ES5原生属性和方法

### ES6新增属性和方法

## 函数的扩展

### ES5原生属性和方法

### ES6新增属性和方法

## 数值的扩展

### ES5原生属性和方法

### ES6新增属性和方法

## 字符串的扩展

### ES5原生属性和方法

### ES6新增属性和方法

## 正则的扩展

### ES5原生属性和方法

### ES6新增属性和方法