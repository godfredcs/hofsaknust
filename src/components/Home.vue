<template>
	<div id="wrapper">
		<app-header />

		<app-intro />

		<app-about />

		<app-executives />

		<app-team />

		<app-footer />
	</div>
</template>

<script>
import Header from '@/components/common/Header.vue';
import Footer from '@/components/common/Footer.vue';
import Intro from '@/components/common/Intro.vue';
import About from '@/components/common/About.vue';
import Executives from '@/components/common/Executives.vue';
import Team from '@/components/common/Team.vue';

export default {
	components: {
		appHeader: Header,
		appFooter: Footer,
		appIntro: Intro,
		appAbout: About,
		appExecutives: Executives,
		appTeam: Team,
	}
}
</script>

<style scoped>

</style>
