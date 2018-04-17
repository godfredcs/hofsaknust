<template>
  <div id="wrapper">
	  <div id="upfront">
	  	<app-header />
		
		<div class="front">
			<div>
				<h1 class="text-white">Welcome to hofsa knust</h1>
				<p style="color: #AAA;">We are still in the period of 40 days fasting and prayers and you are humbly welcome to join</p>
			</div>
		</div>
	  </div>

	  <app-footer />
  </div>
</template>

<script>
import Header from '@/components/common/Header.vue';
import Footer from '@/components/common/Footer.vue';

export default {
	components: {
		appHeader: Header,
		appFooter: Footer,
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

.text-white {
	color: #FFF;
}
</style>
