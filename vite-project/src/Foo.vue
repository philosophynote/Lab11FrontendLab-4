<template>
  <h1>Fooです</h1>
  <p>{{ hoge }}</p>
  <Input />
</template>
<script>
import Input from "./components/Input.vue";

import { mapState } from "vuex";

export default {
  components: {
    Input,
  },
  data() {},

  computed: {
    ...mapState(["hoge"]),
  },

  methods: {},
};
</script>