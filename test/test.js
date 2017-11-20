// var assert = require('assert');
var assert = require('chai').assert;
var expect = require('chai').expect
  , foo = 'bar'
  , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

describe('foo', function () {
	describe('whatevs', function(){
		it('should be an integer (but not really)', function(){
			expect(foo).to.be.a('string');
		}),
		it('should be equal to "bar"', function(){
			expect(foo).to.equal('bar');
		}),
		it('should have a length of 3', function(){
			expect(foo).to.have.lengthOf(3);
		})
	})
})

describe('beverages', function(){
	describe('more whatevs', function(){
		it('should of have a length of 3', function(){
			expect(beverages.tea).to.have.lengthOf(3)
		}),
		it('should have a lj;jklja of ', function(){
			expect(beverages).to.have.valueOf('tea');
		})
	})
})
// assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea');
