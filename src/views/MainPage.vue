<script>
import 'vue3-carousel/carousel.css'
import NavBar from '@/components/MainNavigation.vue'
import Footers from '@/components/MainFooter.vue'

export default {
  components: {
    NavBar,
    Footers,
  },
}
</script>

<template>
  <NavBar />
  <section class="hero d-flex flex-column flex-md-row justify-content-center align-items-center">
    <div class="info-hero w-50 order-2 order-md-1">
      <h5 class="text-info1 d-none d-lg-block font-semibold">FrontEnd Developer</h5>
      <h1 class="nama font-bold">AWI PRATAMA</h1>
      <p class="desc mb-3 d-none d-md-block">
        Belajar dan Mencari Pengalaman itu Penting, Tapi... Lebih Penting Makan & Minum sih.
        #pemudalapar
      </p>
      <a href="#about">
        <button class="slide03">
          Let's Get Started
          <div class="star-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xml:space="preserve"
              version="1.1"
              style="
                shape-rendering: geometricPrecision;
                text-rendering: geometricPrecision;
                image-rendering: optimizeQuality;
                fill-rule: evenodd;
                clip-rule: evenodd;
              "
              viewBox="0 0 784.11 815.53"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <defs></defs>
              <g id="Layer_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                <path
                  class="fil0"
                  d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                ></path>
              </g>
            </svg>
          </div>
          <div class="star-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xml:space="preserve"
              version="1.1"
              style="
                shape-rendering: geometricPrecision;
                text-rendering: geometricPrecision;
                image-rendering: optimizeQuality;
                fill-rule: evenodd;
                clip-rule: evenodd;
              "
              viewBox="0 0 784.11 815.53"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <defs></defs>
              <g id="Layer_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                <path
                  class="fil0"
                  d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                ></path>
              </g>
            </svg>
          </div>
          <div class="star-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xml:space="preserve"
              version="1.1"
              style="
                shape-rendering: geometricPrecision;
                text-rendering: geometricPrecision;
                image-rendering: optimizeQuality;
                fill-rule: evenodd;
                clip-rule: evenodd;
              "
              viewBox="0 0 784.11 815.53"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <defs></defs>
              <g id="Layer_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                <path
                  class="fil0"
                  d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                ></path>
              </g>
            </svg>
          </div>
          <div class="star-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xml:space="preserve"
              version="1.1"
              style="
                shape-rendering: geometricPrecision;
                text-rendering: geometricPrecision;
                image-rendering: optimizeQuality;
                fill-rule: evenodd;
                clip-rule: evenodd;
              "
              viewBox="0 0 784.11 815.53"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <defs></defs>
              <g id="Layer_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                <path
                  class="fil0"
                  d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                ></path>
              </g>
            </svg>
          </div>
          <div class="star-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xml:space="preserve"
              version="1.1"
              style="
                shape-rendering: geometricPrecision;
                text-rendering: geometricPrecision;
                image-rendering: optimizeQuality;
                fill-rule: evenodd;
                clip-rule: evenodd;
              "
              viewBox="0 0 784.11 815.53"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <defs></defs>
              <g id="Layer_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                <path
                  class="fil0"
                  d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                ></path>
              </g>
            </svg>
          </div>
        </button>
      </a>
    </div>
    <img src="@/assets/img/Foto 2.jpg" class="gambar1 rounded-circle order-1 order-md-2" />
  </section>

  <section class="pb-4" id="about">
    <div class="about-head">
      <div class="text-head">About Me</div>
    </div>
    <div class="about row justify-content-center gap-5 p-5">
      <div class="about-img col-lg-4 p-0">
        <img src="@/assets/img/FotoPrestasi.jpg" alt="" class="w-0 w-md-100 rounded" />
      </div>
      <div class="about-info col-lg-4 d-flex flex-column justify-content-center gap-2 text-center">
        <h2><span>I MADE WIDIA PRATAMA</span></h2>
        <p class="pt-3">
          Nama Lengkap ku adalah I Made Widia Pratama, tapi biasa di panggil Awik. Saya adalah siswa
          lulusan SMKN 1 Denpasar dengan jurusan Rekayasa Perangkat Lunak (RPL). Saya memiliki
          ketertarikan mendalam pada dunia digital, terutama pada pemrograman dan rasa penasaran,
          yang mendorong saya untuk terus mengeksplorasi dunia digital. Di samping itu, saya adalah
          siswa aktif dalam mengikuti berbagai kegiatan untuk meningkatkan skills, seperti
          perlombaan dan kegiatan organisasi.
        </p>
      </div>
    </div>
  </section>

  <section class="skill py-3" id="skill">
    <div class="headskill text-center">
      <h2><span>KETERAMPILAN SAYA</span></h2>
    </div>
    <div class="listskill d-flex flex-column flex-md-row justify-content-center pt-5">
      <div class="mini-card">
        <img src="@/assets/svgs/vue.svg" alt="" class="hardskill" />
        <p>Vue Js</p>
      </div>
      <div class="mini-card">
        <img src="@/assets/svgs/bootstrap.svg" alt="" class="hardskill" />
        <p>Bootstrap</p>
      </div>
      <div class="mini-card">
        <img src="@/assets/svgs/tailwind.svg" alt="" class="hardskill" />
        <p>Tailwind</p>
      </div>
      <div class="mini-card">
        <img src="@/assets/svgs/javascript.svg" alt="" class="hardskill" />
        <p>Javascript</p>
      </div>
      <div class="mini-card">
        <img src="@/assets/svgs/php.svg" alt="" class="hardskill" />
        <p>PHP</p>
      </div>
      <div class="mini-card">
        <img src="@/assets/svgs/laravel.svg" alt="" class="hardskill" />
        <p>Laravel</p>
      </div>
      <div class="mini-card">
        <img src="@/assets/svgs/mysql.svg" alt="" class="hardskill" />
        <p>MySql</p>
      </div>
      <div class="mini-card">
        <img src="@/assets/svgs/java.svg" alt="" class="hardskill" />
        <p>Java</p>
      </div>
      <div class="mini-card">
        <img src="@/assets/svgs/c++.svg" alt="" class="hardskill" />
        <p>C/C++</p>
      </div>
    </div>
  </section>

  <section class="portfolio" id="portfolio">
    <div class="about-head">
      <div class="text-head">Portfolio</div>
      <h3>PROJECTS & AWARDS</h3>
    </div>
    <div class="container position-relative pt-4">
      <div class="row gy-4 pb-5">
        <div class="col-lg-8 col-12">
          <div class="row gy-4">
            <div class="col-md-6 col-12 position-relative">
              <div class="portfolio-img-wrapper">
                <img
                  src="@/assets/img/VoiceCalculator.jpg"
                  class="w-100 portfolio-img-height-expand"
                />
              </div>
              <div class="portfolio-name">Voice Calculator</div>
            </div>
            <div class="col-md-6 col-12 position-relative">
              <div class="portfolio-img-wrapper">
                <img src="@/assets/img/404.jpeg" class="w-100 portfolio-img-height-expand shadow" />
              </div>
              <div class="portfolio-name">Coming Soon</div>
            </div>
            <div class="col-12 position-relative">
              <div class="portfolio-img-wrapper">
                <img src="@/assets/img/FirstReward.jpg" class="w-100 portfolio-img-height-short" />
              </div>
              <div class="portfolio-name">EYTHO 2023</div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-12">
          <div class="row gy-4">
            <div class="col-12 position-relative">
              <div class="portfolio-img-wrapper">
                <img src="@/assets/img/restaurant.jpg" class="w-100" />
              </div>
              <div class="portfolio-name">Restaurant WebDesign</div>
            </div>
            <div class="col-12 position-relative">
              <div class="portfolio-img-wrapper">
                <img src="@/assets/img/ezzy.jpg" class="w-100" />
              </div>
              <div class="portfolio-name">Ezzy WebDesign</div>
            </div>

            <div class="col-12 position-relative">
              <div class="portfolio-img-wrapper">
                <img
                  src="@/assets/img/LCC.jpg"
                  style="object-position: top"
                  class="w-100 portfolio-img-height-expand-2"
                />
              </div>
              <div class="portfolio-name">LCC SiteFest 4.0</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Footers />
</template>

<style scoped>
.hero {
  background: #ddeb9d;
  background: linear-gradient(
    146deg,
    rgba(221, 235, 157, 1) 25%,
    rgba(250, 246, 233, 1) 65%,
    rgba(255, 253, 246, 1) 100%
  );
  padding-block: 160px;
}
.gambar1 {
  width: 30%;
  border-style: solid;
  border-color: rgb(0, 0, 0);
}
.info-hero {
  padding-right: 110px;
  padding-left: 30px;
}
.text-info1 {
  font-size: 25px;
}
.nama {
  font-size: 50px;
}
.desc {
  font-size: 20px;
}
button {
  position: relative;
  padding: 8px 30px;
  background: #a0c878;
  font-size: 17px;
  font-weight: 500;
  color: #ffffff;
  border: 3px solid #a0c878;
  border-radius: 8px;
  box-shadow: 0 0 0 #a0c878;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  animation: 2s forwards btn;
}

@keyframes btn {
  0% {
    left: -1000px;
  }
  80% {
    left: 20px;
  }
  100% {
    left: 0px;
  }
}

.star-1 {
  position: absolute;
  top: 20%;
  left: 20%;
  width: 25px;
  height: auto;
  filter: drop-shadow(0 0 0 #fffdef);
  z-index: -5;
  transition: all 1s cubic-bezier(0.05, 0.83, 0.43, 0.96);
}

.star-2 {
  position: absolute;
  top: 45%;
  left: 45%;
  width: 15px;
  height: auto;
  filter: drop-shadow(0 0 0 #fffdef);
  z-index: -5;
  transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
}

.star-3 {
  position: absolute;
  top: 40%;
  left: 40%;
  width: 5px;
  height: auto;
  filter: drop-shadow(0 0 0 #fffdef);
  z-index: -5;
  transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
}

.star-4 {
  position: absolute;
  top: 20%;
  left: 40%;
  width: 8px;
  height: auto;
  filter: drop-shadow(0 0 0 #fffdef);
  z-index: -5;
  transition: all 0.8s cubic-bezier(0, 0.4, 0, 1.01);
}
.star-5 {
  position: absolute;
  top: 25%;
  left: 45%;
  width: 15px;
  height: auto;
  filter: drop-shadow(0 0 0 #fffdef);
  z-index: -5;
  transition: all 0.6s cubic-bezier(0, 0.4, 0, 1.01);
}
button:hover {
  background: transparent;
  color: #000000;
  box-shadow: 0 0 25px #ffebdc8c;
}
button:hover .star-1 {
  position: absolute;
  top: -80%;
  left: -30%;
  width: 25px;
  height: auto;
  filter: drop-shadow(0 0 10px #fffdef);
  z-index: 2;
}
button:hover .star-2 {
  position: absolute;
  top: -25%;
  left: 10%;
  width: 15px;
  height: auto;
  filter: drop-shadow(0 0 10px #fffdef);
  z-index: 2;
}
button:hover .star-3 {
  position: absolute;
  top: 55%;
  left: 25%;
  width: 5px;
  height: auto;
  filter: drop-shadow(0 0 10px #fffdef);
  z-index: 2;
}
button:hover .star-4 {
  position: absolute;
  top: 30%;
  left: 80%;
  width: 8px;
  height: auto;
  filter: drop-shadow(0 0 10px #fffdef);
  z-index: 2;
}
button:hover .star-5 {
  position: absolute;
  top: 25%;
  left: 115%;
  width: 15px;
  height: auto;
  filter: drop-shadow(0 0 10px #fffdef);
  z-index: 2;
}
.about-head {
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background:
    linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(@/assets/img/FirstReward.jpg);
  background-position: center;
  background-repeat: no-repeat;
  padding: 40px 0px;
  transition: all 500ms;
  background-attachment: fixed;
  background-size: cover;
}
.text-head {
  color: orange;
  font-size: 3rem;
  font-family: 'Courgette', sans-serif;
}
.about-img {
  width: 100%;
  max-width: 450px;
  aspect-ratio: 1 / 1;
  border-radius: 8px;
  overflow: hidden;
}
.about-img > img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: all 300ms;
}
.about-img > img:hover {
  transform: scale(1.3);
}
.about-info h2 span::before {
  position: absolute;
  content: '';
  background-color: black;
  width: 80%;
  border-radius: 8px;
  height: 5px;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -100%);
}
.about-info h2 span {
  width: 100%;
  font-family: 'poppins', sans-serif;
  color: black;
  font-size: 2rem;
  position: relative;
  padding-bottom: 12px;
}
.headskill h2 span::before {
  position: absolute;
  content: '';
  background-color: black;
  width: 60%;
  border-radius: 8px;
  height: 5px;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -100%);
}
.headskill h2 span {
  width: 100%;
  font-family: 'poppins', sans-serif;
  color: black;
  font-size: 2rem;
  position: relative;
  padding-bottom: 12px;
}
.hardskill {
  width: 20%;
}
.mini-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.mini-card p {
  padding-top: 2px;
}
.portfolio {
  background-color: #f3efea;
}
.portfolio img {
  object-fit: cover;
  filter: brightness(0.8);
  border-radius: 8px;
  aspect-ratio: 460/307;
}
.portfolio-img-height-expand {
  aspect-ratio: 460/660 !important;
}
.portfolio-img-height-expand-2 {
  aspect-ratio: 460/437 !important;
}
.portfolio-img-height-short {
  aspect-ratio: 460/205 !important;
}
.portfolio-img-wrapper {
  overflow: hidden;
}
.portfolio-img-wrapper img {
  transition: all 500ms;
}
.portfolio-img-wrapper img:hover {
  transform: scale(1.2);
}
.portfolio-name {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: clamp(1rem, 2vw + 0.5rem, 1.3rem);
  width: max-content;
  max-width: 100%;
  color: #5f5753;
  text-transform: uppercase;
  font-weight: 600;
  background-color: rgba(255, 251, 251, 0.922);
  padding: 10px 20px;
  border-radius: 8px;
  transform: translate(-50%, -50%);
  transition: all 500ms;
}
.portfolio-name:hover {
  background-color: orange;
  color: white;
}
.about-head h3 {
  font-family: 'Poppins', sans-serif;
  font-size: 2.5rem;
}
@media only screen and (max-width: 500px) {
  .nama {
    font-size: 30px;
    width: 205px;
  }
  .about-head h3 {
    font-size: 1.7rem;
  }
  .info-hero {
    padding-right: 0px;
    padding-left: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .gambar1 {
    width: 50%;
    margin-bottom: 15px;
  }
}
</style>
