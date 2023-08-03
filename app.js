const app = Vue.createApp({
  data: () => {
    return {
      textToShow: 'This data templating is almost exactly like Angular',
      arrayOfString: ['My', 'Name', 'is', 'Sajon'],
      bindLink: 'https://vuejs.org',
      inputText: '',
      htmlCode:
        '<div style="color:red; border: 1px solid black; padding: 5px">This is html sent from VueApp</div>',
      checkIfFnWorks: () => {
        return 'This method on data works';
      },
    };
  },
  methods: {
    fnInMethod: () => {
      return 'This method on methods also works';
    },
    changeArray() {
      this.arrayOfString.push('Adding...');
    },

    changeText(ev) {
      this.inputText = ev.target.value;
    },

    enterEventText(){
      this.inputText = 'Enter was pressed'
    }
  },
});
app.mount('#vueContext');
