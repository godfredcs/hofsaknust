<template>
  <div id="wrapper">
	  	<app-header />

		<app-intro />
		
		<div class="front">
			<div>
				<h1 class="text-black">Welcome to hofsa knust</h1>
				<p style="color: #AAA;">We are still in the period of 40 days fasting and prayers and you are humbly welcome to join</p>
			</div>
		</div>

	  <app-footer />
  </div>
</template>

<script>
import Header from '@/components/common/Header.vue';
import Footer from '@/components/common/Footer.vue';
import Intro from '@/components/common/Intro.vue';

export default {
	components: {
		appHeader: Header,
		appFooter: Footer,
		appIntro: Intro,
	}
}
</script>

<style scoped>
#wrapper {
	
}

#upfront {
	height: 100vh;
	background-color: #000;
	margin: auto auto;
}

.front {
	padding-top: 100px;
	height: inherit;
	display: flex;
	justify-content: center;
	align-items: center;
}

.text-black {
	color: #000;
}
</style>
