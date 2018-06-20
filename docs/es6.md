# ECMAScript 6

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

//let不能重复声明，而var无限制
let y = 1; // y==1
let y; // SyntaxError: Identifier 'y' has already been declared
let y = 2; // SyntaxError: Identifier 'y' has already been declared

var x = 1;  //x==1
var x;  // x==1
var x = 2; // x==2
```
解释：变量a用`let`命令在块级作用域`{}`中声明，外部无法读取内部的内容。

### let的作用

- 块级作用域，防止变量污染全局。在`if(){}`，`for(){}`，`do{}while()`中let 声明的变量具有块级作用域。
- 移除变量提升，用`let`声明的变量必须在使用前声明，否则会报错而不是undefined。
- 移除顶层对象，过去顶层对象`window`和全局对象是等价的，而用let声明的对象`a`无法用`window.a`调用。
- 禁用重复声明,let声明的变量名不得重复声明，var没有此限制。

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

- 声明定义常量，必须立即初始化，禁止未来赋值。
- 块级作用域，和let一样，const声明的常量也有块级作用域。
- 没有变量提升，必须在使用之前声明和初始化。

## 解构赋值
ES6新增了一种可以从数组和对象中取值和赋值的语法结构。
### 基本用法
#### 数组`[]`解构赋值
数组的元素是按顺序排列的，通过“模式匹配”的方式可以让数组元素按位置赋值。
```javascript
//正常模式
let [one,two,three] = [1,2,3]; //one==1,two==2,three==3

let [x,,y] = [1,2,3]; //x=1,y=3

//嵌套
let [a,[b,[c]]] = [1,[2,[3]]]; //a==1,b==2,c==3

//无限参数
let [head,...tail] = [1,2,3,4,5,6]; //head==1,tail==[2,3,4,5,6]

//Set数据结构
let [x,y,z] = [1,2,3];
let [a,b,c] = new Set([x,y,z]); //a==1,b==2,c==3

//默认值
let [x,y=2] = [1]; //x==1,y==2
let [x=y,y=1] = []; //ReferenceError: y is not defined. 右边的变量必须是声明的
let [x=1] = [undefined]; // x==3 //当右边时undefined时，默认值生效。空和undefined是默认值生效的条件。
let [x=1] = [null]; // x==null //当右边为null时，默认值不生效。

```

#### 对象`{}`解构赋值
与数组解构赋值不同，对象的解构赋值是按照对象名来赋值的，不按照次序赋值（可乱序）。
```javascript
//正常模式
let {foo,abc} = {abc:123,foo:function() {}}; // foo:function(){} , abd:123

let {a} = {b:2,c:3}; //a is undefined. 没有同名属性无法取值。

//嵌套
let obj = {a:1,b:[2,{c:3}]};
let {a,b,b:[m,{c}]} = obj; //a==1,b==[2,{c:3}],m==2,c==3

//默认值
let {x=1} = {};
let {x,y=2} = {x:1};
let {x=1} = {x:undefined};// x==3 //当右边时undefined时，默认值生效。空和undefined是默认值生效的条件。与数组解构赋值类似。
let {x=1} = {x:null}; //x==null //当右边为null时，默认值不生效。 与数组解构赋值类似。
```

#### 字符串/数值/布尔值的解构赋值
字符串在右边时，会被拆分成字符串数组后赋值。
```javascript
let [a,b,c] = 'String'; //a==S,b==t,c==r ,数组被拆分成字符串数组进行赋值。
```
数值或布尔值在右边时，会被转换成对象后赋值
```javascript
let {toString: s} = 123; // s===Number.prototype.toString();
let {toString: s} = true; // s===Boolean.prototype.toString();
```

### 结构赋值的作用/实例

#### 交换变量的值
换值只需一行代码，非常简洁清晰。
```javascript
let x=1,y=2;
[x,y] = [y,x]; // x==2,y==1;
```

#### 从函数中返回多个值-`解构取参`
函数可返回数组或对象，用解构赋值取参十分方便。
```javascript
//返回数组并解构取参
function foo(){
    return [1,2,3];
}
let [x,y,z] = foo; //x==1,y==2,z==3

//返回对象并解构取参
function foo() {
  return {a:1,b:'string',c:[1,2,3]}
}
let {a,b,c} = foo();  //a==1,b=='string',c==[1,2,3]
```

#### 定义函数参数-传参
解构赋值可用于传参：有序参数用数组解构赋值，无序参数用对象的解构赋值。
```javascript
//传有序参数
function foo([x,y,z]){
    return x+y*z;
}
foo([1,2,3]); //7 ,传有序参时有数组解构赋值：[x,y,z]=[1,2,3]。
//传无序参数
function foo({x,y,z}){
    return x+y*z;
}
foo({z:3,y:2,x:1}); //7 ,传无序参时有解构赋值：[x,y,z]={z:3,y:2,x:1}。
```

#### 提取JSON数据
将JSON对象解析成对象，再通过对象解构赋值提取数据。
```javascript
let obj = {
    a:1,
    b:'2',
    c:[3]
}
let jsonData = JSON.stringify(obj); //jsonData=={"a":1,"b":"2","c":[3]}
let data = JSON.parse(jsonData); //data=={a: 1, b: "2", c: Array(1)}
let {a,b,c}=data; //a==1,b=='2',c==[3]
```

#### 遍历Map结构
任何部署了 Iterator 接口的对象，都可以用for...of循环遍历。Map 结构原生支持 Iterator 接口，配合变量的解构赋值，获取键名和键值就非常方便。
```javascript
const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
  console.log(key + " is " + value); //first is hello second is world
}
```

#### 模块的解构赋值
加载模块时用解构赋值指定输入的方法，语法简洁效率很高。
```javascript
const { SourceMapConsumer, SourceNode } = require("source-map");
```

## `Symbol`数据类型
symbol表示独一无二的值，凡是symbol数据类型的属性名就是独一无二的，保证不与其他属性名冲突。

**`symbol`**是ES6新增的`基本数据类型`，ES5中基本数据类型包括了`number`，`string`，`boolean`，`null`，`undefined`5种(除了复杂数据类型`object`)。因此目前有6种基本数据类型和1种复杂数据类型。
symbol值由Symnol()函数生成，**没有`new`关键字**。

每一个 Symbol 值都是不相等的，这意味着 Symbol 值可以作为标识符，用于对象的属性名，就能保证不会出现同名的属性。Symbol对象用作属性名时，只能通过`[symbol]`声明和使用,不能通过`.`运算符使用，否则变为普通字符串。(普通属性名通过`.string`和`["string"]`读取对象)

### Symbol的作用
#### 用于对象属性名
由于Symbol的值是唯一的，可用于对象的属性名，防止重名冲突。

```javascript
let symbol = Symbol();

//第一种方式
let obj = {};
obj[symbol] = 1;

//第二种方式
let obj = {[symbol]:1};

//第三中方式
let obj = {};
Object.defineProperty(obj,symbol,{value: 1});
```
遍历属性名：由于Symbol作为属性名不会出现在for...in和for...of循环中，也不会被Object.key()，Object.getOwnPropertyNames()，JSON.stringify()返回，但是它可用O`bject.getOwnPropertySymbols()`方法返回Symbol属性名数组。

```javascript
let x = Symbol('x');
let y = Symbol('y');
const symbolObject = {};
symbolObject[x] = 1;
symbolObject[y] = 2;
const symbolName = Object.getpropertySymbols(symbolObject); // [Symbol(x), Symbol(y)]
```

### Symbol的属性与函数
- `Symbol.key()`和`Symbol.keyFor()`
- `Symbol.hasInstance`
- `Symbol.isConcatSpreadable`
- `Symbol.species`
- `Symbol.match`
- `Symbol.replace`
- `Symbol.search`
- `Symbol.split`
- `Symbol.iterator`
- `Symbol.toPrimitive`
- `Symbol.toStringTag`
- `Symbol.unscopables`

## `Set`和`Map`数据结构
### Set数据结构
Set是ES6新增的数组数据结构，它类似于数组，但成员的值都是唯一的，没有重复的值。通俗讲Set就是没有重复值的数组。
```javascript
const set = new Set();
[1,1,2,2,3,3].forEach(x=>set.add(x));
for (let x of set){
    console.log(x); //1,2,3
}
console.log(set); // Set [1,2,3] ,size:3 ,<entries>0: 1,1: 2,2: 3 __proto__:Object{}
console.log([1,2,3]); //Array [1,2,3] ,length:3 , 0:1 ,1:2 ,2:3 __proto__:Array{}
```
#### Set属性
- `Set.prototype.constructor` : Set的原型的构造函数，`Set()`。
- `Set.prototype.size` : Set实例的成员个数，类似数组的length属性。
#### Set方法
- `set.add(value)`:添加某个值，返回原Set。
- `set.delete(value)`:删除某个值，返回布尔值表示成功与否。
- `set.has(value)`:检查是否含有value值，返回布尔值。
- `set.chear()`:清除所用成员。

```javascript
const set = new Set();
set.add(1); // Set [1]
set.add(2); // Set [1,2]
set.size; //2
set.has(1); //true

set.delete(1); //true
set.size; //1
set.has(1); //false

set.clear();
set.size;  //0
```
#### Set的遍历

### WeakSet数据结构
WeakSet数据结构与Set类似，WeakSet的成员只能是对象，不能是其他的任何值，其中的对象是弱引用，垃圾回收机制会自动回收WeakSet引用的对象。WeakSet适合存放一组临时对象，只要外部的对象被回收，WeakSet内部的引用也会消失。因此WeakSet不能遍历。
```javascript
const  ws = new WeakSet([{x:1},{y:2},{z:3}]); //构造函数传参需要用数组结构
```
#### WeakSet的属性和方法：
- `WeakSet.prototype.constructor` : WeakSet的原型的构造函数，`WeakSet()`。WeakSet没有size属性。
- `ws.add(object)`:添加某个值，返回原WeakSet。
- `ws.delete(object)`:删除某个值，返回布尔值表示成功与否。
- `ws.has(object)`:检查是否含有value值，返回布尔值。

```javascript
const  ws = new WeakSet([{0:1},[2,3]]); 
ws.add({4:5}); // [[],[],[]]<entries> 0: Array [ … ], 1: Object [ … ], 2: Object [ … ], __proto__:Object{}
ws.has({4:5}); //true
ws.delete({4:5}); //true
```
### Map数据结构
Map是ES6新增的对象数据结构，它类似于对象，即键值对`Key-Value`的集合（Hash结构），但它的键不限于字符串，各种类型的值(包括Object对象)都能作为键。由原有的`Key-Value`键值对拓展为`Value-Value`值值对。
#### Map实例的属性
- `map.size`:返回map实例的成员数目。
- `map.constructor`:返回map实例的构造函数。
#### Map
- `map.set(key,value)`:插入键值对,返回新的Map实例。
- `map.get(key)`:通过键获取对应的值。
- `map.has(key)`:检测某个键是否在map实例中，返回布尔值。
- `map.delete(key)`:删除某个键，返回成功与否的布尔值。
- `map.clear()`:清除所有成员，不返回值。

```javascript
const m= new Map();
m.set(123,456); // Map { 123 → 456 }
m.set([1,2],{3:4});  // Map { 123 → 456, Array [ … ] → Object [ … ] }
m.size; //2

let regexp = new RegExp(/abc/g);
m.set(regexp,{reg:'exp'}); //Map { 123 → 456, […] → […], /abc/g → {…} }
m.size; //3

m.get(regexp);// Object { reg: "exp" }
m.has(regexp); //true
m.delete(regexp); //true
m.size; //2
m.clear();
m.size; //0
```

#### Map的遍历
Map实例的遍历需要结合`for...of`循环，Map实例的遍历顺序就是插入顺序。
- `map.keys()`:返回键名。
- `map.values()`:返回键值。
- `map.entries()`:返回所有成员。
- `map.forEach()`:遍历map所有成员。

```javascript
const map = new Map();

for (let key of map.keys()){
    console.log(key);
}

for(let value of map.value()){
    console.log(value);
}

for (let item of map.entries()){
    console.log(item[0]+':'+item[1]);
}

map.forEach(function(value, key, map) {
  console.log("Key: %s, Value: %s", key, value);
});
```
- Map与数组互转：

```javascript
//Map转为数组
const map = new Map([[1,2],[3,4]]); //构造函数传参需要用数组结构

let mapKeys = [...map.keys()]; //Array [ 1, 3 ]
let mapValue = [...map.values()]; //Array [ 2, 4 ]
let mapEntries = [...map.entries()]; //Array [ [ 1, 2 ], [ 3, 4 ] ]
```
- Map与对象互转：
Map转为对象：(需要键名为字符串)
- Map与JSON互转：
### WeakMap数据结构
#### WeakMap与Map类似，也是用于生成键值对集合，其特点是
1. 只接受除null之外的键名。讲字符串，数值，Symbol作为键名插入会报错。
2. WeakMap键名所指的对象，不计入垃圾回收机制。它的键名所弱引用的对象，将来会随对象自动消失，能有效防止内存泄漏。
```javascript
const wm = new WeakMap();
let obj = {a:1};
wm.set(obj,'this is obj');  //WeakMap { {…} → 'this is obj' }
wm.get(obj); //'this is obj'
wm.delete(obj); //true
wm.has(obj); //false

wm.set(obj,'this is obj');//WeakMap { {…} → 'this is obj' }
obj = null;
wm.has(obj); //false
```
#### WeakMapde的用法实例
以DOM节点作为键名，键名随DOM节点删除，不存在内存泄漏风险。
```javascript
let myElement = document.getElementById('logo');
let myWeakmap = new WeakMap();

myWeakmap.set(myElement, {timesClicked: 0});

myElement.addEventListener('click', function() {
  let logoData = myWeakmap.get(myElement);
  logoData.timesClicked++;
}, false);

```
## `Iterator`和`For-of`循环
### Iterator遍历器
JavaScript现有4种‘集合’的数据结构：`Array`，`Object`，`Set`和`Map`。Iterator是一种完成遍历操作的接口，为不同的数据结构提供统一的访问机制。
它的作用有：一、为各种数据结构提供统一简便的接口；二、使得数据结构的成员能够按照某种次序排列；三、创造了一种新的遍历命令`for...of`循环。

原生具备Iterator接口的数据结构有(能直接用`for...of`)：
- Array
- Map
- Set
- String
- arguments对象(Function内部对象)
- NodeList对象
- Object.keys(obj),(Object不具备Iterator接口，需要将对象转换为键名数组来遍历，遍历对象推荐用for-in)

### `for...of`循环
`for...of`循环是遍历所有数据结构统一的方法。一个数据结构只要部署了Symbol.iterator属性，就会被视为具有iterator接口，就能用for...of循环遍历它的成员。

`for...of`循环可使用的范围包括数组，对象，Set，Map结构，arguments对象，DOM Nodelist对象，Generator对象以及字符串。
### `for...in`与`for...of`的区别

- for-in是为遍历对象值而设计的，它会遍历对象的键名，包括数组的索引[0,1,2,3...]。for-in会遍历手动创建的其他键名，包括原型链上的键，而且会以任意顺序遍历键名。中途不能跳出循环。
- for-of是基于Iterator接口的，它能遍历包括数组，对象，Set，Map，arguments等等几乎所有有Iterator的数据结构。其遍历按照顺序输出。for-of能用break语句跳出循环，for-in不能跳出循环。for-of还能与continue和return配合使用。
- 遍历数组时，for-in输出数组的索引，for-of输出数组的值。
- 遍历对象时，for-in输出对象的键名，for-of不能直接遍历普通对象，需要借助Object.keys(obj)将生成键名数组，然后遍历这个数组输出对象键名和键值。

## `Class`与继承

## `Module`模块

## `Promise`(承诺)对象

Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。它由社区最早提出和实现，ES6 将其写进了语言标准，统一了用法，原生提供了`Promise`对象。

所谓`Promise`，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。

`Promise`对象有以下两个特点。

（1）对象的状态不受外界影响。`Promise`对象代表一个异步操作，有三种状态：**`pending`（进行中）、`fulfilled`（已成功）和`rejected`（已失败）**。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是`Promise`这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变。

（2）一旦状态改变，就不会再变，任何时候都可以得到这个结果。`Promise`对象的状态改变，只有两种可能：从`pending`变为`fulfilled`和从`pending`变为`rejected`。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。如果改变已经发生了，你再对`Promise`对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。

注意，为了行文方便，本章后面的`resolved`统一只指`fulfilled`状态，不包含`rejected`状态。

有了`Promise`对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。此外，`Promise`对象提供统一的接口，使得控制异步操作更加容易。

`Promise`也有一些缺点。首先，无法取消`Promise`，一旦新建它就会立即执行，无法中途取消。其次，如果不设置回调函数，`Promise`内部抛出的错误，不会反应到外部。第三，当处于`pending`状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。

如果某些事件不断地反复发生，一般来说，使用 [Stream](https://nodejs.org/api/stream.html) 模式是比部署`Promise`更好的选择。

### 基本用法
Promise对象是一个构造函数，用来生成Promise实例。
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
### Promise对象的方法
### Promise对象的作用
- 链式回调异步操作

```javascript
//ES5链式回掉setTimeout()函数的代码非常难懂
setTimeout(function(){
  left(function(){
    setTimeout(function(){
       left(function(){
         setTimeout(function(){
           left();
         },2000);
       });
    }, 2000);
  });
}, 2000);

//采用Promise对象后
var promise = new Promise((resolve, reject)=>{
  setTimeout(resolve,2000);
});
promise.then(()=>setTimeout(null,2000);)
.then(()=>setTimeout(null,2000);)
.catch();
```

- 传递状态，改变状态

## `Generator`生成器函数

## `Async`函数

## `Proxy`对象

## `Reflect`对象

## 对象的扩展

### ES5原生属性和方法
- `.toString()`， 输出`[object Object]`.

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