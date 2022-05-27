<template>
    <section class="works">
        <div class="container">
            <h2>اعمالنا</h2>
            <p class="text-center ">بعض من الاعمال والتطبيقات التي قمنا بها</p>
        <div class="row g-0">
            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="worksDetails">
                    <div class="worksContent">
                    <div class="workTitle"><h5>هم هم</h5></div>
                    <img src="@/assets/imgs/3.png" alt="">
                </div>
                <div class="watch">
                    <div class="watchMore">
                        <a href="#" target="_blank">مشاهده المزيد</a>
                    </div>
                </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="worksDetails">
                    <div class="worksContent">
                    <div class="workTitle"><h5>المؤسسه العامه للتامينات الاجتماعيه</h5></div>
                    <img src="@/assets/imgs/18.png" alt="">
                </div>
                <div class="watch">
                    <div class="watchMore">
                        <a href="#" target="_blank">مشاهده المزيد</a>
                    </div>
                </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="worksDetails">
                    <div class="worksContent">
                    <div class="workTitle"><h5>قوات امن المنشات</h5></div>
                    <img src="@/assets/imgs/20.jpg" alt="">
                </div>
                <div class="watch">
                    <div class="watchMore">
                        <a href="#" target="_blank">مشاهده المزيد</a>
                    </div>
                </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="worksDetails">
                    <div class="worksContent">
                    <div class="workTitle"><h5>
</h5></div>
                    <img src="@/assets/imgs/19.png" alt="">
                </div>
                <div class="watch">
                    <div class="watchMore">
                        <a href="#" target="_blank">مشاهده المزيد</a>
                    </div>
                </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="worksDetails">
                    <div class="worksContent">
                    <div class="workTitle"><h5>شيل كوم</h5></div>
                    <img src="@/assets/imgs/8.png" alt="">
                </div>
                <div class="watch">
                    <div class="watchMore">
                        <a href="#" target="_blank">مشاهده المزيد</a>
                    </div>
                </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="worksDetails">
                    <div class="worksContent">
                    <div class="workTitle"><h5>تدللي</h5></div>
                    <img src="@/assets/imgs/15.png" alt="">
                </div>
                <div class="watch">
                    <div class="watchMore">
                        <a href="#" target="_blank">مشاهده المزيد</a>
                    </div>
                </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="worksDetails">
                    <div class="worksContent">
                    <div class="workTitle"><h5>امداد</h5></div>
                    <img src="@/assets/imgs/2.png" alt="">
                </div>
                <div class="watch">
                    <div class="watchMore">
                        <a href="#" target="_blank">مشاهده المزيد</a>
                    </div>
                </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="worksDetails">
                    <div class="worksContent">
                    <div class="workTitle"><h5>ثقه</h5></div>
                    <img src="@/assets/imgs/unnamed.webp" alt="">
                </div>
                <div class="watch">
                    <div class="watchMore">
                        <a href="#" target="_blank">مشاهده المزيد</a>
                    </div>
                </div>
                </div>
            </div>
        </div>    
        </div>    
    </section>
</template>

<script>
export default{
    data:()=>({
        
        info:[
            {title:'هم هم',src:'@/assets/imgs/3.png'},
            {title:'المؤسسه العامه للتامينات الاجتماعيه',src:'@/assets/imgs/18.png'},
            {title:'قوات امن المنشات',src:'@/assets/imgs/20.jpg'},
            {title:'وزاره الصحه',src:'@/assets/imgs/19.png'},
            {title:'شيل كوم',src:'@/assets/imgs/8.png'},
            {title:'تدللي',src:'@/assets/imgs/15.png'},
            {title:'امداد',src:'@/assets/imgs/2.png'},
            {title:'ثقه',src:'@/assets/imgs/unnamed.webp'},
        ]
    })
}

</script>


<style>
.works{
padding: 60px 0;
}
.works img{
    width: 100%;
    transition: all .4s ease-in-out;
}
.works p{
    
    font-size: 20px;
    margin-bottom: 40px;

}
.works .worksContent{
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: all .3s ease-in-out;
    position: relative;
    overflow: hidden;
}
.works .worksDetails:hover {
    background-color: #f8f9fa;
}
.works .worksDetails:hover img{
transform: scale(.9);
}
.works .worksDetails:hover .workTitle{
    transform: translateY(0px);
    /* transition: all .3s ease-in-out; */
}
.works .worksDetails:hover .watch{
    display: block;
}
.works .worksContent .workTitle{
    background-color: #234F8E;
    font-size: 17px;
    text-align: center;
    padding: 10px ;
    position: absolute;
    width: 100%;
    color: #fff;
    top:0;
    z-index: 2;
    transform: translateY(-129px);
    transition: all .3s ease-in-out;
}
.worksDetails{
    position: relative;
    transition: all .3s ease-in-out;
    margin: 10px 15px 10px 15px;
}
.watchMore {
    width: 80%;
    height: 60%;
    background-color: brown;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    /* visibility: hidden; */
    transition: all .4s ease-in-out;
    border: 2px solid #fff;
    background-color: #6c757d82;
    border-radius: 5px;
}
.watch{
    display: none;
    transition: all .3s ease-in-out;
}
.watchMore a{
color: #fff;
text-decoration: none;
}

</style>