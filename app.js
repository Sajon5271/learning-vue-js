const app = Vue.createApp({
  data() {
    return {
      goalsInput: '',
      goals: [],
      demoObject: { name: 'Sajon', age: 25, passion: 'Coding' },
    };
  },
  methods: {
    addGoal() {
      if (!this.goalsInput) return;
      this.goals.push(this.goalsInput);
      this.goalsInput = '';
    },
    removeGoal(idx) {
      // this.goals = this.goals.filter((el, i) => i !== idx);
      this.goals.splice(idx, 1);
    },
  },
});

app.mount('#user-goals');
