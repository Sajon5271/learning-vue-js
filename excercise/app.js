const app = Vue.createApp({
  data: () => {
    return {
      myName: 'Sirajis Salekin Sajon',
      myAge: 25,
      dogImageUrl: 'https://picsum.photos/id/237/200/300',
      inputText: 'Hello',
    };
  },
  methods: {
    ageInFive() {
      return this.myAge + 5;
    },
    randNum() {
      return Math.random();
    },
  },
});

app.mount('#assignment');
