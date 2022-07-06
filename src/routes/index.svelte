<script context="module" lang="ts">
  export const prerender = true
  import { base } from '$app/paths'
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<div class="mPhoto">
  <div class="container">
    <div class="photo">
      <!-- svelte-ignore a11y-missing-attribute -->
      <img src="{base}/photos/myPhoto.jpg" style="border-radius: 45%;" />
    </div>
  </div>
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap');

  .mPhoto {
    width: 100%;
    padding-top: 150px;
    position: relative;
  }

  .photo {
    display: flex;
    justify-content: center;
  }

  .mPhoto:after {
    font-family: 'Kaushan Script', cursive;
    content: 'Nikita Grigorenko';
    width: 100%;
    font-size: 130px;
    color: #fff;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
  }
</style>
