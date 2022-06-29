<script context="module">
	export const prerender = true;
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="section">
	<div class="container">
		<div class="section_header">
			<h2 class="section_title">Story about me</h2>
			<div class="section_text">
				<p>
					Hello everyone! I am Nikita Grigorenko, a student at
					Innopolis University. I like to take pictures on film and
					program. I love coffee and eating very much.
				</p>
			</div>
		</div>

		<div class="about">
			<div class="about__item">
				<div class="about__img">
					<img
						src="photos/inno.jpg"
						alt=""
						style="border-radius: 7%; box-shadow: 0px 0px 15px 10px rgb(241, 195, 183);"
					/>
				</div>
			</div>

			<div class="about__item">
				<div class="about__img">
					<img
						src="photos/camera.jpg"
						alt=""
						style="border-radius: 7%; box-shadow: 0px 0px 15px 10px rgb(241, 195, 183);"
					/>
				</div>
			</div>

			<div class="about__item">
				<div class="about__img">
					<img
						src="photos/breakfast.jpg"
						alt=""
						style="border-radius: 7%; box-shadow: 0px 0px 15px 10px rgb(241, 195, 183);"
					/>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	h2 {
		margin: 0;
	}
	.section {
		padding: 100px 0;
		width: 100%;
	}
	.section_header {
		width: 100%;
		max-width: 800px;
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
	.section_text {
		font-size: 20px;
		color: darkslategrey;
		font-family: "Montserrat", sans-serif;
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