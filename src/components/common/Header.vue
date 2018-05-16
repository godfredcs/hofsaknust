<template>
	<header id="header">
		<div class="container-fluid">

			<div id="logo" class="pull-left">
				<router-link to="/" tag="h1"><a>Hofsa</a></router-link>
				<!-- Uncomment below if you prefer to use an image logo -->
				<!-- <a href="#intro"><img src="img/logo.png" alt="" title="" /></a>-->
			</div>

			<nav id="nav-menu-container">
				<ul class="nav-menu">
					<router-link to="/" tag="li" active-class="menu-active" exact><a>Home</a></router-link>
					<router-link to="/campus_connect" tag="li" active-class="menu-active"><a>Campus Connect</a></router-link>
					<router-link to="/organogram" tag="li" active-class="menu-active"><a>Organogram</a></router-link>
					<router-link to="/missions" tag="li" active-class="menu-active"><a>Missions</a></router-link>
					<router-link to="/programmes" tag="li" active-class="menu-active"><a>Programmes</a></router-link>
					<router-link to="/support_now" tag="li" active-class="menu-active"><a>Support Now</a></router-link>
					<router-link to="/partnerships" tag="li" active-class="menu-active"><a>Partnerships</a></router-link>
					<router-link to="/gallery" tag="li" active-class="menu-active"><a>Gallery</a></router-link>
					<router-link to="/calendar" tag="li" active-class="menu-active"><a>Calendar</a></router-link>
					<!-- li class="menu-has-children"><a href="">Drop Down</a>
						<ul>
						<li><a href="#">Drop Down 1</a></li>
						<li><a href="#">Drop Down 3</a></li>
						<li><a href="#">Drop Down 4</a></li>
						<li><a href="#">Drop Down 5</a></li>
						</ul>
					</li -->
				</ul>
			</nav><!-- #nav-menu-container -->
		</div>
  </header><!-- #header -->
</template>

<script>
export default {
  
}
</script>

<style scoped>
	
</style>

