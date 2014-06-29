'use strict';
/**
 * @module WP
 * @submodule TypesRequest
 * @beta
 */
var WPRequest = require( './WPRequest' );
var util = require( 'util' );

/**
 * TypesRequest extends WPRequest to handle the /taxonomies API endpoint
 *
 * @class TypesRequest
 * @constructor
 * @extends WPRequest
 * @param {Object} options A hash of options for the TypesRequest instance
 * @param {String} options.endpoint The endpoint URI for the invoking WP instance
 * @param {String} [options.username] A username for authenticating API requests
 * @param {String} [options.password] A password for authenticating API requests
 */
function TypesRequest( options ) {
	/**
	 * Configuration options for the request such as the endpoint for the invoking WP instance
	 * @property _options
	 * @type Object
	 * @private
	 * @default {}
	 */
	this._options = options || {};

	/**
	 * @property _supportedMethods
	 * @type Array
	 * @private
	 * @default [ 'head', 'get' ]
	 */
	this._supportedMethods = [ 'head', 'get' ];

	/**
	 * A hash of values to assemble into the API request path
	 *
	 * @property _path
	 * @type Object
	 * @private
	 * @default {}
	 */
	this._path = {};

	/**
	 * The URL template that will be used to assemble request URI paths
	 *
	 * @property _template
	 * @type String
	 * @private
	 * @default 'posts/types(/:type)'
	 */
	this._template = 'posts/types(/:type)';
}

// TypesRequest extends WPRequest
util.inherits( TypesRequest, WPRequest );

/**
 * Specify the name of the type to query
 *
 * @method type
 * @chainable
 * @param {String} typeName The name of the type to query
 * @return {TypesRequest} The TypesRequest instance (for chaining)
 */
TypesRequest.prototype.type = function( typeName ) {
	this._path.type = typeName;

	return this;
};

module.exports = TypesRequest;