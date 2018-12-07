/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.protos.Product');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.protos.ProductImage');
goog.require('proto.protos.ProductLink');
goog.require('proto.protos.Timestamps');


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
proto.protos.Product = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protos.Product.repeatedFields_, null);
};
goog.inherits(proto.protos.Product, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protos.Product.displayName = 'proto.protos.Product';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protos.Product.repeatedFields_ = [5,6];



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
proto.protos.Product.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.Product.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.Product} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.Product.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    timestamps: (f = msg.getTimestamps()) && proto.protos.Timestamps.toObject(includeInstance, f),
    title: jspb.Message.getFieldWithDefault(msg, 3, ""),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    imagesList: jspb.Message.toObjectList(msg.getImagesList(),
    proto.protos.ProductImage.toObject, includeInstance),
    linksList: jspb.Message.toObjectList(msg.getLinksList(),
    proto.protos.ProductLink.toObject, includeInstance)
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
 * @return {!proto.protos.Product}
 */
proto.protos.Product.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.Product;
  return proto.protos.Product.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.Product} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.Product}
 */
proto.protos.Product.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.protos.Timestamps;
      reader.readMessage(value,proto.protos.Timestamps.deserializeBinaryFromReader);
      msg.setTimestamps(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = new proto.protos.ProductImage;
      reader.readMessage(value,proto.protos.ProductImage.deserializeBinaryFromReader);
      msg.addImages(value);
      break;
    case 6:
      var value = new proto.protos.ProductLink;
      reader.readMessage(value,proto.protos.ProductLink.deserializeBinaryFromReader);
      msg.addLinks(value);
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
proto.protos.Product.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.Product.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.Product} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.Product.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTimestamps();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.protos.Timestamps.serializeBinaryToWriter
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getImagesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.protos.ProductImage.serializeBinaryToWriter
    );
  }
  f = message.getLinksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.protos.ProductLink.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.protos.Product.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.protos.Product.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Timestamps timestamps = 2;
 * @return {?proto.protos.Timestamps}
 */
proto.protos.Product.prototype.getTimestamps = function() {
  return /** @type{?proto.protos.Timestamps} */ (
    jspb.Message.getWrapperField(this, proto.protos.Timestamps, 2));
};


/** @param {?proto.protos.Timestamps|undefined} value */
proto.protos.Product.prototype.setTimestamps = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.protos.Product.prototype.clearTimestamps = function() {
  this.setTimestamps(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.protos.Product.prototype.hasTimestamps = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string title = 3;
 * @return {string}
 */
proto.protos.Product.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.protos.Product.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.protos.Product.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.protos.Product.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated ProductImage images = 5;
 * @return {!Array<!proto.protos.ProductImage>}
 */
proto.protos.Product.prototype.getImagesList = function() {
  return /** @type{!Array<!proto.protos.ProductImage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protos.ProductImage, 5));
};


/** @param {!Array<!proto.protos.ProductImage>} value */
proto.protos.Product.prototype.setImagesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.protos.ProductImage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protos.ProductImage}
 */
proto.protos.Product.prototype.addImages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.protos.ProductImage, opt_index);
};


proto.protos.Product.prototype.clearImagesList = function() {
  this.setImagesList([]);
};


/**
 * repeated ProductLink links = 6;
 * @return {!Array<!proto.protos.ProductLink>}
 */
proto.protos.Product.prototype.getLinksList = function() {
  return /** @type{!Array<!proto.protos.ProductLink>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protos.ProductLink, 6));
};


/** @param {!Array<!proto.protos.ProductLink>} value */
proto.protos.Product.prototype.setLinksList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.protos.ProductLink=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protos.ProductLink}
 */
proto.protos.Product.prototype.addLinks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.protos.ProductLink, opt_index);
};


proto.protos.Product.prototype.clearLinksList = function() {
  this.setLinksList([]);
};


