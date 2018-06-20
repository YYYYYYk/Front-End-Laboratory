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
- [在线jQuery查询工具](http://www.runoob.com/try/trysel.php)

### 缓存DOM操作

## DOM操作
以下列出了所有处理HTML/CSS的jQuery方法：
### 增
- `.html('ele')`:设置/返回元素内容。
- `.text(content)`:设置/返回文本内容。
- `.prepend(content)`:在被选元素的头部插入子元素。可插入HTML元素，jQuery对象和DOM元素。第二个参数返回待插入内容的函数，index返回集合中元素的index位置，html但会被选元素的当前HTML。
- `.append(content,function(index,html))`:在兄弟元素的尾部插入子元素。第二个参数用法同上。
- `.before(content,function(index))`:在兄弟元素的前面插入兄弟元素。第二个参数返回带插入内容的函数，index返回集合中元素的索引位置。
- `.after(content,function(index))`:在被选元素的后面插入兄弟元素。
- `$(child_ele).prependTo($(parent_ele))`:将子元素插入到父元素的头部。
- `$(child_ele).appendTo($(parent_ele))`:将子元素插入到父元素的尾部。
- `$(brother_ele).insertBefore($(Brother_ele))`:将兄弟元素插入到兄长元素之前。
- `$(brother_ele).insertAfter($(Brother_ele))`:将兄弟元素插入到兄长元素之后。
- `.clone()`:克隆元素的副本，包括元素节点，子节点和所有属性。
- `.wrap(html)`:将**每个**被选元素用指定的HTML元素包裹起来。
- `.wrapAll(html)`:将**所有**被选元素用指定的HTML元素包裹起来。
- `.wrapInner(html)`:将被选元素的内容用HTML元素包裹起来。

### 删
- `.remove()`:彻底移除被选元素，包括本身，子节点，文本，数据和事件。
- `.detach()`:暂时移除被选元素，但保留所有数据和节点。函数会返回被移除的元素。
- `.empty()`:清空被选元素的所有子节点和内容，除了元素和它的属性。
- `.unwrap()`:移除被选元素的父元素，被选元素会保留。

### 改
- `$(ele_1).replaceAll($(ele_2))`:用**新HTML元素**ele_1替换掉所有的ele_2元素。
- `$(ele_1).replaceWith(content)`:把被选元素lel_1的内容替换为**新内容**。

### 查
- `.hasClass('class')`:检查被选元素是否包含指定的class名称。

### 属性
- `.attr('attribute')`:返回HTML属性的值。`.attr('attr','val')`:设置单个HTML属性值。`.attr({attr1:'val1',attr2:'val2'})`:设置多个属性值。`.attr('attr',f(index,currentclass))`:
- `.removeAttr('attribute1 attribute2')`:移除HTML元素的一个或多个属性。
- `.prop('attribute')`:返回DOM属性的值。`.prop('attribute','value')`:设置或返回DOM元素的属性如checked,selected,disabled,autofocus的Boolean值。
- `.removeProp('attribute1 attribute2')`:移除由prop()方法设置的DOM属性。
- `.val()`:返回/设置**表单元素**的value值。

### 坐标
- `.position()`:返回相对于父元素的位置。
- `.scrollTop()`:返回/设置垂直滚动条的Y轴的位置。
- `.scrollLeft()`:返回/设置水平滚动条的X轴的位置。
- `.offset()`:返回/设置相对于文档的坐标。

### 尺寸
- `.width('val)`:返回/设置被选元素的宽度。
- `.height('val')`:返回/设置被选元素的高度。
- `.innerWidth()`:返回元素包含padding的宽度。
- `.innerHeight()`:返回元素包含padding的高度。
- `.outerWidth()`:返回元素包含padding和border的宽度。
- `.outerHeight()`:返回元素包含padding和border的宽度。

### Style操作
- `.css('property')`:返回样式属性值。`.css('prop','val')`:设置单个样式属性值。`.css({prop1:'val1',prop2:'val2'})`:设置多个样式属性值。`.css(prop,function(index,currentvalue))`:返回样式属性值，index为元素的索引值，currentclass是样式属性的当前值。
- `.addClass("class1 class2",function(index,currentclass))`:向被选元素添加一个或多个类名。函数可返回一个或多个类名，index是元素的当前索引，currentclass是被选元素的当前类名。
- `.removeClass("class1 class2")`:移除一个或多个类，若参数为空，则移除所有类。`.removeClass("class",function(index,currentclass))`:返回要移除的一个或多个类名称的函数。
- `.toggleClass("class")`:对元素一个或多个类进行切换。

## Event事件

### 事件代理/委托

## 效果

## 遍历

## Utilities

## 插件