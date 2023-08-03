const app = Vue.createApp({
  data() {
    return {
      inputA: '',
      inputB: '',
      countInputAChange: 0,
    };
  },
  watch: {
    inputA() {
      this.countInputAChange++;
    },
  },
  computed: {
    addedValue() {
      return parseFloat(this.inputA || '0') + parseFloat(this.inputB || '0');
    },
  },
  methods: {},
});

// Since vue mounts to only one selected object, it is better to use id
app.mount('#vueContext');
