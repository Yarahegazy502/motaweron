<template>
<div class="vedio">
  <div class="overlay"></div>
    <video autoplay muted loop>
      <source src="@/assets/imgs/vedio.mp4">
    </video>
    <div class="vedioContent">
      <div class=" cc">
                <p>هي شركه رائده في مجال تصميم وتطوير المواقع الالكترونيه</p>
       <!-- <vedioContent/> -->
      </div>
    </div>
</div>
</template>

<script>
// import vedioContent from '@/components/vedioContent.vue'
// export default {
//     components: {
//         vedioContent,
//     },
// };
</script>





<style>
.cc{
  z-index: 2;
  font-size: 25px;
  color: #fff;
  text-align: center;
}
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
.vedioContent{
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%,-50%);
}
</style>