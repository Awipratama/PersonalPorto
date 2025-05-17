<script>
import { Offcanvas } from 'bootstrap'

export default {
  mounted() {
    window.addEventListener('scroll', this.handleScroll)

    const navLinks = document.querySelectorAll('#offcanvas .nav-link')
    const offcanvasElement = document.getElementById('offcanvas')
    const bsOffcanvas = Offcanvas.getOrCreateInstance(offcanvasElement)

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        bsOffcanvas.hide() // Tutup offcanvas
      })
    })
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const nav = document.querySelector('.navbar')

      if (nav.clientHeight < window.scrollY) {
        nav.classList.add('nav-move')
        return
      }
      nav.classList.remove('nav-move')
    },
  },
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light hrefp-0 left-0 px-3 position-fixed">
    <div class="container px-5">
      <h1 class="navbar-brand" href="#">AWIPRATAMA</h1>
      <button
        class="btn btn-white border d-block d-lg-none"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvas"
        aria-controls="offcanvas"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvas"
        aria-labelledby="offcanvas"
        data-bs-backdrop="true"
      >
        <div class="offcanvas-header">
          <h5 id="offcanvasRightLabel">AWIPRATAMA</h5>
          <button
            type="button"
            class="btn-close ms-auto p-3 text-reset d-block d-lg-none"
            data-bs-toggle="#offcanvas"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body d-block d-lg-none">
          <ul class="navbar-nav gap-3">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#about">About Me</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#portfolio">Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Contact Me</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav gap-3">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#about">About Me</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#portfolio">Portfolio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contact Me</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-item {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  position: relative;
  color: #83818c;
  padding: 5px;
  text-decoration: none;
  transition: 0.3s;
  margin: 0 6px;
  z-index: 1;

  &:before {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: orange;
    border-radius: 8px 8px 0 0;
    opacity: 0;
    transition: 0.3s;
  }
}
.nav-item:not(.is-active):hover:before {
  opacity: 1;
  bottom: 0px;
}
.nav-item:not(.is-active):hover {
  color: #333;
}
.nav-link {
  color: #a0c878;
}
.nav-link:hover {
  color: orange;
}
.navbar {
  z-index: 99999;
  width: 100%;
  top: 0;
  height: 80px;
  transition: all 200ms;
  background: none;
}
.nav-move {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  background: white;
  color: black;
}
.nav-move .text-brand-main {
  color: black;
}
.nav-move .nav-link {
  color: black;
}
.nav-move .nav-link:hover {
  color: orange;
}
.navbar-brand {
  color: orange;
  font-weight: 600;
  font-family: 'montserrat', sans-serif;
}
.offcanvas {
  max-width: 400px;
  width: 100%;
}
</style>
