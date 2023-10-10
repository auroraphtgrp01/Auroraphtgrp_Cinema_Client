const client = [{
    path: "/",
    name: "homepage",
    component: () => import("../components/client/Homepage/index.vue")
}, {
    path: "/movie-detail/:slug",
    name: "movie-detail",
    component: () => import("../components/client/Movie_Detail/index.vue")
}]

export default client;