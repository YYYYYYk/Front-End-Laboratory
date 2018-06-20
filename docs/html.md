# HTML

## 核心基础
### 1. DOCTYPE原理
- ```<!DOCTYPE html>```是一种标准通用标记语言的文档类型声明，通过该标签，浏览器能够了解HTML5文档正在使用的HTML规范，<!DOCTYPE> 声明是HTML5文档的起始点，也就是说它必须位于HTML5文档的第一行！
- 在 HTML 4.01 中，<!DOCTYPE> 声明需引用 DTD （文档类型声明），因为 HTML 4.01 是基于 SGML （Standard Generalized Markup Language 标准通用标记语言）。DTD 指定了标记语言的规则，确保了浏览器能够正确的渲染内容。
HTML5 不是基于 SGML，因此不要求引用 DTD。
- HTML 4.01 规定了三种不同的 <!DOCTYPE> 声明，分别是：Strict、Transitional 和 Frameset。 HTML5 中仅规定了一种。

### 2. HEAD内容与设置

#### TITLE 标题

#### BASE 默认链接
- 所有的相对链接规定默认 URL 或默认目标。在一个文档中，最多能使用一个 <base> 元素。 <base> 标签必须位于 <head> 元素内部。
- 请把 <base> 标签排在 <head>  元素中第一个元素的位置，这样 head 区域中其他元素就可以使用 <base>  元素中的信息了。
- 如果使用了 <base>  标签，则必须具备 href 属性或者 target 属性或者两个属性都具备。

#### META 描述文档元数据

#### LINK 链接外部资源

#### STYLE 样式表

#### SCRIPT JS脚本

#### 


### 3. HTML4.01常用标签

### 4. HTML5常用标签

## Web标准

## 语义化

## 表单元素

## 页面加载过程

## 新表单元素

## 新Input类型
### 新类型：

- email
- tel
- color
- url
- date
- month
- time

### 新属性

- autofocus
- height/width(\<img\>)
- required
- multiple

## 新媒体元素

## 离线存储

## Canvas

## MathML

## WebSocket

## 新属性

## 拖放

## 定位

## 应用缓存

## 数据存储
- cookie
- sessionStorage
- LocalStorage

## Web Workers

## Web SQL

## SSE