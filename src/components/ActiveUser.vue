<template>
  <div class="active-user">
    <h2>{{ name }}</h2>
    <h3>{{ age }} years</h3>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style>
.active-user {
  box-sizing: border-box;
  border: 1px solid black;
  padding: 10px;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  width: 100%;
}
</style>
