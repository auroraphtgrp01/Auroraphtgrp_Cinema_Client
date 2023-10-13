<template>
    <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
            <div class="account__login">
                <div class="logo d-flex mb-4"> <img src="../../../../assets/client/images/mobile-logo.png"
                        style="width: 200px;" class="m-auto" alt="logo icon"></div>
                <div class="account__login--header mb-25">
                    <h2 class="account__login--header__title mb-10 text-center" style="color: #ED3232;">
                        <b style="font-weight: 600; font-size: 3.5rem;">Đăng
                            Nhập</b>
                    </h2>
                </div>

                <div class="account__login--inner">
                    <label>
                        <input class="account__login--input" placeholder="Địa chỉ email" type="email">
                    </label>
                    <label>
                        <input class="account__login--input" placeholder="Password" type="password">
                    </label>
                    <button v-on:click="loginRouter()" class="account__login--btn primary__btn">Đăng
                        Nhập</button>

                    <div class="account__login--divide">
                        <span class="account__login--divide__text">CHƯA
                            CÓ TÀI KHOẢN ? </span>
                    </div>
                    <div class="account__social d-flex justify-contsent-center mb-15">
                        <router-link :to="{ name: 'register-client' }" class="m-auto">
                            <a class="account__login--btn primary__btn text-center ">Đăng
                                ký</a>
                        </router-link>
                    </div>
                    <p class="account__log--signup__text">Quên
                        mật khẩu ?
                        <router-link :to="{ name: 'forgot-password-client' }">
                            <a href="/forgot-password" type="button"><b class="text-danger">Đặt
                                    lại
                                    mật khẩu</b>
                            </a>
                        </router-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import router from "../../../../routes/index"
import Auth from '../../../../layout/auth/Client/index.vue'

export default {
    // beforeRouteUpdate(to, from, next) {
    //     // Xóa các component của layout 2
    //     const layout2Components = [
    //         Auth
    //     ];
    //     layout2Components.forEach((component) => {
    //         component.destroy();
    //     });
    //     next();
    // },
    methods: {

        loginRouter() {
            router.push({ name: 'homepage' }, { replace: true });
        }
    },
};
</script>
