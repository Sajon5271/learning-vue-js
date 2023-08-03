const app = Vue.createApp({
  data: () => {
    return {
      inputText: '',
      enterText: '',
    };
  },
  methods: {
    showAlert() {
      alert('Shown');
    },
    keyDownEvent(ev) {
      this.inputText = ev.target.value;
    },
    enterPressed(ev) {
      this.enterText = ev.target.value;
    },
  },
});

app.mount('#assignment');
