<template>
  <div>
    <h1>HelloWorld2</h1>
    <div>{{ testProp }} </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld2",
  props: {
    /**
     *  this is a comment for the test prop in
     *  Helloworld2.vue!
     */
    testProp: {
      type: String,
      required: false,
      default: null
    },
    /**
     *  this is a comment for the test prop in
     *  Helloworld2.vue!
     */
    testProp1: {
      type: String,
      required: false,
      default: null
    }
  }
};
</script>
<style>

</style>
