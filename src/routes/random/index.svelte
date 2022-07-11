<script lang="ts">
  import fetch from 'node-fetch'
  async function fetchDog() {
    const res = await fetch('https://random.dog/woof.json')
    const json = await res.json()
    return json
  }

  let imageDog = ''
  fetchDog().then((dog) => {
    const imgDog = dog.url
    imageDog = imgDog.img
  })
</script>

<svelte:head>
  <title>RandomDog</title>
</svelte:head>

<div class="section">
  <div class="container">
    <div class="section_header">
      <h2 class="section_title">Random Dog For Your Mood</h2>
      <div class="container2">
        <!-- svelte-ignore a11y-missing-attribute -->
        <img class="image" src={imageDog} />
      </div>
    </div>
  </div>
</div>

<style>
  .container2 {
    display: flex;
    justify-content: center;
    max-width: 100%;
    margin: auto;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }

  h2 {
    margin: 0;
  }

  .section {
    padding: 100px 0;
    width: 100%;
  }

  .section_header {
    width: 100%;
    max-width: 950px;
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

  .image {
    display: flex;
    justify-content: center;
    height: 405px;
    box-shadow: 0px 0px 15px 10px rgba(202, 84, 84, 0.514);
    border-radius: 15%;
  }
</style>
