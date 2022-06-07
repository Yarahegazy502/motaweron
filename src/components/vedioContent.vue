<template>
  <div class="container">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="transparent"
      img-width="1024"
      img-height="480"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide img-blank img-alt="Blank image" class="vedioinfo">
        <p>هي شركه رائده في مجال تصميم وتطوير المواقع الالكترونيه</p>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide img-blank img-alt="Blank image" class="vedioinfo">
        <p>
          تقدم لك الشركه حلول تساعد الشركات و المؤسسات علي رفع معدلات الدخل و النمو وتطوير
          حركه الانتاج من خلال التجاره الالكترونيه علي الاندرويد والايفون و الويندوز
          وتوظيف الذكاء الاصطناعي لتحليل البيانات
        </p>
      </b-carousel-slide>

      <b-carousel-slide img-blank img-alt="Blank image" class="vedioinfo">
        <p>
          تقدم لك الاستشارات الفنيه و البرمجيه لرواد الاعمال كما تساعدهم علي التطور السريع
          من خلال احدث طرق الذكاء الاصطناعي وتحليل البيانات
        </p>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    //   onSlideStart(slide) {
    //     this.sliding = true
    //   },
    //   onSlideEnd(slide) {
    //     this.sliding = false
    //   }
  },
};
</script>

<style scoped>
.carousel-item {
  background-color: #fff;
}

.testimonialStar {
  margin: 0 2px;
}
.carsoul-caption {
  top: 0;
}
.carousel-control-prev-icon, .carousel-control-next-icon {
    width: 0;
}
.vedioinfo{
    /* display: flex; */
    justify-content: center;
    align-items: center;
}
@media (min-width: 991) {
  #carousel-1 {
    height: 1200px;
  }
}
p{
  color: #fff;
}
p {
  font-size: 25px;
}

</style>
