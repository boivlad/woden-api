/*
 * Woden
 * Specification for Woden REST API
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.14
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Woden);
  }
}(this, function(expect, Woden) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('Voting', function() {
      beforeEach(function() {
        instance = new Woden.Voting();
      });

      it('should create an instance of Voting', function() {
        // TODO: update the code to test Voting
        expect(instance).to.be.a(Woden.Voting);
      });

      it('should have the property hash (base name: "hash")', function() {
        // TODO: update the code to test the property hash
        expect(instance).to.have.property('hash');
        // expect(instance.hash).to.be(expectedValueLiteral);
      });

      it('should have the property dueDate (base name: "dueDate")', function() {
        // TODO: update the code to test the property dueDate
        expect(instance).to.have.property('dueDate');
        // expect(instance.dueDate).to.be(expectedValueLiteral);
      });

      it('should have the property variants (base name: "variants")', function() {
        // TODO: update the code to test the property variants
        expect(instance).to.have.property('variants');
        // expect(instance.variants).to.be(expectedValueLiteral);
      });

      it('should have the property excludedUsers (base name: "excludedUsers")', function() {
        // TODO: update the code to test the property excludedUsers
        expect(instance).to.have.property('excludedUsers');
        // expect(instance.excludedUsers).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

    });
  });

}));