<template>
    <Preloader />
    <div style="">
        <div class="">
            <section class=" main-sliders">
                <div class="container">
                    <div class="">
                        <swiper :spaceBetween="30" :centeredSlides="true" :autoplay="{
                            delay: 1000,
                            disableOnInteraction: false,
                        }" :modules="modules" effect="fade" class="mySwiper">
                            <swiper-slide><img src="../../../assets/client/images/background/6.jpg"></swiper-slide>
                            <swiper-slide><img src="../../../assets/client/images/background/1.png"></swiper-slide>
                            <swiper-slide><img src="../../../assets/client/images/background/2.jpg"></swiper-slide>
                        </swiper>
                    </div>

                </div>
            </section>
            <section class="products-section mt-5">
                <div class="auto-container">
                    <div class="sec-title">
                        <h4><strong style="font-size: 2.2rem;" class="text-danger">PHIM SẮP
                                CHIẾU</strong></h4>
                    </div>
                    <swiper :slidesPerView="4" :spaceBetween="30" :loop="true" :freeMode="true" :speed="300" :pagination="{
                        clickable: true,
                    }" :modules="modules" class="mySwiper" :breakpoints="{
    '640': {
        slidesPerView: 1,
        spaceBetween: 20,
    },
    '700': {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    '768': {
        slidesPerView: 3,
        spaceBetween: 40,
    },
    '1024': {
        slidesPerView: 4,
        spaceBetween: 50,
    },
}">
                        <template v-for="(v, k) in list_phim">
                            <swiper-slide style="width: 300px; height: 500px; background: transparent;">
                                <router-link :to="'/movie-detail/' + v.slug_phim">
                                    <div class="shop-item" style="z-index: 11111;">
                                        <div class="inner-box">
                                            <div class="image" style="width: 300px; height: 500px;">
                                                <a href="/movie-detail/">
                                                    <div style>
                                                        <img :src="v.hinh_anh"
                                                            style="object-fit: cover; width: 300px; height: 500px;" />
                                                    </div>
                                                </a>
                                                <div class="cart-box text-center mb-1">
                                                    <a class="cart" href="#" style><b>Trailer</b></a>
                                                    <a class="cart" style href="s"><b>Đặt
                                                            vé </b></a>
                                                </div>
                                            </div>
                                            <h6><a href="s"> <b>{{ v.ten_phim }} </b></a>
                                            </h6>
                                        </div>
                                    </div>
                                </router-link>
                            </swiper-slide>
                        </template>
                    </swiper>
                </div>
            </section>

            <section class="collection-section">
                <div class="auto-container">
                    <div class="inner-container" style="border-radius: 20px; background: rgb(255,153,102);
                    background: linear-gradient(90deg, rgba(255,153,102,1) 0%, rgba(255,94,98,1) 100%);">
                        <div class="pattern-layer"
                            style="background-image: url(../../../assets/client/images/icons/pattern-1.png)">
                        </div>
                        <div class="row clearfix">
                            <div class="title-column col-lg-6 col-md-12 col-sm-12">
                                <div class="title text-danger fs-2"><b>PHIM NHIỀU NGƯỜI XEM
                                        NHẤT
                                        2023</b></div>
                                <h2></h2>
                                <div class="deals text-white">NGƯỜI NHỆN: DU HÀNH VŨ TRỤ
                                    NHỆN</div>
                                <a class="shop-now" href="shop-detail.html"><button class="btn btn-danger"><strong>ĐẶT VÉ
                                            NGAY</strong></button></a>
                                <div class="arrow">
                                    <img src="../../../assets/client/images/icons/arrow-1.png" alt />
                                </div>
                            </div>
                            <div class="image-column col-lg-6 col-md-12 col-sm-12">s
                                <div class="image">
                                    <div class="shadow-layer"
                                        style="background-image: url(../../../assets/client/images/icons/pattern-2.png)">
                                    </div>
                                    <img src="../../../assets/client/images/resource/chair.png" alt />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="products-section-three">
                <div class="auto-container">
                    <div class="sec-title">
                        <h4><span>PHIM HAY </span> DÀNH CHO BẠN !</h4>
                    </div>
                    <div class="mixitup-gallery">
                        <!-- Filter -->
                        <div class="filters">
                            <ul class="filter-tabs">
                                <li class="active filter" data-role="button" data-filter="all"></li>
                            </ul>
                        </div>
                        <div class="filter-list row clearfix">
                            <template v-for="(v, k) in list_rcm">

                                <div class="shop-item mix music photography col-lg-3 col-md-6 col-sm-12">
                                    <router-link :to="'/movie-detail/' + v.slug_phim">
                                        <div class="inner-box">
                                            <div class="image" style="width: 300px; height: 400px;">
                                                <a href="/">
                                                    <div style>
                                                        <img :src="v.hinh_anh"
                                                            style="object-fit: cover; width: 300px; height: 400px;" />
                                                    </div>
                                                </a>
                                                <div class="cart-box text-center mb-1">
                                                    <a class="cart" href="#" style><b>Trailer</b></a>
                                                    <a class="cart" style href="s"><b>Đặt
                                                            vé </b></a>
                                                </div>
                                            </div>
                                            <div class="lower-content">
                                                <h6><a href="">
                                                        <b>{{ v.ten_phim }}</b>
                                                    </a>
                                                </h6>
                                            </div>
                                        </div>
                                    </router-link>

                                </div>
                            </template>
                        </div>
                    </div>
                </div>
            </section>
            <section class="sponsors-section">
                <div class="auto-container">
                    <div class="inner-container">
                        <div class="sponsors-outer">
                            <swiper :slidesPerView="6" :spaceBetween="10" :loop="true" :pagination="{
                                clickable: true,
                            }" :modules="modules" class="mySwiper">
                                <swiper-slide>
                                    <figure class="image-box">
                                        <div href="#"><img src="../../../assets/client/images/clients/1.png" alt></div>
                                    </figure>
                                </swiper-slide>
                                <swiper-slide>
                                    <figure class="image-box">
                                        <div href="#"><img src="../../../assets/client/images/clients/4.png" alt></div>
                                    </figure>
                                </swiper-slide>
                                <swiper-slide>
                                    <figure class="image-box">
                                        <div href="#"><img src="../../../assets/client/images/clients/3.png" alt></div>
                                    </figure>
                                </swiper-slide>
                                <swiper-slide>
                                    <figure class="image-box">
                                        <div href="#"><img src="../../../assets/client/images/clients/2.png" alt></div>
                                    </figure>
                                </swiper-slide>
                                <swiper-slide>
                                    <figure class="image-box">
                                        <div href="#"><img src="../../../assets/client/images/clients/5.png" alt></div>
                                    </figure>
                                </swiper-slide>
                                <swiper-slide>
                                    <figure class="image-box">
                                        <div href="#"><img src="../../../assets/client/images/clients/6.png" alt></div>
                                    </figure>
                                </swiper-slide>
                                <swiper-slide>
                                    <figure class="image-box">
                                        <div href="#"><img src="../../../assets/client/images/clients/2.png" alt></div>
                                    </figure>
                                </swiper-slide>
                                <swiper-slide>
                                    <figure class="image-box">
                                        <div href="#"><img src="../../../assets/client/images/clients/1.png" alt></div>
                                    </figure>
                                </swiper-slide>
                                <swiper-slide>
                                    <figure class="image-box">
                                        <div href="#"><img src="../../../assets/client/images/clients/3.png" alt></div>
                                    </figure>
                                </swiper-slide>
                                <swiper-slide>
                                    <figure class="image-box">
                                        <div href="#"><img src="../../../assets/client/images/clients/4.png" alt></div>
                                    </figure>
                                </swiper-slide>
                                <swiper-slide>
                                    <figure class="image-box">
                                        <div href="#"><img src="../../../assets/client/images/clients/2.png" alt></div>
                                    </figure>
                                </swiper-slide>
                            </swiper>

                        </div>
                    </div>
                </div>
            </section>
            <section class="news-section">
                <div class="container">
                    <div class="d-flex">
                        <div class="col-md-6">
                            <div class="d-flex">
                                <div class="news-block" style="width: 800px; height: 500px">
                                    <div class="inner-box">
                                        <div class="image">
                                            <div class="tag text-bg-danger">BLOG</div>
                                            <a href="blog-detail.html"><img
                                                    src="../../../assets/client/images/resource/news-1.jpg" alt /></a>
                                        </div>
                                        <div class="lower-content">
                                            <div class="author">
                                                <img src="../../../assets/client/images/resource/author-1.png" alt />
                                            </div>
                                            <h5><a href="blog-detail.html" style="text-decoration: none;">Mắt
                                                    Biếc:
                                                    Câu chuyện tình yêu và nỗi
                                                    buồn đến từ sự bỏ lỡ</a></h5>
                                            <div class="info">By: <span>Lan Hương</span>
                                                <i>January 23,2022</i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="d-flex">
                                <div class="news-block" style="width: 800px; height: 500px">
                                    <div class="inner-box">
                                        <div class="image">
                                            <div class="tag text-bg-danger">BLOG</div>
                                            <a href="blog-detail.html"><img
                                                    src="../../../assets/client/images/resource/news-2.jpg" alt /></a>
                                        </div>
                                        <div class="lower-content">
                                            <div class="author">
                                                <img src="../../../assets/client/images/resource/author-11.png" alt />
                                            </div>
                                            <h5><a href="blog-detail.html" style="text-decoration: none;">Mắt
                                                    Biếc”
                                                    - Một Tác Phẩm Phải Dùng Cả Quãng
                                                    Thời Gian Thanh Xuân Để Cảm Nhận
                                                </a></h5>
                                            <div class="info">By: <span>Anh Nguyễn</span>
                                                <i>September 11,2022</i>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>



                    </div>
                </div>
            </section>
            <section class="testimonial-section">
                <div class="container">
                    <swiper class="mySwiper" :breakpoints="{
                        '640': {
                            slidesPerView: 1,
                        },
                        '700': {
                            slidesPerView: 1,
                        },
                        '768': {
                            slidesPerView: 1,
                        },
                        '1024': {
                            slidesPerView: 1,
                        },
                    }">
                        <swiper-slide style="background: transparent;">
                            <div class="testimonial-block">
                                <div class="inner-box">
                                    <div class="row clearfix">
                                        <div class="image-column col-lg-4 col-md-12 col-sm-12">
                                            <div class="inner-column">
                                                <div class="arrow-layer"
                                                    style="background-image: url(../../../assets/client/images/icons/arrow-2.png)">
                                                </div>
                                                <div class="image">
                                                    <img src="../../../assets/client/images/resource/author-2.png" alt />
                                                    <ul class="social-box">
                                                        <li><a href="https://www.facebook.com/"
                                                                class="fa fa-facebook-f"></a>
                                                        </li>
                                                        <li><a href="https://www.twitter.com/" class="fa fa-twitter"></a>
                                                        </li>
                                                        <li><a href="https://dribbble.com/" class="fa fa-dribbble"></a></li>
                                                        <li><a href="https://www.linkedin.com/" class="fa fa-linkedin"></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="content-column col-lg-8 col-md-12 col-sm-12">
                                            <div class="inner-column">
                                                <div class="text">“Tôi gửi tình
                                                    yêu cho mùa hè, nhưng mùa hè
                                                    không
                                                    giữ nổi. Mùa hè chỉ biết ra
                                                    hoa, phượng đỏ sân trường và
                                                    tiếng ve
                                                    nỉ non trong lá. Mùa hè ngây
                                                    ngô, giống như tôi vậy. Nó
                                                    chẳng làm
                                                    được những điều tôi kí thác.
                                                    Nó để Hà Lan đốt tôi, đốt
                                                    rụi. Trái
                                                    tim tôi cháy thành tro, rơi
                                                    vãi trên đường về.”</div>
                                                <div class="quote-icon flaticon-quote"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide style="background: transparent;">
                            <div class="testimonial-block">
                                <div class="inner-box">
                                    <div class="row clearfix">
                                        <div class="image-column col-lg-4 col-md-12 col-sm-12">
                                            <div class="inner-column">
                                                <div class="arrow-layer"
                                                    style="background-image: url(../../../assets/client/images/icons/arrow-2.png)">
                                                </div>
                                                <div class="image">
                                                    <img src="../../../assets/client/images/resource/author-21.png" alt />
                                                    <ul class="social-box">
                                                        <li><a href="https://www.facebook.com/"
                                                                class="fa fa-facebook-f"></a>
                                                        </li>
                                                        <li><a href="https://www.twitter.com/" class="fa fa-twitter"></a>
                                                        </li>
                                                        <li><a href="https://dribbble.com/" class="fa fa-dribbble"></a></li>
                                                        <li><a href="https://www.linkedin.com/" class="fa fa-linkedin"></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="content-column col-lg-8 col-md-12 col-sm-12">
                                            <div class="inner-column">
                                                <div class="text">“Trà Long,
                                                    làng mình bao giờ cũng đẹp.
                                                    Cháu hiểu
                                                    rõ điều đó hơn mẹ cháu. Làng
                                                    mình đẹp, nhưng buồn. Hồi
                                                    chú còn nhỏ,
                                                    làng vui hơn. Cũng có thể
                                                    làng vẫn thế thôi, nhưng bây
                                                    giờ chú thấy
                                                    khác. Khi lớn lên, người ta
                                                    thường thấy mọi thứ khác đi,
                                                    cháu ạ!
                                                    Chúng ít rực rỡ hơn và ít
                                                    trong suốt hơn. Nhưng dù sao
                                                    chí vẫn tin
                                                    trong mắt cháu, thế giới vẫn
                                                    còn nguyên vẹn, dù ngày mai
                                                    khi cháu
                                                    đến đây thì chú đã đi
                                                    rồi...”</div>
                                                <div class="quote-icon flaticon-quote"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, FreeMode } from 'swiper/modules';
import axios from '../../../core/axios_request'
import Preloader from '../../../layout/client/component_client/preloader.vue'

export default {
    components: {
        Swiper,
        SwiperSlide,
        Preloader
    },
    data() {
        return {
            list_phim: [],
            list_rcm: [],
        }
    }, mounted() {
        this.loadData();
    },
    setup() {
        return {
            modules: [Autoplay, FreeMode],
        };
    }, methods: {
        loadData() {
            this.handlePreloader();
            axios.post('/homepage')
                .then(res => {
                    this.list_phim = res.data.data;
                    this.list_rcm = this.shuffleList(this.list_phim);
                    console.log(this.list_phim);
                })

        }, shuffleList(arr) {
            let arr1 = [...arr];
            for (let i = arr1.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [arr1[i], arr1[j]] = [arr1[j], arr1[i]];
            }
            console.log(arr1);
            return arr1.slice(0, 8);
        }, handlePreloader() {
            if ($('.loader-wrap').length) {
                $('.loader-wrap').delay(1000).fadeOut(500);
            }
            setTimeout(() => {
                $('.loader-wrap').css({
                    // 'display': 'none'
                });
            }, 1000);
        }
    }, computed: {

    }
};
</script>
<style>
#app {
    height: 100%;
}

.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>