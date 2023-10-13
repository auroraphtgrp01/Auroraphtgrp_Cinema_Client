<template>
    <main class="main__content_wrapper" id="login">
        <div class="login__section section--padding">
            <div class="container">
                <div class="login__section--inner">
                    <router-view>
                    </router-view>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
import "../../../assets/auth_client/js/vendor/popper.js"
import "../../../assets/auth_client/js/vendor/bootstrap.min.js"
import "../../../assets/auth_client/js/plugins/swiper-bundle.min.js"
import "../../../assets/auth_client/js/plugins/glightbox.min.js"
import "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"
import "https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"
import "../../../assets/auth_client/js/script.js"
// import "../../../assets/auth_client/JS_Client/login.js"
</script>
<style>
@import "../../../assets/auth_client/css/plugins/glightbox.min.css";
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500&display=swap");
@import "../../../assets/auth_client/css/vendor/bootstrap.min.css";
@import "../../../assets/auth_client/css/style.css";
</style>