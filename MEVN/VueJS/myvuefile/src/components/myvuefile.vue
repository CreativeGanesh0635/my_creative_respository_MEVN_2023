<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <h1>This is my heading</h1>
    <form @submit.prevent="submitForm">
      Enter First Name : <input type="text" class="input" v-model="firstName" />
      <br />
      <br />
      Enter Last Name : <input type="text" class="input" v-model="lastName" />
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      firstName: '',
      lastName: '',
    };
  },
  methods: {
    submitForm() {
      // Pass the first name and last name as props to the Success component
      this.$router.push({ path: '/success', query: { firstName: this.firstName, lastName: this.lastName } });
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  text-align: center;
}
h1 {
  color: rgb(71, 224, 135);
}
.input {
  border: 2px solid rgb(197, 196, 196);
  border-radius: 5px;
}
.container button {
  padding: 8px;
  border: 2px solid rgb(217, 217, 217);
  background-color: rgb(109 207 252);
  border-radius: 5px;
}
.container button:hover {
  padding: 8px;
  border: 2px solid rgb(217, 217, 217);
  background-color: rgb(18 168 237);
  border-radius: 5px;
  cursor: pointer;
}
</style>
