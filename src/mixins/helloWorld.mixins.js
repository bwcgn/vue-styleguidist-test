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
      default: null
    }
  }
};
