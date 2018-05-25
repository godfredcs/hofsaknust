<template>
  <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-3 col-md-6 footer-info">
            <h3>Hofsa</h3>
            <p class="text-left">
				      House of faith students and associates humbly welcome you to worship with us. The location is Mount Olives, Boadi - KNUST, Kumasi.
			      </p>
          </div>

          <div class="col-lg-3 col-md-6 footer-info">
            <h3>FIC</h3>
            <p class="text-left">
              Faith International Centre also warmly invites you to come and worship. The location is the same Mount Olives, Boadi - KNUST, Kumasi.
			      </p>
          </div>

          <div class="col-lg-3 col-md-6 footer-contact">
            <h4>Contact Us</h4>
            <p>
              Mount Olives, Boadi <br>
              KNUST - Kumasi <br>
              Ghana <br>
              <strong>Phone:</strong> +233 247 512 141 <br>
              <strong>Email:</strong> addaiz.godfred@gmail.com <br>
            </p>

            <div class="social-links">
              <a href="#" class="twitter" target="_blank"><i class="fa fa-twitter"></i></a>
              <a href="#" class="facebook" target="_blank"><i class="fa fa-facebook"></i></a>
              <a href="#" class="instagram" target="_blank"><i class="fa fa-instagram"></i></a>
            </div>

          </div>

          <div class="col-lg-3 col-md-6 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>Please enter your email to receive weekly newsletters from us.</p>
            <form action="" method="post">
              <input type="email" name="email"><input type="submit"  value="Subscribe">
            </form>
          </div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="copyright">
       {{ year }} &copy; Copyright <strong>Hofsa</strong>. All Rights Reserved
      </div>
      <div class="credits">
        <!--
          All the links in the footer should remain intact.
          You can delete the links only if you purchased the pro version.
          Licensing information: https://bootstrapmade.com/license/
          Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=BizPage
        -->
        Best <a href="https://bootstrapmade.com/">Bootstrap Templates</a> by BootstrapMade
      </div>
    </div>
  </footer><!-- #footer -->
</template>

<script>
export default {
	data() {
		return {
			year: new Date().getFullYear(),
		}
	}
}
</script>

<style>

</style>
