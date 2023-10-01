<template>
    <div id="app">
      <nav class="nav">
                  <div class="nav-main">
                      <ul class="nav-links">
                          <li class="nav-link"><a href=""><router-link to="/">Home</router-link></a></li>
                          <li class="nav-link"><a href=""><router-link to="/about">About</router-link></a></li>
                          <li class="nav-link"><a href=""><router-link to="/ProductView">Product Catlog</router-link></a></li>
                      </ul>
                  </div>
                     
                  <div class="cta">
                      <button class="btn btn-secondary"><router-link to="/LoginView">LOG IN</router-link></button>
                      <button class="btn btn-primary"><router-link to="/RegisterView">Register</router-link></button>
                  </div>
              </nav>
              <router-view/>
    </div>
  </template>

  <script>
  export default{
    name: 'NavBar',
  }
  </script>

  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Flow+Circular&family=Manrope:wght@400;800&display=swap');

@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css");
:root{
    --white: rgb(253, 253, 253);
    --black:rgb(38, 38, 38);
    --light-black:rgba(80, 80, 80, 0.201);
    --grey:rgba(80, 80, 80, 0.744);
}
*{
    font-family: 'Manrope', sans-serif !important;
    box-sizing: border-box;
    margin:0;
    padding:0;
    font-size:15px;
}
body{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
nav{
    display:flex;
    background-color: rgb(253, 253, 253);
    padding:16px 32px;
    border-bottom:0.1px solid rgb(225, 225, 225);
    justify-content:space-between;
    align-items:center;
}
.nav-main{
    display:flex;
    gap:32px;
}
.logo{
    font-size:16px;
    text-transform: uppercase;
    font-weight:bold;
    letter-spacing: 4px;
}
.logo span{
    color:rgb(169, 185, 185);
}
.nav-links{
    display:flex;
    gap: 40px;
    list-style: none;
}
a{
    text-decoration: none;
    color:rgb(38, 38, 38);
    letter-spacing: -0.5px;
    font-weight:200;
}
a:hover{
    color:rgb(122, 120, 120);
    transition: all 0.5s ease;
}
.nav-link{
    text-decoration: none;
}

.dropdown{
    cursor:default;
}
.dropdown ul{
    display:none;
    background-color: rgb(251, 251, 251);
    padding:16px;
    list-style: none;
    transition: all 15s ease;

}
.dropdown ul li a{
    color:var(--grey);
}
.dropdown ul li a:hover{
    color:var(--black);
}
.dropdown ul li{
    margin:8px;
}

.dropdown:hover>ul{
    display:list-item;
    position:absolute;
    list-style: none;
    transition: all 0.5s ease;
}

.btn{
    padding:8px 16px;
    border-radius:50px;
    border:none;
    
}

.btn-primary{
    color: var(--white);
    margin-left: 8px;
    background: white;
    border: 1px solid #e1d8d8;
}

.btn-secondary{
    background-color:var(--white);
    color:var(--black);
    border:0.1px solid rgb(225, 225, 225);
}
.btn-primary:hover, .btn-secondary:hover{
    background-color:var(--light-black);
    color:var(--black);
    transition:all 0.5s ease;
}
.nav-mobile{
  display:none;
  background-color:var(--light-black);
  padding:48px;
  list-style: none;
  transition: all 15s ease;
}
.menu{
  display:none;
}

</style>
