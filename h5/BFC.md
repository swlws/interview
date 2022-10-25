# BFC

## 格式化上下文

- BFC，Block Formatting Contexts，块级格式化上下文
- IFC，Inline Formatting Contexts，行内格式化上下文
- FFC，Flex Formatting Contexts，弹性格式化上下文
- GFC，Grid Formatting Contexts，网格格式化上下文

## BFC 的创建

以下元素会创建 BFC：

- 根元素（<html>）
- 浮动元素（float 不为 none）
- 绝对定位元素（position 为 absolute 或 fixed）
- 表格的标题和单元格（display 为 table-caption，table-cell）
- 匿名表格单元格元素（display 为 table 或 inline-table）
- 行内块元素（display 为 inline-block）
- overflow 的值不为 visible 的元素
- 弹性元素（display 为 flex 或 inline-flex 的元素的直接子元素）
- 网格元素（display 为 grid 或 inline-grid 的元素的直接子元素）

## BFC 的特性

BFC 除了会创建一个隔离的空间外，还具有以下特性，附 CodePen 示例链接地址，可结合示例进行理解：

- BFC 内部的块级盒会在垂直方向上一个接一个排列 [①](https://codepen.io/lycheelee/pen/BaNYLNO?editors=1100)
- 同一个 BFC 下的相邻块级元素可能发生外边距折叠，创建新的 BFC 可以避免的外边距折叠 [②](https://codepen.io/lycheelee/pen/mdJXrwK?editors=1100)
- 每个元素的外边距盒（margin box）的左边与包含块边框盒（border box）的左边相接触（从右向左的格式化，则相反），即使存在浮动也是如此 [③](https://codepen.io/lycheelee/pen/JjdpbGZ?editors=1100)
- 浮动盒的区域不会和 BFC 重叠 [④](https://codepen.io/lycheelee/pen/mdJXaXK?editors=1100)
- 计算 BFC 的高度时，浮动元素也会参与计算 [⑤](https://codepen.io/lycheelee/pen/wvayENb?editors=1100)

## BFC 的应用

- 自适应布局，左右定宽、中间自适应
- 防止外边距塌陷
- 清除浮动

- [^1] [可能是最好的 BFC 解析了...](https://juejin.cn/post/6960866014384881671)
