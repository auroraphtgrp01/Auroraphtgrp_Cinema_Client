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
        }
    }, mounted() {

        this.loadDataFromURL();
    }, methods: {
        loadDataFromURL() {
            this.handlePreloader();
            var currentURL = window.location.href;
            var parts = currentURL.split('/');
            var movieSlug = parts[parts.length - 1];
            let payload = {
                'slug_phim': movieSlug,
            }
            console.log(payload);

            axios
                .post('/movie-details/dataset', payload)
                .then((res) => {
                    // console.log(res.data);
                    if (res.data.status) {
                        this.dataMovie = res.data.data;
                        this.data_lc = res.data.data_lc;
                        this.dateAndTime(this.data_lc);
                        this.listRcm = res.data.data_rcm;
                        console.log(this.dataMovie);
                    } else {
                        this.dataMovie = res.data.data;
                        this.dateAndTime(this.data_lc);
                        this.listRcm = res.data.data_rcm;
                        toastr.error(res.data.message, 'Error !');
                    }

                });
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