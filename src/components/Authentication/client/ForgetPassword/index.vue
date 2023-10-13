<template>
    <main id="forgetPassword" class="main__content_wrapper">
        <div class="login__section section--padding mt-5">
            <div class="container  mt-5">
                <div class="login__section--inner">
                    <div class="row row-cols-md-1 row-cols-1">
                        <div class="col-md-2"></div>
                        <div class="col-md-8">
                            <div class="account__login">
                                <div class="account__login--header mb-25">
                                    <h2 class="account__login--header__title mb-10">Quên
                                        Mật Khẩu</h2>
                                    <p class="account__login--header__desc">Nhập
                                        vào email đăng nhập để lấy lại mật
                                        khẩu</p>
                                </div>
                                <div class="account__login--inner">
                                    <label>
                                        <input class="account__login--input" placeholder="Nhập vào email" type="email">
                                    </label>
                                    <div class="d-grid gap-2 col-6 mx-auto">
                                        <button class="account__login--btn primary__btn" type="button">Gửi</button>
                                    </div>
                                    <div class="account__login--divide">
                                        <span class="account__login--divide__text">OR</span>
                                    </div>
                                    <div class="account__social d-flex justify-content-center mb-15">
                                        <router-link :to="{ name: 'login-client' }" class="me-4">
                                            <a class="account__social--link facebook">Đăng Nhập</a>
                                        </router-link>
                                        <router-link :to="{ name: 'register-client' }">
                                            <a class="account__social--link google">Đăng Ký</a>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script>

</script>