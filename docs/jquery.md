# jQuery
jQuery是一个高效，精简，功能丰富的JavaScript工具库，极大地简化了JavaScript编程，让开发者“写得最少，做得最多”。它包含以下功能：
- 获取HTML元素。
- 操作HTML元素。
- 操作DOM和CSS。
- HTML事件函数。
- Javascript特效和动画。
- DOM树的遍历和修改。
- AJAX,异步JS和XML。
- 大量的插件和实用工具。

兼容性：jQuery 2.x.x版本不再支持IE6,IE7和IE8浏览器。

```html
<!--IE注释-->
<!--[if lt IE 9]>
    <script src="jquery-1.9.0.js"></script>
<![endif]-->
<!--[if gte IE 9]><!-->
    <script src="jquery-2.0.0.js"></script>
<!--<![endif]-->
```
## 核心原理

## 查询器/选择器
- `$("*")`:
- `$("#id")`:
- `$(".class")`:
- `$("tag")`:
- `$("tag1,tag2,tag3")`:
- `$("tag1 tag2")`:
- `$("tag1>tag2")`:
- `$("tag1+tag2")`:
- `$("tag1~tag2")`:
- `$("tag:not(.class)")`:
- `$("tag1:has(tag2)")`:
- `$(":contains("hello")")`:
- `$("[attr="value"]")`:
- `$(":checked")`:

### 缓存DOM操作

## DOM操作
以下列出了所有处理HTML和CSS的jQuery方法：
### 增
- `.html('ele')`:设置/返回元素内容。
- `.text(content)`:设置/返回文本内容。
- `.prepend(content)`:在被选元素的头部插入子元素。可插入HTML元素，jQuery对象和DOM元素。第二个参数返回待插入内容的函数，index返回集合中元素的index位置，html但会被选元素的当前HTML。
- `.append(content,function(index,html))`:在被选元素的尾部插入子元素。第二个参数用法同上。
- `.before(content，function(index))`:在被选元素的前面插入兄弟元素。第二个参数返回带插入内容的函数，index返回集合中元素的索引位置。
- `.after(content)`:在被选元素的后面插入兄弟元素。
- `$(child_ele).prependTo($(parent_ele))`:
- `$(child_ele).appendTo($(parent_ele))`:
- `$(child_ele).insertBefore($(parent_ele))`:
- `$(child_ele).insertAfter($(parent_ele))`:
- `.clone()`:

### 删
- ``:
### 改
- ``:
### 查
- ``:
### 属性
- ``:
### 坐标
- ``:
### 尺寸
- ``:
### CSS操作
- ``:
## Event事件

### 事件代理/委托

## 效果

## 遍历

## Utilities

## 插件