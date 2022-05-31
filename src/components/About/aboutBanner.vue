<template>
    <div class="aboutBanner">
        <div class="overlay"></div>
        <div class="container">
        <h2>من نحن</h2>
        </div>
    </div>
</template>


<style>
.aboutBanner{
    background-image:url('../../assets/imgs/about_bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    height: 500px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
}
.aboutBanner .overlay{
    z-index: -1;
}
.aboutBanner h2{
    z-index: 2;
    color: white;
    font-size: 40px;
}

</style>