void function () {
	describe('APIs', function () {
		describe('dollar()', function () {
			it('does basic functionality same as $()', function () {
				var elem
				var obj
				elem = document.getElementById('mocha')
				obj = dollar(elem)
				expect(obj).to.deep.equal($(elem))
				elem = 'body'
				obj = dollar(elem)
				expect(obj).to.deep.equal($(elem))
			})
			it('returns directly if already a $ element (or a $ collection)', function () {
				var obj = $('#mocha')
				expect(dollar(obj)).to.equal(obj)
			})
			it('doesn\'t generate multiple $ elements for the same dom element', function () {
				var obj = document.getElementById('mocha')
				var $a = dollar(obj)
				var $b = dollar(obj)
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
