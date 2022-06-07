<template>
  <div>
    <div class="container my-5">
      <div class="row g-0 py-4">
        <div class="col-2 ">
          <div class="links">
           
            <li class="active"><a href="">تعريف</a></li>
            <li><a href="">الرؤيه</a></li>
            <li><a href="">الرساله</a></li>
            <li><a href="">الاستراتجيه</a></li>
        
          </div>
        </div>
        <div class="col-1">
          <div class="line"></div>
        </div>
        <div class="col-9 d-flex align-items-center">
          <div class="aboutContent">
            <p class="intro">
              تقدم لك الشركه حلول تساعد الشركات و المؤسسات علي رفع معدلات الدخل و النمو
              وتطوير حركه الانتاج من خلال التجاره الالكترونيه علي الاندرويد والايفون و
              الويندوز وتوظيف الذكاء الاصطناعي لتحليل البيانات
            </p>

            <!-- <p class="vission">هي شركه رائده في مجال تصميم وتطوير المواقع الالكترونيه</p> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.line {
  width: 2px;
  height: 100%;
  background-color: #777;
}
.aboutContent {
  overflow: hidden;
}
.links li{
  list-style-type: none;
  padding: 10px 0;
  
}

.links a{
text-decoration: none;
color: #33333380;
}
.links li.active{
  border-left: 4px solid #FA1F1F;
}
.links li.active a{
  color: #333333;
}
.aboutContent p{
  color: #222;
}
</style>
