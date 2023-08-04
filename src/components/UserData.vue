<template>
  <div class="inputs">
    <div>
      <label for="name">Name</label>
      <input type="text" name="name" v-model="nameInput" />
    </div>
    <div>
      <label for="age">Age</label
      ><input name="age" type="number" v-model="ageInput" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nameInput: '',
      ageInput: '',
    };
  },
  watch: {
    nameInput() {
      this.$emit('value-changed', {
        name: this.nameInput,
        age: parseInt(this.ageInput),
      });
    },
    ageInput() {
      this.$emit('value-changed', {
        name: this.nameInput,
        age: parseInt(this.ageInput),
      });
    },
  },
};
</script>
<style>
.inputs {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 50px;
}
.inputs > div {
  display: flex;
  width: 250px;
  justify-content: space-between;
}
</style>
