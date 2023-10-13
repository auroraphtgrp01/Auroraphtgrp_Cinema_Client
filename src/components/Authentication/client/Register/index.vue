<template>
    <main class="main__content_wrapper" id="register" style="transform: scale(0.9);">
        <!-- Start login section  -->
        <div class="login__section section--padding">
            <div class="container">
                <div class="login__section--inner">
                    <div class="row">
                        <div class="col-md-3"></div>
                        <div class="col-md-6">
                            <div class="account__login register">
                                <div class="logo d-flex mb-4"> <img src="../../../../assets/client/images/mobile-logo.png"
                                        style="width: 200px;" class="m-auto" alt="logo icon"></div>
                                <div class="account__login--header mb-25">
                                    <h2 class="account__login--header__title mb-10" style="color: #ED3232;"><b
                                            style="font-weight: 600;">Tạo
                                            Tài Khoản</b></h2>
                                    <p class="account__login--header__desc">Tạo
                                        Tài Khoản Tại Đây Để Trở Thành Thành
                                        Viên</p>
                                </div>
                                <div class="account__login--inner">
                                    <label>
                                        <input class="account__login--input" placeholder="Họ Và Tên" type="text">
                                    </label>
                                    <label>
                                        <input class="account__login--input" placeholder="Ngày Sinh" type="date">
                                    </label>
                                    <label>
                                        <input class="account__login--input" placeholder="Địa Chỉ" type="text">
                                    </label>
                                    <label>
                                        <input class="account__login--input" placeholder="Địa Chỉ Mail" type="email">
                                    </label>
                                    <label>
                                        <input class="account__login--input" placeholder="Password" type="password">
                                    </label>
                                    <label>
                                        <input class="account__login--input" placeholder="Số điện thoại" type="password">
                                    </label>
                                    <button class="account__login--btn primary__btn mb-10">Đăng
                                        Ký</button>
                                    <p class="account__login--signup__text">Đã
                                        có tài khoản ?
                                        <router-link :to="{ name: 'login-client' }">
                                            <a type="button"><b class="text-danger">Đăng
                                                    nhập ngay</b>
                                            </a>
                                        </router-link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End login section  -->

        <!-- Start shipping section -->

        <!-- End shipping section -->

    </main>
</template>
<script>
</script>