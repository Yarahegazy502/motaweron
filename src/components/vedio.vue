<template>
<div class="vedio">
  <div class="overlay"></div>
    <video autoplay muted loop>
      <source src="@/assets/imgs/vedio.mp4">
    </video>
</div>
</template>




<style>
video{
  width: 100%;
}
.vedio{
  position: relative;
}
.overlay{
  background-color: rgba(0,0,0,.5);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
}

</style>