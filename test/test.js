void function () {
	describe('APIs', function () {
		describe('dollar()', function () {
			var wrapper = dollar
			it('does basic functionality same as $()', function () {
				var elem
				elem = document.getElementById('mocha')
				expect(wrapper(elem)).to.deep.equal($(elem))
				elem = 'body'
				expect(wrapper(elem)).to.deep.equal($(elem))
			})
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

		describe('dollar.is$Element()', function () {
			it('checks whether a $ element (or a $ collection)', function () {
				var arg
				arg = $()
				expect(dollar.is$Element(arg)).to.be.true
				arg = $(window)
				expect(dollar.is$Element(arg)).to.be.true
				arg = {}
				expect(dollar.is$Element(arg)).to.be.false
				arg = document.body
				expect(dollar.is$Element(arg)).to.be.false
			})
			it('returns `false` if bad type of param', function () {
				var arg
				arg = undefined
				expect(dollar.is$Element(arg)).to.be.false
				arg = null
				expect(dollar.is$Element(arg)).to.be.false
				arg = 0
				expect(dollar.is$Element(arg)).to.be.false
				arg = true
				expect(dollar.is$Element(arg)).to.be.false
				arg = {}
				expect(dollar.is$Element(arg)).to.be.false
				arg = []
				expect(dollar.is$Element(arg)).to.be.false
			})
		})
	})
}()
