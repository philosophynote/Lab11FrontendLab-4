<template>
  <h1>{{ hoge }}</h1>
  <Input />
</template>
<script>
import Input from "./components/Input.vue";

import { mapState, mapMutations } from "vuex";

export default {
  components: {
    Input,
  },
  computed: {
    ...mapState(["hoge"]),
  },
};
</script>