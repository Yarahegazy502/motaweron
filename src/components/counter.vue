<template>
    <div class="counter">
        <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3 g-lg-3 ">
            <div class="col" v-for="count in counters" :key="count.num">
                <div class="counterContent">
                    <h4>{{count.num}}</h4>
                    <hr>
                    <p>{{count.desc}}</p>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
  data:()=>({
      counters:[
          {num:5,desc:'دول نخدمها'},
          {num:39,desc:'موقع الكتروني'},
          {num:27,desc:'تطبيق اندرويد'},
          {num:27,desc:'تطبيق ايفون'},
          {num:45,desc:'عملاء سعداء'},
      ]
  })
}
    
</script>

<style>
.counter{
    background-color: #1a1a1a;
    text-align: center;
    padding: 60px 0;
}
.counter h4{
    color: #fff;
    font-size: 70px;
}
.counter hr{
    color: #fff;
    padding: 1px;
}
.counter p{
    color: #777;
    font-size: 20px;
}

</style>