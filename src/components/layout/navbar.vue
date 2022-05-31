<template>
 <div>
  <b-navbar toggleable="lg" class='container navv'>
    <b-navbar-brand href="#">
    <img src="@/assets/imgs/logo.png" alt="logo">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item class="active" to="/">الرئيسيه</b-nav-item>
        <b-nav-item to="/about">من نحن</b-nav-item>
        <b-nav-item-dropdown text="خدماتنا" right>
          <b-dropdown-item href="#">Lo</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown> 
        <b-nav-item to="/Works">اعمالنا</b-nav-item>
        <b-nav-item to="/Operations">العمليات</b-nav-item>
        <b-nav-item to="/Contact">تواصل معنا</b-nav-item>
      </b-navbar-nav>     
      
    </b-collapse>
  </b-navbar>
<router-view />
   
</div>
  
</template>


<script>
export default {
  props: {
    
  }
  }
</script>


<style>
nav{
  position: fixed;
  width: 100%;
  z-index: 7;
}

img{
    width:200px
}
.navbar-nav{
    margin-right: auto;
}

.navbar ul li{
  margin: 0 7px;
  font-size: 17px;
}
.navbar-light .navbar-nav .nav-link {
    color: #000;
}
.navbar-light .navbar-nav .nav-link:hover {
  color: #FA1F1F ;
}
.navbar-light .navbar-nav .nav-link.active {
  color: #FA1F1F ;
}

</style>

