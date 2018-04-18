<template>
  <div>
    <h1>BeforeComponent</h1>
    <div>{{ testProp }} </div>
  </div>
</template>

<script>
export default {
  name: "BeforeComponent",
  props: {
    /**
     *  this is a comment for the test prop in
     *  BeforeComponent.vue!
     */
    testProp: {
      type: String,
      required: false,
      default: null
    }
  }
};
</script>
<style>

</style>
