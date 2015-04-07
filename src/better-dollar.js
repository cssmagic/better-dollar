/**
 * Better-Dollar - Smart wrapper for jQuery's `$()` function.
 * Released under the MIT license.
 * https://github.com/cssmagic/better-dollar
 */
var dollar = (function (window) {
	'use strict'

	// deps
	var $ = window.jQuery || window.Zepto

	// util
	function isElement(obj) {
		// ref: underscore's _.isElement()
		return !!(obj && obj.nodeType === 1)
	}
	function is$Element(obj) {
		if (!obj || typeof obj !== 'object') return false
		var result = false
		if ('__proto__' in obj) {
			result = obj.__proto__ === $.fn
		} else {
			var Class = ($.zepto && $.zepto.Z) || $
			result = obj instanceof Class
		}
		return result
	}

	// fn
	function dollar(input) {
		var result
		if (isElement(input)) {
			result = input.__$__ = input.__$__ || $(input)
		} else if (is$Element(input)) {
			result = input
		} else {
			result = $(input)
		}
		return result
	}

	// api
	dollar.is$Element = is$Element

	// exports
	return dollar

}(window))
