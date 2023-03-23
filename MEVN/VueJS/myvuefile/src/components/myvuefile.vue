<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <h1>This is my heading</h1>
    <form action="">
      Enter First Name :  <input type="text" class="input" />
      <br />
      <br />
      Enter Last Name :  <input type="text" class="input" />
      <br />
      <br />
      <button>Submit</button> 
    </form>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
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
