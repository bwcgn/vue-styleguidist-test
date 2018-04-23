/**
 * @mixin
 */
export default {
  name: "HelloWorldMixins",
  props: {
    /**
     *  this is a comment for the test prop in
     *  helloWorld.mixins.js!
     */
    testProp: {
      type: String,
      required: false,
      default: "HelloWorldMixins - testProp1"
    },
    /**
     *  this is a comment for the mixinProp in
     *  helloWorld.mixins.js!
     */
    mixinProp: {
      type: String,
      required: false,
      default: "HelloWorldMixins - mixinProp"
    }
  }
};
