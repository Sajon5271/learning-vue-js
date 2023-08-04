<template>
  <div>
    <active-user
      v-if="user.name && user.age"
      :name="user.name"
      :age="user.age"></active-user>
    <user-data @value-changed="changeUser"></user-data>
  </div>
</template>
<script>
export default {
  data() {
    return { user: { name: '', age: 0 } };
  },
  methods: {
    changeUser(user) {
      this.user = user;
    },
  },
};
</script>
<style></style>
