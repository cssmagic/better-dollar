void function () {

	function test(name, wrapper) {
		describe(name, function () {
			it('returns directly if already a wrapped element', function () {
				var $a = wrapper('#mocha')
				var $b = wrapper($a)
				expect($a).to.equal($b)
			})
			it('doesn\'t generate multiple $ elements for the same dom element', function () {
				var obj = document.getElementById('mocha')
				var $a = wrapper(obj)
				var $b = wrapper(obj)
				expect($a).to.equal($b)
			})
		})
	}

	test('jQuery V1', jQueryV1)
	test('jQuery V2', jQueryV2)
	test('Zepto', Zepto)

}()
