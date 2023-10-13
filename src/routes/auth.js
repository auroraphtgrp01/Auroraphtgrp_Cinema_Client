const auth = [{
    path: '/auth',
    name: 'auth',
    // meta: {
    //     auth: false,
    //     redirect: '/login',
    // },
    component: () => import("../layout/auth/Client/index.vue"),
    children: [{
            path: 'login',
            name: 'login-client',
            component: () => import("../components/Authentication/client/Login/index.vue"),
        },
        {
            path: 'register',
            name: 'register-client',
            component: () => import("../components/Authentication/client/Register/index.vue"),
        },
        {
            path: 'forgot-password',
            name: 'forgot-password-client',
            component: () => import("../components/Authentication/client/ForgetPassword/index.vue")
        }, {
            path: 'reset-password/:token',
            name: 'reset-password-client',
            component: () => import("../components/Authentication/client/ResetPassword/index.vue")
        }
    ]
}];

export default auth;