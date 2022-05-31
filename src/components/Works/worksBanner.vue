<template>
    <div class="worksBanner">
        <div class="overlay"></div>
        <div class="container">
        <h2>اعمالنا</h2>
        </div>
    </div>
</template>


<style>
.worksBanner{
    background-image:url('../../assets/imgs/portfolio_bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    height: 500px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
}
.worksBanner .overlay{
    z-index: -1;
}
.worksBanner h2{
    z-index: 2;
    color: white;
    font-size: 40px;
}

</style>