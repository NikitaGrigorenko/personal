<script lang="ts">
  import { base } from '$app/paths'
  import { page } from '$app/stores'
</script>

<header>
  <div class="h_links">
    <div class="container">
      <div class="header_inn">
        <nav>
          <ul>
            <li class:active={$page.url.pathname === '/'}>
              <a class="n_link" sveltekit:prefetch href="{base}/">Home</a>
            </li>
            <li class:active={$page.url.pathname === '/about'}>
              <a class="n_link" sveltekit:prefetch href="{base}/about">About</a>
            </li>
            <li class:active={$page.url.pathname === '/achievements'}>
              <a class="n_link" sveltekit:prefetch href="{base}/achievements"
                >Achievements</a
              >
            </li>
            <li class:active={$page.url.pathname === '/random'}>
              <a class="n_link" sveltekit:prefetch href="{base}/random"
                >RandomDog</a
              >
            </li>
            <li class:active={$page.url.pathname === '/contacts'}>
              <a class="n_link" sveltekit:prefetch href="{base}/contacts"
                >Contacts</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</header>

<style>
  .h_links {
    width: 100%;
    padding-top: 50px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
  }

  .header_inn {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  nav {
    font-size: 15px;
    text-transform: uppercase;
  }

  .n_link {
    display: inline-block;
    vertical-align: top;
    margin: 0 15px;
    color: #000;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    text-decoration: double;
    transition: 0.2s linear;
  }

  .n_link:hover {
    color: rgb(225, 117, 135);
  }

  ul {
    position: relative;
    padding: 0;
    margin: 0;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    background: var(--background);
    background-size: contain;
  }

  li {
    position: relative;
    height: 100%;
  }

  li.active::before {
    --size: 6px;
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    left: calc(50% - var(--size));
    border: var(--size) solid transparent;
    border-top: var(--size) solid var(--accent-color);
  }

  nav a {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 1em;
    color: var(--heading-color);
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-decoration: none;
    transition: color 0.2s linear;
  }

  a:hover {
    color: var(--accent-color);
  }
</style>
