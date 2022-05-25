<template>
<section class="company">
  <h2 class="text-center py-5">عن الشركه</h2>
  <div class="container">
    <div class="row g-0">
      <div class="col-md-6">

        <div class="details">
          <div class="companyIconAndTitle">
          <h5><font-awesome-icon icon="coffee" class="companyIcon" /> | عن الشركه</h5>
          </div>
          <p>التقنيه هي شركه متخصصه في برمجه تطبيقات الجوال و الموبايل علي الهواتف الذكيه والاجهزه اللوحيه لانظمه الاندرويد والايفون و الويندوز'
          </p>
        </div>

        <div class="details">
          <div class="companyIconAndTitle">
          <h5><font-awesome-icon icon="coffee" class="companyIcon" /> | الرؤيه</h5>
          </div>
          <p>تقدم لك الشركه حلول تساعد الشركات و المؤسسات علي رفع معدلات الدخل و النمو وتطوير حركه الانتاج من خلال التجاره الالكترونيه علي الاندرويد والايفون و الويندوز وتوظيف الذكاء الاصطناعي لتحليل البيانات
          </p>
        </div>

        <div class="details">
          <div class="companyIconAndTitle">
          <h5><font-awesome-icon icon="coffee" class="companyIcon" /> | رسالتنا</h5>
          </div>
          <p>التقنيه تقدم لك الاستشارات الفنيه و البرمجيه لرواد الاعمال كما تساعدهم علي التطور السريع من خلال احدث طرق الذكاء الاصطناعي وتحليل البيانات
          </p>
        </div>

      </div>
      <div class="col-md-6">
        <div class="lampa">
          <img src="@/assets/imgs/about-img.png" alt="about img">
        </div>
      </div>

    </div>
  </div>
</section>

</template>

<script>

// import companyDetails from "../companyDetails";
export default {
 data(){
     return{
      // companyDetails:companyDetails
     }
}
}
</script>


<style>
.lampa{
    display: flex;
    justify-content: center;
    align-items: center;
}
.lampa img{
    width: 65%;
    height:470px;
    margin:auto

}
.companyIconAndTitle{
  display:flex;
  z-index:2
}
.details h5{
  font-size:18px;
  color:#FA1F1F;
}
.details p{
  font-size: 17px;
    line-height: 1.7;
    z-index:2;
}
.details{
  background:#f0f0f069;
  padding:15px;
  position:relative;
  z-index:1;
  margin:25px 0
}
.details:before{
  content:"";
  width:100%;
  background:#000000b0;
  height:0%;
  top:0;
  right:0;
  position:absolute;
  transition:all .3s ease;
  z-index:-1;
}

.details:hover::before{
  height:100%;
}
.details:hover p{
  color:#fff;

}
</style>