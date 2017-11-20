// var assert = require('chai').assert;
var expect = require('chai').expect;
var mapTree = require('../src/reporter/file/mapFileTree')
  // , foo = 'bar'
  // , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

// describe('foo', function () {
// 	describe('whatevs', function(){
// 		it('should be an integer (but not really)', function(){
// 			expect(foo).to.be.a('string');
// 		}),
// 		it('should be equal to "bar"', function(){
// 			expect(foo).to.equal('bar');
// 		}),
// 		it('should have a length of 3', function(){
// 			expect(foo).to.have.lengthOf(3);
// 		})
// 	})
// })

describe("displayFileTree", function(){
	describe("#object", function(){
		it("should have member 'tree'", function(){
			expect(mapTree).to.have.valueOf('tree');
		}),
		it("tree should have member 'directories'", function(){
			expect(mapTree.tree).to.have.valueOf('directories');
		})
	})
})
