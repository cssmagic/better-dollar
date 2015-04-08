# Better-Dollar

> Smart wrapper for jQuery's `$()` function.

## 这个项目是怎么来的？

我们都知道，jQuery 的 `$()` 函数可以获取 DOM 元素并将其包装为一个 jQuery 对象，它几乎是所有 jQuery API 的入口。它很重要，但我们对它仍有一些不满：

* **当传入一个 jQuery 对象时**

	如果我们传给 `$()` 函数的已经是一个经过包装的元素，它只需要把传入的参数直接返回就可以了。但 jQuery 会生成一个新的 jQuery 对象。

* **当反复包装同一元素时**

	对一个 DOM 元素频繁进行操作时，可能会生成大量 jQuery 对象。参考以下代码：

	```js
	$('#switch').on('click', function () {
		$(this).toggleClass('open')
	})
	```

	每次点击 `#switch` 元素时，都会生成一个新的 jQuery 对象——即使它们包裹的 DOM 元素是同一个。

因此，Better-Dollar 试图在 `$()` 函数之上做一层封装，以避免上述问题。

## 兼容性

依赖以下类库：

* jQuery（或兼容类库，比如 Zepto）

支持以下浏览器：

* Chrome / Firefox / Safari 等现代浏览器
* IE 6+（需要 jQuery 1.x）

## 安装

0. 通过 Bower 安装：
	```sh
	$ bower install better-dollar
	```

0. 在页面中加载 Better-Dollar 的脚本文件及必要的依赖：
	```html
	<!DOCTYPE html>
	<html>
	<head>...</head>
	<body>
		...
		<script src="bower_components/jquery/dist/jquery.js">
		<script src="bower_components/better-dollar/src/better-dollar.js">
		<!-- your code here -->
	</body>
	</html>
	```

## API 文档

所有文档入口在 [Wiki 页面](https://github.com/cssmagic/better-dollar/wiki)，快去看吧！

## 单元测试

0. 把本项目的代码 fork 并 clone 到本地。
0. 在本项目的根目录运行 `bower install`，安装必要的依赖。
0. 在浏览器中打开 `test/test.html` 即可运行单元测试。

## 谁在用？

移动 UI 框架 [CMUI](https://github.com/CMUI/CMUI) 采用 Better-Dollar 作为全局的基础设施，因此所有 CMUI 用户都在使用它：

* [百姓网 - 手机版](http://m.baixing.com/)
* [薇姿官方电子商城 - 手机版](http://m.vichy.com.cn/)
* [优e网 - 手机版](http://m.uemall.com/)

***

## License

[MIT License](http://www.opensource.org/licenses/mit-license.php)
