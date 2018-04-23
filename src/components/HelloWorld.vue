<template>
  <div>
    <h1>HelloWorld - BE AWARE, I do include the mixin!</h1>
    <div>testProp: {{ testProp }} </div>
    <div>testProp1: {{ testProp1 }} </div>
    <div>mixinProp: {{ mixinProp }} </div>
  </div>
</template>

<script>
import HelloWorldMixins from '../mixins/helloWorld.mixins'
export default {
  name: "HelloWorld",
  mixins: [HelloWorldMixins],
  props: {
    /**
     *  this is a comment for the test prop in
     *  Helloworld.vue!
     */
    testProp: {
      type: String,
      required: false,
      default: "HelloWorld - testProp"
    },
    /**
     *  this is a comment for the test prop in
     *  Helloworld.vue!
     */
    testProp1: {
      type: String,
      required: false,
      default: "HelloWorld - testProp1"
    }
  }
};
</script>
<style>

</style>
