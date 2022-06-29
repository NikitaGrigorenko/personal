<script context="module">
    import { browser, dev } from "$app/env";
    import { base } from '$app/paths';
    export const hydrate = dev;
    export const router = browser;
    export const prerender = true;
</script>

<svelte:head>
    <title>Contacts</title>
</svelte:head>

<section class="section">
    <div class="container">
        <div class="section_header">
            <h2 class="section_title">Contacts</h2>
        </div>

        <div class="about">
            <div class="about__item">
                <div class="about__img">
                    <a
                        class="imageee2"
                        href="https://www.instagram.com/n1kgrigorenko"
                        target="_blank"
                        ><img
                            src="{base}/icons/instagram.png"
                            alt=""
                            style="border-radius: 40%; box-shadow: 0px 0px 15px 10px rgb(241, 195, 183);"
                        /></a
                    >
                </div>
            </div>

            <div class="about__item">
                <div class="about__img">
                    <a
                        class="imageee2"
                        href="https://vk.com/n_grigorenko"
                        target="_blank"
                        ><img
                            src="{base}/icons/vk.png"
                            alt=""
                            style="border-radius: 40%; box-shadow: 0px 0px 15px 10px rgb(241, 195, 183);"
                        /></a
                    >
                </div>
            </div>

            <div class="about__item">
                <div class="about__img">
                    <a
                        class="imageee2"
                        href="https://github.com/NikitaGrigorenko"
                        target="_blank"
                        ><img
                            src="{base}/icons/github.png"
                            alt=""
                            style="border-radius: 40%; box-shadow: 0px 0px 15px 10px rgb(241, 195, 183);"
                        /></a
                    >
                </div>
            </div>

            <div class="about__item">
                <div class="about__img">
                    <a
                        class="imageee2"
                        href="https://t.me/n1kgrigorenko"
                        target="_blank"
                        ><img
                            src="{base}/icons/tg.png"
                            alt=""
                            style="border-radius: 40%; box-shadow: 0px 0px 15px 10px rgb(241, 195, 183);"
                        /></a
                    >
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .imageee2 {
        display: flex;
        position: relative;
    }
    .imageee2:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 40%;
        background: rgb(233, 231, 231, 0.4);
        opacity: 0;
        transition: 0.2s linear;
    }
    .imageee2:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0;
    }
    .imageee2:hover:before,
    .imageee2:hover:after {
        opacity: 1;
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
        font-family: "Montserrat", sans-serif;
        text-transform: uppercase;
        font-size: 30px;
        color: #000;
    }
    .section_title:after {
        content: "";
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
        font-family: "Montserrat", sans-serif;
        text-align: center;
    }
</style>
