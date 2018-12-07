/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.protos.GetReviewRequest');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.protos.Review');


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
proto.protos.GetReviewRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.GetReviewRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protos.GetReviewRequest.displayName = 'proto.protos.GetReviewRequest';
}


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
proto.protos.GetReviewRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.GetReviewRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.GetReviewRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.GetReviewRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    review: (f = msg.getReview()) && proto.protos.Review.toObject(includeInstance, f)
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
 * @return {!proto.protos.GetReviewRequest}
 */
proto.protos.GetReviewRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.GetReviewRequest;
  return proto.protos.GetReviewRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.GetReviewRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.GetReviewRequest}
 */
proto.protos.GetReviewRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protos.Review;
      reader.readMessage(value,proto.protos.Review.deserializeBinaryFromReader);
      msg.setReview(value);
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
proto.protos.GetReviewRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.GetReviewRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.GetReviewRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.GetReviewRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReview();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protos.Review.serializeBinaryToWriter
    );
  }
};


/**
 * optional Review review = 1;
 * @return {?proto.protos.Review}
 */
proto.protos.GetReviewRequest.prototype.getReview = function() {
  return /** @type{?proto.protos.Review} */ (
    jspb.Message.getWrapperField(this, proto.protos.Review, 1));
};


/** @param {?proto.protos.Review|undefined} value */
proto.protos.GetReviewRequest.prototype.setReview = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.protos.GetReviewRequest.prototype.clearReview = function() {
  this.setReview(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.protos.GetReviewRequest.prototype.hasReview = function() {
  return jspb.Message.getField(this, 1) != null;
};


