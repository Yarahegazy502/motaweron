<template>
  <div class="contactUs">
    <div class="overlay"></div>
    <div class="container">
      <h2>تواصل معنا</h2>
      <div class="row g-0">
        <div class="col-lg-7 m mb-5">
          <div class="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13742.434481087821!2d30.999854755819445!3d30.560359959302495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDMzJzM5LjkiTiAzMcKwMDAnMzAuNiJF!5e0!3m2!1sen!2seg!4v1605517225614!5m2!1sen!2seg"
              width="600"
              height="450"
              frameborder="0"
              style="border: 0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
          <!-- location -->
          <div class="row g-0">
            <div class="col-md-4">
              <div class="contactLocations">
                <div class="contactUsIcon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    fill="white"
                    class="bi bi-geo-alt-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
                    />
                  </svg>
                </div>
                <p>مصر / المنوفية / شبين الكوم</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="contactLocations">
                <div class="contactUsIcon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    fill="white"
                    class="bi bi-telephone-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                    />
                  </svg>
                </div>
                <div>
                  <a
                    href="https://api.whatsapp.com/send?phone=966539044145"
                    target="_blank"
                    >00201011827324</a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="contactLocations">
                <div class="contactUsIcon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    fill="white"
                    class="bi bi-envelope-fill writeMessageSvg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"
                    /></svg
                  >
                </div>
                <div>
                  <a href="mailto:heshamtatawy@gmail.com" target="_blank"
                    >heshamtatawy@gmail.com</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5 m">
          <contactt/>
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
.contactUs {
  background-image: url("../assets/imgs/business-background2.jpg");
  background-repeat: repeat;
  background-size: cover;
  padding: 40px 0;
  position: relative;
  background-position: right;
  z-index: 1;
}
.contactUs .overlay {
  z-index: 0;
}
.contactUs .m {
  z-index: 2;
}
.contactUs .map {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
.contactUs .map iframe {
  border-radius: 10px;
}
.form input,
.form .input-group-text,
.form textarea {
  border: 0;
  border-bottom: 1px solid #ced4da;
  border-radius: 0;
  background-color: transparent;
  margin-bottom: 10px;
  font-size: 18px;
}
.form svg {
  color: #6c757d;
}
.form button {
  border: 0;
  background-color: #fa1f1f;
  color: #fff;
  padding: 10px 30px;
  border-radius: 5px;
}

.writeMessage {
  background-color: #fa1f1f;
  color: #fff;
  padding: 20px 0;
  text-align: center;
  position: relative;
  top: -50px;
}
.writeMessage .writeMessageSvg {
  margin-right: 15px;
}
.form input:focus {
  color: #212529;
  background-color: #fff;
  border-color: none;
  outline: 0;
  box-shadow: 0 0 0 0rem;
}
.contactUsIcon {
  background-color: #fa1f1f;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}
.contactLocations {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.contactLocations a{
  text-decoration: none;
  color: #fff;
}
</style>
