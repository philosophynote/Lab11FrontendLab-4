<template>
  <div>
    <router-link to="/">home</router-link>
    <router-link to="/foo">foo</router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    console.log(this.$router);
  },
};
</script>
<style scoped>
a + a {
  margin-left: 16px;
}
</style>