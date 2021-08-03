<template>
  <p>{{ pText }}</p>
</template>
<script>
export default {
  name: "HelloVue",
  props: {
    pText: {
      type: String,
      default: "",
    },
  },
};
</script>
