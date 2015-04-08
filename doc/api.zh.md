# API 文档

## 导言<a name="intro"></a>

> 除特别注明外，下文所述 “jQuery” 一词可以理解为对所有 jQuery 兼容类库（Zepto 等）的统称。

jQuery 并不直接操作原生 DOM 元素。当我们使用所有与 DOM 相关的 jQuery API 时，都需要先获取一个或多个 DOM 元素，并将它（们）包装为一个 jQuery 对象（也可称为 “jQuery 包装对象” 或 “jQuery 集合”）；我们使用的这些 API 实际上都是 jQuery 对象的实例方法。

而在这个过程中，jQuery 最核心的 `$()` 函数就负责了两件事情：

* 获取一个或多个 DOM 元素
* 将它（们）包装为一个 jQuery 对象

#### 问题

在实际应用中，jQuery 的 `$()` 函数存在两个问题：

* **当传入一个 jQuery 对象时**

	如果我们传给 `$()` 函数的已经是一个经过包装的元素，它只需要把传入的参数直接返回就可以了。但实际上 jQuery 会生成一个新的 jQuery 对象。（注：Zepto 不存在此问题。）

* **当反复包装同一元素时**

	对一个 DOM 元素频繁进行操作时，可能会生成大量 jQuery 对象。参考以下代码：

	```js
	$('#switch').on('click', function () {
		$(this).toggleClass('open')
	})
	```

	每次点击 `#switch` 元素时，都会生成一个新的 jQuery 对象——即使它们包裹的 DOM 元素是同一个。

#### 解决方案

Better-Dollar 提供的 `dollar()` 函数在 jQuery 的 `$()` 函数之上做了一层封装，试图避免上述问题：

* **当传入一个 jQuery 对象时**

	`dollar()` 会先判断一下参数，如果参数已经是包装对象时，则直接返回它；如果不是，则调用 `$()` 来生成包装对象。

* **当反复包装同一元素时**

	如果传入的参数是一个 DOM 元素，则 `dollar()` 会调用 `$()` 来包装一下，然后会把包装结果写入该 DOM 元素的某个属性，缓存起来。当下次再把这个 DOM 元素传给 `dollar()` 时，`dollar()` 就可以直接使用上次缓存的包装结果了，不会再次生成一个新的包装对象。
	
	这是一种用空间换时间的策略。这对于 [CMUI](https://github.com/CMUI/CMUI) 这样的 UI 框架来说，在某些需要频繁操作单个元素的场景下，是一种不错的优化方案。

## JavaScript 接口<a name="js-api"></a>

### `dollar(elem)`<a name="js-api-dollar"></a>

此函数被设计为 jQuery 的 `$()` 函数的 “增强版”。在常规场景下，它与 `$()` 无异；它的特别之处在于它可以避免上述两个问题。

#### 参数

* `elem` -- 选择符、DOM 元素或 jQuery 对象。指定需要获取并包装的 DOM 元素。

#### 返回值

jQuery 对象。

#### 示例

产生一个包装对象：

```js
var $elem = dollar(document.body)
```

当传入一个包装对象时，并不会生成一个新的包装对象：

```js
var $elem2 = dollar($elem)
$elem2 === $elem  // => true
```

当反复包装同一元素时，会重用以前的包装结果：

```js
var $elem3 = dollar(document.body)
$elem3 === $elem  // => true
```

***

### `dollar.is$Element(obj)`<a name="js-api-is$Element"></a>

判断是否为 jQuery 对象。

#### 参数

* `obj` -- 任意类型。需要判断的对象。

#### 返回值

布尔值。判断结果。

#### 示例

```js
dollar.is$Element($('body'))  // => true
dollar.is$Element(document.body)  // => false
```
