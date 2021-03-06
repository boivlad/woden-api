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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Woden) {
      root.Woden = {};
    }
    root.Woden.RevokePermissions = factory(root.Woden.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The RevokePermissions model module.
   * @module model/RevokePermissions
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>RevokePermissions</code>.
   * @alias module:model/RevokePermissions
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>RevokePermissions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RevokePermissions} obj Optional instance to populate.
   * @return {module:model/RevokePermissions} The populated <code>RevokePermissions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('hash'))
        obj.hash = ApiClient.convertToType(data['hash'], 'String');
      if (data.hasOwnProperty('permission'))
        obj.permission = ApiClient.convertToType(data['permission'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * @member {String} hash
   */
  exports.prototype.hash = undefined;

  /**
   * @member {module:model/RevokePermissions.PermissionEnum} permission
   */
  exports.prototype.permission = undefined;


  /**
   * Allowed values for the <code>permission</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PermissionEnum = {
    /**
     * value: "unwrite"
     * @const
     */
    unwrite: "unwrite",

    /**
     * value: "unread"
     * @const
     */
    unread: "unread"
  };

  return exports;

}));
