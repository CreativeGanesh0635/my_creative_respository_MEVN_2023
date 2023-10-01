<template>
  <div class="LoginView_container">
    <form action="" class="Form_container">
      <label for="uname"><b>Username: </b></label>
      <input type="text" placeholder="Enter Username" name="uname" required /> <br> <br>

      <label for="psw"><b>Password: </b></label>
      <input type="password" placeholder="Enter Password" name="psw" required /> <br> <br>

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginView",
};
</script>

<style scoped>
.Form_container{
    border: 1px solid rgb(158, 155, 155);
    width: 17rem;
    height: 43vh;
    margin: auto;
    padding: 51px;
    border-radius: 16px;
    line-height: 34px;
    font-size: 18px;
}

.Form_container label{
    font-family: cursive;
}
.Form_container input{
    padding: 3px;
}
.Form_container button{
    padding: 11px;
    border-radius: 26px;
    width: 91px;
    border: 1px solid gray;
    cursor: pointer;
}
.Form_container button:hover{
    cursor: pointer;
    background-color: bisque;
    transition: 1s;
}
</style>
