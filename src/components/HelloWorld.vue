<template>
  <div>
    <h1>This is a test</h1>
    <div>{{ output }}</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      output: 0
    };
  },
  mounted() {
    console.log(this.test());
    this.output = this.test();
  },
  methods: {

    /** Some test async function
     * @event something
     * @type {Event}
     */
    test: async function() {
      await this.$nextTick();
      this.output = 1;
    }
  }
};
</script>
<style>

</style>
