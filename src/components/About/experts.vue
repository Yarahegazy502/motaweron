<template>
  <div class="container my-5">
    <h2 class="mb-5">نحن خبراء في</h2>
    <div class="row g-4">
      <div class="col-lg-3 col-md-6">
        <div class="expertContent">
          <div class="expertsIcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              class="bi bi-lightbulb-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          <p>الفكره</p>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="expertContent">
          <div class="expertsIcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              class="bi bi-brush-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 0 1-3.078.132 3.659 3.659 0 0 1-.562-.135 1.382 1.382 0 0 1-.466-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04z"
              />
            </svg>
          </div>
          <p>التصميم</p>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="expertContent">
          <div class="expertsIcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              class="bi bi-file-code-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6.646 5.646a.5.5 0 1 1 .708.708L5.707 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zm2.708 0 2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 8 8.646 6.354a.5.5 0 1 1 .708-.708z"
              />
            </svg>
          </div>
          <p>التطوير</p>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="expertContent">
          <div class="expertsIcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              class="bi bi-lightbulb-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          <p>التقديم</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.expertContent{
    border: 2px solid #eeeeee;
    border-top-right-radius: 50px;
    display: flex ;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px 0;
}
.expertContent .expertsIcon{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid #FA1F1F;
    display: flex ;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
}
.expertContent .expertsIcon svg{
    color: #FA1F1F;
}
.expertContent p{
    font-size: 20px;
    color: #111;
}
</style>
