<template>
  <input type="text" v-model="inputText" />
  <button @click="change">change</button>
</template>
<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      inputText: "",
    };
  },
  methods: {
    ...mapMutations(["changeHoge"]),
    change() {
      this.changeHoge(this.inputText);
    },
  },
};
</script>