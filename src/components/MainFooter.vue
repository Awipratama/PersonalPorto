<template>
  <section class="footer" id="contact">
    <div class="container">
      <h3 class="py-3 text-center">Contact Person</h3>
      <div class="contact-list d-flex flex-column gap-3">
        <div class="list d-flex">
          <img src="@/assets/svgs/phone.svg" alt="">
          <p>: +62 812 3714 2927</p>
        </div>
        <div class="list d-flex">
          <img src="@/assets/svgs/email.svg" alt="">
          <p>: awipratama05122006@gmail.com</p>
        </div>
        <div class="list d-flex">
          <img src="@/assets/svgs/github.svg" alt="">
          <p>: https://github.com/Awipratama</p>
        </div>
        <div class="list d-flex">
          <img src="@/assets/svgs/instagram.svg" alt="">
          <p>: awipratama05</p>
        </div>
      </div>
    </div>
    <div class="end-footer container text-center">
      <p class="m-0 py-2">CopyRight & Made By AwiPratama</p>
    </div>
  </section>
</template>
<style scoped>
.footer {
  color: white;
  background: rgb(60, 60, 60);
  font-family: 'poppins', sans-serif;
}
.contact h3 {
  padding-bottom: 10px;
}
.end-footer {
  background: black;
  padding: 20px;
}
.end-footer a {
  transition: all 400ms;
  color: white;
}
.end-footer a:hover {
  transform: translateY(10px);
  color: orangered;
}
.contact-list {
  padding-inline: 35%;
  padding-bottom: 30px;
}
.list img {
  width: 30px;
  color: white;
}
.list p {
  margin-top: 0;
  margin-bottom: 0;
  padding-inline: 3px;
}

@media screen and (max-width: 500px) {
  .contact-list {
    padding-inline: 0;
  }
}
</style>
