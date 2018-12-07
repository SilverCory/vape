/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.protos.SearchResponse');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.protos.Product');
goog.require('proto.protos.Review');
goog.require('proto.protos.User');


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protos.SearchResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protos.SearchResponse.repeatedFields_, null);
};
goog.inherits(proto.protos.SearchResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protos.SearchResponse.displayName = 'proto.protos.SearchResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protos.SearchResponse.repeatedFields_ = [1,2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protos.SearchResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.SearchResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.SearchResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.SearchResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    usersList: jspb.Message.toObjectList(msg.getUsersList(),
    proto.protos.User.toObject, includeInstance),
    reviewsList: jspb.Message.toObjectList(msg.getReviewsList(),
    proto.protos.Review.toObject, includeInstance),
    productsList: jspb.Message.toObjectList(msg.getProductsList(),
    proto.protos.Product.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protos.SearchResponse}
 */
proto.protos.SearchResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.SearchResponse;
  return proto.protos.SearchResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.SearchResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.SearchResponse}
 */
proto.protos.SearchResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protos.User;
      reader.readMessage(value,proto.protos.User.deserializeBinaryFromReader);
      msg.addUsers(value);
      break;
    case 2:
      var value = new proto.protos.Review;
      reader.readMessage(value,proto.protos.Review.deserializeBinaryFromReader);
      msg.addReviews(value);
      break;
    case 3:
      var value = new proto.protos.Product;
      reader.readMessage(value,proto.protos.Product.deserializeBinaryFromReader);
      msg.addProducts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protos.SearchResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.SearchResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.SearchResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.SearchResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.protos.User.serializeBinaryToWriter
    );
  }
  f = message.getReviewsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.protos.Review.serializeBinaryToWriter
    );
  }
  f = message.getProductsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.protos.Product.serializeBinaryToWriter
    );
  }
};


/**
 * repeated User users = 1;
 * @return {!Array<!proto.protos.User>}
 */
proto.protos.SearchResponse.prototype.getUsersList = function() {
  return /** @type{!Array<!proto.protos.User>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protos.User, 1));
};


/** @param {!Array<!proto.protos.User>} value */
proto.protos.SearchResponse.prototype.setUsersList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.protos.User=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protos.User}
 */
proto.protos.SearchResponse.prototype.addUsers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.protos.User, opt_index);
};


proto.protos.SearchResponse.prototype.clearUsersList = function() {
  this.setUsersList([]);
};


/**
 * repeated Review reviews = 2;
 * @return {!Array<!proto.protos.Review>}
 */
proto.protos.SearchResponse.prototype.getReviewsList = function() {
  return /** @type{!Array<!proto.protos.Review>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protos.Review, 2));
};


/** @param {!Array<!proto.protos.Review>} value */
proto.protos.SearchResponse.prototype.setReviewsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.protos.Review=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protos.Review}
 */
proto.protos.SearchResponse.prototype.addReviews = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.protos.Review, opt_index);
};


proto.protos.SearchResponse.prototype.clearReviewsList = function() {
  this.setReviewsList([]);
};


/**
 * repeated Product products = 3;
 * @return {!Array<!proto.protos.Product>}
 */
proto.protos.SearchResponse.prototype.getProductsList = function() {
  return /** @type{!Array<!proto.protos.Product>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protos.Product, 3));
};


/** @param {!Array<!proto.protos.Product>} value */
proto.protos.SearchResponse.prototype.setProductsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.protos.Product=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protos.Product}
 */
proto.protos.SearchResponse.prototype.addProducts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.protos.Product, opt_index);
};


proto.protos.SearchResponse.prototype.clearProductsList = function() {
  this.setProductsList([]);
};


