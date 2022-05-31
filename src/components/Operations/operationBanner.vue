<template>
    <div class="operationsBanner">
        <div class="overlay"></div>
        <div class="container">
        <h2>عملياتنا التنفيذية</h2>
        </div>
    </div>
</template>


<style>
.operationsBanner{
    background-image:url('../../assets/imgs/services_bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    height: 500px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
}
.operationsBanner .overlay{
    z-index: -1;
}
.operationsBanner h2{
    z-index: 2;
    color: white;
    font-size: 40px;
}

</style>