<script context="module">
  import { browser, dev } from '$app/env'
  import { base } from '$app/paths'
  export const hydrate = dev
  export const router = browser
  export const prerender = true
</script>

<svelte:head>
  <title>Achievements</title>
</svelte:head>

<div class="section">
  <div class="container">
    <div class="section_header">
      <h2 class="section_title">My Achievements</h2>
    </div>

    <div class="about">
      <div class="about__item">
        <div class="about__img">
          <a
            class="imageee"
            href="https://wro-association.org/"
            target="_blank"
          >
            <img
              src="{base}/photos/wro.jpg"
              alt=""
              style="border-radius: 7%; box-shadow: 0px 0px 15px 10px rgb(241, 195, 183);"
            />
          </a>
          <!-- svelte-ignore a11y-structure -->
          <figcaption style="margin-top: 10px;">
            Participated in WRO Hungary
          </figcaption>
        </div>
      </div>

      <div class="about__item">
        <div class="about__img">
          <a
            class="imageee"
            href="https://drive.google.com/drive/folders/1IZ4g40wOcYTOYL3z9MDggYLYXuy5RCEZ?usp=sharing"
            target="_blank"
          >
            <img
              src="{base}/photos/urfu.jpg"
              alt=""
              style="border-radius: 7%; box-shadow: 0px 0px 15px 10px rgb(241, 195, 183);"
            />
          </a>
          <!-- svelte-ignore a11y-structure -->
          <figcaption style="margin-top: 10px;">
            Math Project at UrFU
          </figcaption>
        </div>
      </div>

      <div class="about__item">
        <div class="about__img">
          <a
            class="imageee"
            href="https://github.com/NikitaGrigorenko/HotelManagmentApp"
            target="_blank"
          >
            <img
              src="{base}/photos/innoLogo.jpg"
              alt=""
              style="border-radius: 7%; box-shadow: 0px 0px 15px 10px rgb(241, 195, 183);"
            />
          </a>
          <!-- svelte-ignore a11y-structure -->
          <figcaption style="margin-top: 10px;">
            HotelManagement Project Innopolis
          </figcaption>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .imageee {
    display: flex;
    position: relative;
  }

  .imageee:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 7%;
    background: rgb(233, 231, 231, 0.4);
    opacity: 0;
    transition: 0.2s linear;
  }

  .imageee:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }

  .imageee:hover:before,
  .imageee:hover:after {
    opacity: 1;
  }

  .section {
    padding: 75px 0;
    width: 100%;
  }

  .section_header {
    width: 100%;
    max-width: 800px;
    margin: 0 auto 40px;
    text-align: center;
  }

  .section_title {
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    font-size: 30px;
    color: #000;
  }

  .section_title:after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background-color: rgb(202, 84, 84);
    margin: 20px auto 20px;
  }

  .about {
    display: flex;
    justify-content: space-between;
    max-width: 100%;
    margin: auto;
  }

  .about__img {
    font-family: 'Montserrat', sans-serif;
    text-align: center;
  }
</style>
