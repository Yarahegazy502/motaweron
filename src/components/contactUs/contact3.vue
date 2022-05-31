<template>
    <div class="contact3">
        <div class="overlay"></div>
        <div class="container">
            <h3 class="contactHeader">كيف تصل الينا</h3>
            <div class="row g-5">
            <div class="col-md-6">
                <contactt/>
            </div>
            <div class="col-md-6">
                <div class="map2">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3372.755306294045!2d31.008850984917927!3d30.566830281695253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7d7340a99875d%3A0x40f09d48c0ee471c!2sendpoint%20developers!5e1!3m2!1sar!2seg!4v1574345210390!5m2!1sar!2seg" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen=""></iframe>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
  import contactt from '@/components/contactt.vue'

  export default {
  components: {
    contactt,
  }

  }
</script>

<style>

.contact3{
 background-image:url('../../assets/imgs/map.jpg')   ;
 background-repeat: no-repeat;
 background-size: cover;
 padding:70px 0;
 position: relative;
 z-index: 2;
}
.contact3 .overlay{
    z-index: -1;
}
.contact3 .contactHeader{
    text-align: center;
    color: white;
    margin-bottom: 70px;
    font-size: 35px;
}
.map2{
    border: 13px solid #fa1f1f;
    border-radius: 50%;
    overflow: hidden;
    z-index: 2;
}
</style>