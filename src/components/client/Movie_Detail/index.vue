<template>
    <Preloader />
    <div class="container" style=" transform: scale(0.9); transform-origin: 0 0; padding-left: 100px;">
        <section class="shop-detail-section" style="padding-top: 70px">
            <div class="auto-container">
                <!-- Upper Box -->
                <div class="upper-box">
                    <div class="row clearfix">
                        <!-- Gallery Column -->
                        <div class="gallery-column col-md-4">
                            <div class="inner-column">
                                <div class="col-md-12 d-flex">
                                    <img :src="dataMovie.hinh_anh" alt class="img-thumbnail">
                                </div>
                            </div>
                        </div>
                        <!-- Content Column -->
                        <div class="content-column col-lg-6 col-md-12 col-sm-12">
                            <div class="inner-column">
                                <h3><b style="font-size: 2.5rem; font-weight: 500;"><b class="text-warning">{{
                                    getFirst(dataMovie.ten_phim) }} </b>
                                        <b class="text-danger ms-2">{{
                                            getWords(dataMovie.ten_phim) }}</b> </b></h3>

                                <div class="d-flex flex-wrap mt-4">
                                    <!-- Model -->
                                    <!-- Select Size -->
                                    <div class="select-size-box clearfix">
                                        <div class="select-box"><input type="radio" disabled name="payment-group"
                                                id="radio-two"><label for="radio-two"
                                                style="background-color: #557a7b !important; color: #fff;">4k
                                                -
                                                hdr</label></div>
                                        <div class="select-box"><input type="radio" disabled name="payment-group"
                                                id="radio-one"><label for="radio-one">t18</label></div>

                                    </div>
                                    <div>
                                        <h5><span class="text-danger ms-2">{{
                                            dataMovie.the_loai
                                        }}</span></h5>
                                    </div>
                                    <div class="d-flex align-middle mt-1 ms-3">
                                        <i class="fa-solid fa-calendar text-warning mt-1 me-2" style="font-size:1.1rem"></i>
                                        <b class="text-warning" style="font-size:1.1rem">2023</b>
                                    </div>
                                </div>
                                <!-- Price -->

                                <div class="text mt-2" style="color: #fff; font-size: 1.1rem;">{{
                                    dataMovie.mo_ta }}</div>
                                <div class="d-flex flex-wrap">
                                    <!-- Model -->
                                    <div class="model">
                                        <span class="model-title text-danger"><b>Đạo
                                                Diễn: </b> </span>
                                    </div>
                                    <!-- Select Size -->
                                    <div class="model">
                                        <span class="model-title text-warning"><b>{{
                                            dataMovie.dao_dien }}</b></span>
                                    </div>
                                </div>
                                <div class="d-flex flex-wrap">
                                    <!-- Model -->
                                    <div class="model">
                                        <span class="model-title text-danger"><b>Diễn
                                                Viên: </b></span>
                                    </div>
                                    <!-- Select Size -->
                                    <div class="model">
                                        <span class="model-title text-warning"><b>{{
                                            dataMovie.dien_vien }}</b></span>
                                    </div>
                                </div>
                                <div class="d-flex flex-wrap">
                                    <!-- Model -->
                                    <div class="model">
                                        <span class="model-title text-danger"><b>Ngôn
                                                Ngữ: </b></span>
                                    </div>
                                    <!-- Select Size -->
                                    <div class="model">
                                        <span class="model-title text-warning"><b>{{
                                            dataMovie.ngon_ngu }}</b></span>
                                    </div>
                                </div>
                                <!-- Categories -->
                                <div class="d-flex align-items-center flex-wrap mt-2">
                                    <!-- Button Box -->
                                    <div class="button-box">
                                        <button class="theme-btn btn-style-one button-primary" style>
                                            <b>Trailer</b>
                                        </button>
                                    </div>
                                    <div class="button-box">
                                        <a data-bs-toggle="modal" data-bs-target="#ticketModal"
                                            class="theme-btn btn-style-one button-secondary" style>
                                            <b>Đặt Vé Ngay</b>
                                        </a>
                                    </div>
                                    <!-- Quantity Box -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <div class="modal fade" id="ticketModal" tabindex="-1" aria-labelledby aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content" style="background-color: #0e1317;">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel"><b class=" text-danger">LỊCH CHIẾU CỦA PHIM </b>
                        <b class="text-warning">{{ dataMovie.ten_phim }}</b>
                    </h1>
                </div>
                <div class="modal-body" style="padding-bottom: 20px;">
                    <template v-if="dateTime.length == 0">
                        <b class="text-warning">PHIM HIỆN CHƯA CÓ LỊCH CHIẾU</b>
                    </template>
                    <template v-for="(v, k) in dateTime">
                        <template v-if="(k) == v.check">
                            <h6><b class="text-warning">Ngày : {{ v.ngay_chieu
                            }}</b></h6>
                            <template v-for="(v1, k1)  in dateTime">
                                <template v-if="v.check == v1.check">
                                    <button v-on:click="generateHref(v1.id_lich_chieu)" class="btn btn-danger me-2 mt-2">{{
                                        v1.gio_chieu }}</button>
                                </template>
                            </template>
                            <hr class="text-white">
                        </template>
                    </template>

                </div>
            </div>
        </div>
    </div>
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
</template>
<script>
import axios from '../../../core/axios_request'
import Preloader from '../../../layout/client/component_client/preloader.vue'
export default {
    components: {
        Preloader
    }, data() {
        return {
            dataMovie: [],
            listRcm: [],
            data_lc: {},
            dateTime: [],
            tt_lich: {},
            veXemPhim: {},
            hang_doc: 0,
            hang_ngangF: 0,
            dateObj: [],
            list_rcm: [],
        }
    }, mounted() {
        this.loadDataFromURL();
    }, methods: {
        loadDataFromURL() {
            this.loadData();
            this.handlePreloader();
            var currentURL = window.location.href;
            var parts = currentURL.split('/');
            var movieSlug = parts[parts.length - 1];
            let payload = {
                'slug_phim': movieSlug,
            }
            axios
                .post('/movie-details/dataset', payload)
                .then((res) => {
                    if (res.data.status) {
                        this.dataMovie = res.data.data;
                        this.data_lc = res.data.data_lc;
                        this.dateAndTime(this.data_lc);
                        this.listRcm = res.data.data_rcm;
                    } else {
                        this.dataMovie = res.data.data;
                        this.dateAndTime(this.data_lc);
                        this.listRcm = res.data.data_rcm;
                        toastr.error(res.data.message, 'Error !');
                    }

                });
        }, loadData() {
            axios.post('/homepage')
                .then(res => {
                    this.list_rcm = this.shuffleList(res.data.data);
                    console.log(this.list_rcm);
                })

        }, shuffleList(arr) {
            let arr1 = [...arr];
            for (let i = arr1.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [arr1[i], arr1[j]] = [arr1[j], arr1[i]];
            }
            console.log(arr1);
            return arr1.slice(0, 4);
        },
        getFirst(sentence) {
            if (sentence !== undefined) {
                var words = sentence.split(' ');
                var wordCount = words.length;
                if (wordCount > 3) {
                    return words[0] + ' ' + words[1];
                } else if (wordCount <= 3) {
                    return words[0];
                } else {
                    return '';
                }
            } else {
                return '';
            }
        },
        getWords(sentence) {
            if (sentence !== undefined) {
                var words = sentence.split(' ');
                var wordCount = words.length;
                if (wordCount > 4) {
                    var result = words.slice(2);
                } else if (wordCount > 1) {
                    var result = words.slice(1);
                } else {
                    var result = '';
                }
                return result.join(' ');
            } else {
                return '';
            }

        },
        sortArrayByDate(arr) {
            function compareDates(item1, item2) {
                const date1 = new Date(item1.ngay_chieu);
                const date2 = new Date(item2.ngay_chieu);
                return date1 - date2;
            }
            const sortedArr = arr.slice().sort(compareDates);
            return sortedArr;
        },
        dateAndTime(data) {
            for (var key in data) {
                let datetime, year, month, day, hours, minute, timeOnly, dateOnly;
                datetime = new Date(data[key].gio_bat_dau);
                year = datetime.getFullYear();
                month = datetime.getMonth() + 1;
                day = datetime.getDate();
                hours = datetime.getHours();
                minute = datetime.getMinutes();
                timeOnly = hours + ':' + minute;
                dateOnly = day + '/' + month + '/' + year;
                this.dateTime.push({
                    'gio_chieu': timeOnly,
                    'ngay_chieu': dateOnly,
                    'check': 0,
                    'id_lich_chieu': data[key].id,
                });
            }
            // this.dateTime = this.sortArrayByTime(this.dateTime);
            this.dateTime = this.sortArrayByDate(this.dateTime);

            let obj = {};
            let arr = [];
            for (let i = 0; i < this.dateTime.length; i++) {
                this.dateTime[i].check = i;
            }
            for (let i = 0; i < this.dateTime.length; i++) {
                this.dateObj.push(i);
                for (let j = i + 1; j < this.dateTime.length; j++) {
                    if (this.dateTime[i].ngay_chieu == this.dateTime[j].ngay_chieu) {
                        this.dateTime[j].check = this.dateTime[i].check;
                        break;
                    }
                }
            }
        },
        date_format(now) {
            return moment(now).format('DD/MM/yyyy HH:mm');
        },
        handlePreloader() {
            if ($('.loader-wrap').length) {
                $('.loader-wrap').delay(1000).fadeOut(500);
            }
            setTimeout(() => {
                $('.loader-wrap').css({
                    // 'display': 'none'
                });
            }, 1000);
        }
    }
}
</script>