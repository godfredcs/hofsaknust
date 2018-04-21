<template>
	<header id="header">
		<div class="container-fluid">

			<div id="logo" class="pull-left">
				<h1><a href="#intro" class="scrollto">Hofsa</a></h1>
				<!-- Uncomment below if you prefer to use an image logo -->
				<!-- <a href="#intro"><img src="img/logo.png" alt="" title="" /></a>-->
			</div>

			<nav id="nav-menu-container">
				<ul class="nav-menu">
					<router-link to="/" tag="li" exact-active-class="menu-active" exact><a>Home</a></router-link>
					<router-link to="/campus_connect" tag="li"><a>Campus Connect</a></router-link>
					<router-link to="/organogram" tag="li"><a>Organogram</a></router-link>
					<router-link to="/missions" tag="li"><a>Missions</a></router-link>
					<router-link to="/programmes" tag="li"><a>Programmes</a></router-link>
					<router-link to="/support_now" tag="li"><a>Support Now</a></router-link>
					<router-link to="/partnerships" tag="li"><a>Partnerships</a></router-link>
					<router-link to="/gallery" tag="li"><a>Gallery</a></router-link>
					<router-link to="/calendar" tag="li"><a>Calendar</a></router-link>
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

