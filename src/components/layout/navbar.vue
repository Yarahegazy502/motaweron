<template>
  <div class="">
    <b-navbar toggleable="lg" class="container navv">
      <b-navbar-brand href="#">
        <img src="@/assets/imgs/logo.png" alt="logo" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item class="active" to="/">الرئيسيه</b-nav-item>
          <b-nav-item to="/about">من نحن</b-nav-item>
          <b-nav-item-dropdown text="خدماتنا" right>
            <div>
              <div class="row g-0">
                <!-- android -->
                <div class="col-md-4">
                  <div class="dropdown2">
                    <h5>تطبيقات الهاتف
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-caret-down-fill dropIcon"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                        />
                      </svg>
                    </h5>
                    <hr />
                    <li><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fa1f1f" class="bi bi-phone" viewBox="0 0 16 16">
  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg> تطوير تطبيقات الاندرويد </a></li>
                    <li><a href=""> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fa1f1f" class="bi bi-phone" viewBox="0 0 16 16">
  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg>دعم أنظمة المكتبات الحديثة (كوها- ديسبيس)</a></li>
                    <li><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fa1f1f" class="bi bi-phone" viewBox="0 0 16 16">
  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg>الفهرسة والعمليات الفنية للمكتبات</a></li>
                    <li><a href=""> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fa1f1f" class="bi bi-phone" viewBox="0 0 16 16">
  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg>تطوير تطبيقات الايفون </a></li>
                    <li><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fa1f1f" class="bi bi-phone" viewBox="0 0 16 16">
  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg>تحديث التطبيقات </a></li>
                    <li><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fa1f1f" class="bi bi-phone" viewBox="0 0 16 16">
  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg> تصميم التطبيقات</a></li>
                  </div>
                </div>

                <!-- web -->
                <div class="col-md-4">
                  <div class="dropdown2">
                    <h5>
                      مواقع الويب
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-caret-down-fill dropIcon"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                        />
                      </svg>
                    </h5>
                    <hr />
                    <li><a href=""> تصميم مواقع الويب</a></li>
                    <li><a href="">تطوير المواقع PHP</a></li>
                    <li><a href="">دعم فني</a></li>
                  </div>
                  <!-- mange company -->
                  <div class="dropdown2">
                    <h5>نظام اداره الشركات
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-caret-down-fill dropIcon"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                        />
                      </svg>
                    </h5>
                    <hr />
                    <li><a href=""> برنامج لاداره المنتجات </a></li>
                    <li><a href=""> برنامج لاداره الموارد</a></li>
                    <li><a href=""> نظام اداره الشركات</a></li>
                  </div>
                </div>

                <!-- graphic -->
                <div class="col-md-4">
                  <div class="dropdown2">
                    <h5>الجرافيك
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-caret-down-fill dropIcon"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                        />
                      </svg>
                    </h5>
                    <hr />
                    <li><a href="">تصميم الصور</a></li>
                    <li><a href="">الفيديو جرافيك</a></li>
                    <li><a href=""> تصميم شعارات الشركات</a></li>
                  </div>

                  <!--  -->
                  <div class="dropdown2">
                    <h5>نظام المحاسبه الماليه
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-caret-down-fill dropIcon"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                        />
                      </svg>
                    </h5>
                    <hr />
                    <li><a href=""> اداره الميزانيه</a></li>
                    <li><a href=""> نظام المحاسبه الماليه</a></li>
                  </div>
                </div>
              </div>
            </div>
          </b-nav-item-dropdown>
          <b-nav-item to="/Works">اعمالنا</b-nav-item>
          <b-nav-item to="/Operations">العمليات</b-nav-item>
          <b-nav-item to="/Contact">تواصل معنا</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>
export default {
  props: {},
};
</script>

<style>
.navbar {
  position: fixed;
  width: 100%;
  z-index: 7;
}

img {
  width: 200px;
}
.navbar-nav {
  margin-right: auto;
}

.navbar ul li {
  margin: 0 7px;
  font-size: 17px;
}
.navbar-light .navbar-nav .nav-link {
  color: #000;
}
.navbar-light .navbar-nav .nav-link:hover {
  color: #fa1f1f;
}
.navbar-light .navbar-nav .nav-link.active {
  color: #fa1f1f;
}

.navbar-nav .dropdown-menu {
  position: absolute;
  width: 60vw;
  left: -250px;
  text-align: right;
  padding: 20px;
}
.dropdown2 {
  margin: 20px;
}
.dropdown2 h5,
.dropdown2 hr {
  color: #fa1f1f;
}
.dropdown2 li a {
  text-decoration: none;
  color: #000;
}
.dropdown2 li {
  padding-bottom: 5px;
  transition: all 0.3s ease-in-out;
}
.dropdown2 li:hover {
  transform: translateX(-10px);
}
.dropIcon{
  float: left;
  margin-top: 7px;
}
</style>
