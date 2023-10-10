<template>
    <section>
        <Preloader />
        <HeaderVue />
        <router-view></router-view>
        <FooterVue />
    </section>
</template>
<script>
import HeaderVue from '../component_client/header.vue'
import FooterVue from '../component_client/footer.vue'
import Preloader from '../component_client/preloader.vue'
import "../../../assets/client/js/jquery.js"
import "../../../assets/client/js/popper.min.js"
import "../../../assets/client/js/bootstrap.min.js"
import "../../../assets/client/js/magnific-popup.min.js"
import "../../../assets/client/js/jquery.mCustomScrollbar.concat.min.js"
import "../../../assets/client/js/appear.js"
import "../../../assets/client/js/parallax.min.js"
import "../../../assets/client/js/tilt.jquery.min.js"
import "../../../assets/client/js/jquery.paroller.min.js"
import "../../../assets/client/js/owl.js"
// import "../../../assets/client/js/wow.js"
import "../../../assets/client/js/swiper.min.js"
import "../../../assets/client/js/touchspin.js"
import "../../../assets/client/js/odometer.js"
import "../../../assets/client/js/mixitup.js"
import "../../../assets/client/js/backToTop.js"
import "../../../assets/client/js/jquery.marquee.min.js"
import "../../../assets/client/js/nav-tool.js"
import "../../../assets/client/js/jquery-ui.js"
import "../../../assets/client/js/script.js"

export default {
    name: 'app',
    components: {
        HeaderVue, FooterVue, Preloader
    }
}
</script>
<style>
@import "../../../assets/client/css/bootstrap.css";
@import "../../../assets/client/css/style.css";
@import "../../../assets/client/css/responsive.css";
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700;800;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css");
</style>