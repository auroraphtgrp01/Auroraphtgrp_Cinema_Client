<template>
    <div id="movie_detail">
        <div class="col-md-12">
            <h3 class="text-center mt-4"><b class="text-danger">ĐẶT
                    VÉ
                    XEM PHIM</b></h3>
        </div>
        <section class="shoping-cart-section" style="padding: 20px 0">
            <div class="auto-container">
                <div class="row clearfix">
                    <div class="cart-column col-lg-8 col-md-12 col-sm-12 flex-fill">
                        <div class="row d-flex">
                            <div class="col-12">
                                <div class="card flex-fill" style="border: 3px #f05053 solid;">
                                    <div class="card-body" style="background-color: #0e1317;">
                                        <template v-if="hang_doc == 0 && hang_ngang == 0">
                                            <h4 class="text-center"><b class="text-danger">PHIM HIỆN
                                                    CHƯA
                                                    ĐƯỢC TẠO GHẾ</b></h4>
                                        </template>
                                        <div class="table-responsive">
                                            <table class="table table-bordered" id="table">
                                                <thead>
                                                    <tr>
                                                        <th colspan="100%" class="text-center align-middle"
                                                            style="background-color: #ED3232;">
                                                            <h5 class="text-white"><b>MÀN
                                                                    CHIẾU</b></h5>
                                                        </th>
                                                    </tr>
                                                    <tr style="height: 20px">
                                                        <td colspan="100%"></td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <template v-for="i in hang_doc">
                                                        <tr>
                                                            <template v-for="j in hang_ngang">
                                                                <th class="text-center align-middle">
                                                                    <template v-for="(v, k) in veXemPhim">
                                                                        <template
                                                                            v-if="k == ((i - 1) * hang_ngang + j - 1)">
                                                                            <div style="cursor: pointer;">
                                                                                <template v-if="v.tinh_trang == 0">
                                                                                    <i v-if="v.choose == 1"
                                                                                        v-on:click="v.choose = 0; unchooseTicket(v)"
                                                                                        class="text-success fa-solid fa-couch fa-2x"></i>
                                                                                    <i v-if="v.choose == 0"
                                                                                        v-on:click="v.choose = 1; chooseTicket(v)"
                                                                                        class="fa-solid fa-couch fa-2x text-white"></i>
                                                                                </template>
                                                                                <template v-else>
                                                                                    <i
                                                                                        class="text-danger fa-solid fa-couch fa-2x"></i>
                                                                                </template>
                                                                                <br>
                                                                                <span class="text-white">
                                                                                    {{
                                                                                        v.so_ghe
                                                                                    }}

                                                                                </span>
                                                                            </div>
                                                                        </template>
                                                                    </template>
                                                                </th>
                                                            </template>
                                                        </tr>
                                                    </template>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="total-column col-lg-4 col-md-12 col-sm-12 ">
                        <div class="card flex-fill" style="border: 3px #ff5e62 solid;">
                            <div class="card-body" style="background-color: #0e1317;">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th colspan="100%" class="text-center align-middle"
                                                style="background-color: #ED3232;">
                                                <h5 class="text-white"><b>ĐƠN HÀNG</b></h5>
                                            </th>
                                        </tr>
                                    </thead>
                                </table>
                                <hr>
                                <div class="card" style="border: 3px #ff5e62 solid;">
                                    <div class="card-body" style="background-color: #0e1317;">
                                        <div class="card-body">
                                            <div class="row mb-3">
                                                <div class="col-md-8">
                                                    <div class="col-md-12 mb-1">
                                                        <div class="col-md-12 mb-1">
                                                            <b class="text-warning">TÊN
                                                                PHIM: </b> <b class="text-white">{{ dataCart.ten_phim
                                                                }}</b>
                                                        </div>
                                                        <b class="text-warning">NGÀY
                                                            CHIẾU: </b> <b class="text-white">{{
                                                                formatDate(dataCart.gio_bat_dau) }}</b>
                                                    </div>
                                                    <div class="col-md-12 mb-1">
                                                        <b class="text-warning">GIỜ
                                                            BẮT ĐẦU: </b> <b class="text-white">{{
                                                                formatTime(dataCart.gio_bat_dau) }}</b>
                                                    </div>
                                                    <div class="col-md-12 mb-1">
                                                        <b class="text-warning">GIỜ
                                                            KẾT THÚC </b> <b class="text-white">{{
                                                                formatTime(dataCart.gio_ket_thuc) }}</b>
                                                    </div>
                                                    <div class="col-md-12 mb-1">
                                                        <b class="text-warning">RẠP:</b>
                                                        <b class="text-white">AURORAPHTGRP
                                                            CINEMA</b>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <img v-bind:src="dataCart.hinh_anh" class="img-thumbnail"
                                                        style="height: 150px; width: 350px; object-fit: cover;" alt>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="table-responsive">
                                                    <table class="table table-bordered">
                                                        <thead>
                                                            <th class="text-center align-middle text-bg-danger">#</th>
                                                            <th class="text-center align-middle text-bg-danger">SỐ
                                                                GHẾ</th>
                                                            <th class="text-center align-middle text-bg-danger">GIÁ
                                                                TIỀN</th>
                                                        </thead>
                                                        <tbody>
                                                            <template v-for="(v, k) in listCart">
                                                                <tr class="fadeIn">
                                                                    <th class="text-center align-middle text-danger"
                                                                        style="transition: 1s linear;">{{ k + 1 }}</th>
                                                                    <th class="text-center align-middle text-white"
                                                                        style="transition: 1s linear;">{{ v.so_ghe }}</th>
                                                                    <th class="text-center align-middle text-white"
                                                                        style="transition: 1s linear;">
                                                                        {{ formatCurrency(v.gia_ve) }}</th>
                                                                </tr>
                                                            </template>
                                                            <tr>
                                                                <th class="text-center align-middle text-danger"
                                                                    colspan="2">TỔNG
                                                                    TIỀN</th>
                                                                <th class="text-center align-middle text-danger">
                                                                    {{ formatCurrency(total) }}</th>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div class="text-end">
                                                    <button class="btn btn-success w-100"
                                                        v-on:click="paymentClick()"><b>THANH
                                                            TOÁN</b></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Shoping Cart Section -->
    </div>
    <!-- Scroll To Top -->

    <!-- Button trigger modal -->

    <!-- Modal -->

    <div class="scroll-to-top scroll-to-target" data-target="html"><span class="fa fa-arrow-up"></span></div>
    <!-- End Scroll To Top -->
    <div class="modal fade" data-bs-backdrop='static' id="payModal" tabindex="-1" aria-labelledby aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header d-flex">
                    <h1 class="modal-title fs-4 m-auto" id="exampleModalLabel"><b class=" text-danger"
                            style="user-select: none;">THANH
                            TOÁN VÉ XEM PHIM
                        </b> </h1>
                </div>
                <div class="modal-body" style="padding-bottom: 20px;">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <div class="inner-column">
                            <div class="row">
                                <div class="col-md-12 text-center mb-3" style="user-select: none;">
                                    <h4 style="user-select: none;">
                                        <div class="text-primary" style="font-size: 1rem; user-select: none !important;">Cảm
                                            ơn bạn đã
                                            tin tưởng lựa chọn dịch vụ của chúng
                                            tôi</div>
                                    </h4>
                                    <h4 style="user-select: none;">
                                        <div class="text-danger" style="font-size: 1rem; user-select: none !important;">Vui
                                            lòng hoàn
                                            thành việc thanh toán bằng 2 cách
                                            dưới đây </div>
                                    </h4>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-5">
                                    <div class="col-md-12">
                                        <div class="card">
                                            <div class="card-body">
                                                <h6 class="text-center" style="user-select: none !important;"><b
                                                        class="text-success">CHI
                                                        TIẾT ĐƠN HÀNG</b></h6>
                                                <hr style="margin-top: 0.5rem;">
                                                <div class="table-responsive">
                                                    <table class="table table-bordered"
                                                        style="user-select: none !important">
                                                        <thead>
                                                            <th class="text-center align-middle">#</th>
                                                            <th class="text-center align-middle">SỐ
                                                                GHẾ</th>
                                                            <th class="text-center align-middle">GIÁ
                                                                TIỀN</th>
                                                        </thead>
                                                        <tbody>
                                                            <div>{{ hang_doc }}</div>
                                                            <template v-for="(v, k) in listCartPayment">
                                                                <tr class="fadeIn">
                                                                    <th class="text-center align-middle text-danger">
                                                                        {{ k + 1 }}</th>
                                                                    <th class="text-center align-middle">{{ v.so_ghe }}
                                                                    </th>
                                                                    <th class="text-center align-middle">
                                                                        {{ formatCurrency(v.gia_ve) }} </th>
                                                                </tr>
                                                            </template>
                                                            <tr>
                                                                <th class="text-center align-middle" colspan="2">TỔNG
                                                                    TIỀN</th>
                                                                <th class="text-center align-middle text-danger">100.000đ
                                                                </th>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <!--  -->
                                <div class="col-md-7">
                                    <div class="card">
                                        <div class="card-body text-center row">
                                            <h6 class="text-center align-middle mb-2" style="user-select: none !important">
                                                <b class="text-success">THANH
                                                    TOÁN</b>
                                            </h6>
                                            <hr>
                                            <div class="col-md-6">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <h6 class="text-center"><b class="text-success"
                                                                style="user-select: none !important">THÔNG
                                                                TIN CHUYỂN
                                                                KHOẢN</b></h6>
                                                        <hr>
                                                        <div class="row">
                                                            <div class="col-md-12 text-start">
                                                                <h7 class><b class="text-danger"
                                                                        style="user-select: none !important">SỐ
                                                                        TÀI
                                                                        KHOẢN:</b></h7>
                                                                <b class="text-primary">04172252601</b>
                                                                <br>
                                                                <h7 class><b class="text-danger"
                                                                        style="user-select: none !important">CHỦ
                                                                        TÀI
                                                                        KHOẢN:</b></h7>
                                                                <b class="text-primary">LE
                                                                    MINH TUAN</b>
                                                                <br>
                                                                <h7 class><b class="text-danger"
                                                                        style="user-select: none !important">NGÂN
                                                                        HÀNG:</b></h7>
                                                                <b class="text-primary">TP
                                                                    BANK</b>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12 mt-2">
                                                    <button class="btn btn-success mt-2 w-100"><b>XÁC
                                                            NHẬN ĐÃ THANH
                                                            TOÁN</b></button>
                                                    <button class="btn btn-danger mt-2 w-100" data-bs-dismiss="modal"
                                                        aria-label="Close" style><b>HUỶ BỎ</b></button>
                                                </div>
                                                <div class="col-md-12 mt-2">
                                                    <div class="card">
                                                        <div class="card-body  text-start">
                                                            <!-- <h7 class="text-center"style="user-select: none !important" ><b class="text-warning">ĐANG CHỜ XÁC
                                                            NHẬN . . .</b></h7> <br> -->
                                                            <h7 class="text-center"><b class="text-success"
                                                                    style="user-select: none !important">THANH
                                                                    TOÁN THÀNH
                                                                    CÔNG !</b></h7>
                                                            <br>
                                                            <h7 class="text-center" style="font-size: 0.8rem;"><b
                                                                    class="text-primary"
                                                                    style="user-select: none !important">THÔNG
                                                                    TIN CHI
                                                                    TIẾT SẼ ĐƯỢC
                                                                    GỬI QUA
                                                                    EMAIL CỦA
                                                                    BẠN</b></h7>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <img src="/images/qrpay.png" style="width: 300px;" class="img-thumbnail"
                                                    alt>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from '../../../core/axios_request'

export default {
    components: {

    },
    data() {
        return {
            dataMovie: [],
            listRcm: [],
            data_lc: {},
            dateTime: [],
            tt_lich: {},
            veXemPhim: {},
            hang_doc: 0,
            hang_ngang: 0,
            dateObj: [],
            dataCart: {},
            listCart: [],
            listCartPayment: [{
                'gia_ve': 50,
                'so_ve': 50,
            }],
            total: 0,
        }
    }, mounted() {
        this.laodData()
    }, methods: {
        paymentModal() {
            this.listCartPayment = this.listCart;
            console.log(this.listCartPayment);

        },
        formatCurrency(number) {
            return new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND'
            }).format(number);
        },
        chooseTicket(payload) {
            this.listCart.push({
                'so_ghe': payload.so_ghe,
                'gia_ve': payload.gia_ve,
                'id_ve': payload.id
            });
            this.total += payload.gia_ve;
            console.log(this.listCart);
        },
        unchooseTicket(payload) {
            this.listCart.forEach((value, key) => {
                if (value.so_ghe == payload.so_ghe) {
                    this.listCart.splice(key, 1);
                }
            })
            this.total -= payload.gia_ve;
        },
        formatDate(dateTimeStr) {
            const dateTime = new Date(dateTimeStr);
            const day = dateTime.getDate().toString().padStart(2, '0');
            const month = (dateTime.getMonth() + 1).toString().padStart(2, '0');
            const year = dateTime.getFullYear();
            return `${day}/${month}/${year}`;
        },
        formatTime(dateTimeStr) {
            const dateTime = new Date(dateTimeStr);
            const hours = dateTime.getHours().toString().padStart(2, '0');
            const minutes = dateTime.getMinutes().toString().padStart(2, '0');
            return `${hours}:${minutes}`;
        },

        laodData(id) {
            var currentURL = window.location.href;
            const pathParts = currentURL.split('/');
            const id_lich_chieu = pathParts[pathParts.length - 1];
            const slug_phim = pathParts[pathParts.length - 3];
            var payload = {
                'slug': slug_phim,
                'id_lich_chieu': id_lich_chieu
            }

            console.log(payload);
            axios.post('/movie-detail/cart', payload)
                .then((res) => {
                    this.dataCart = res.data.data;
                    this.hang_ngang = res.data.data.hang_ngang;
                    this.hang_doc = res.data.data.hang_doc;
                    console.log(this.hang_ngang);

                    console.log(this.dataCart);
                })
            this.getVe(payload);
        },

        datVe() {
            axios
                .post('/movie-details/order', payload = {
                    'order': this.veXemPhim
                })
                .then((res) => {
                    if (res.data.status == 1) {
                        // toastr.success(res.data.message, 'Success');
                        $('#veModal').modal('hide');
                    } else if (res.data.status == -1) {
                        // toastr.error(res.data.message, 'Error');
                    } else {
                        // toastr.error(res.data.message, 'Error');
                    }
                });
        },
        sortArrayByTime(arr) {
            function convertTimeToMinutes(time) {
                const [hours, minutes] = time.split(':');
                return parseInt(hours, 10) * 60 + parseInt(minutes, 10);
            }

            function compareTimes(item1, item2) {
                const time1 = convertTimeToMinutes(item1.gio_chieu);
                const time2 = convertTimeToMinutes(item2.gio_chieu);
                return time1 - time2;
            }

            const sortedArr = arr.slice().sort(compareTimes);
            return sortedArr;
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
        date_format(now) {
            return moment(now).format('DD/MM/yyyy HH:mm');
        },
        // chooseChair(payload) {
        //     axios
        //         .post('/movie-details/status', payload)
        //         .then((res) => { });
        // },
        getVe(payload) {
            axios
                .post('/movie-details/get-ve', payload)
                .then((res) => {
                    if (res.data.status) {
                        this.veXemPhim = res.data.data;
                        console.log("sdsdsd");
                        if (this.veXemPhim.length) {
                            this.hang_doc = this.veXemPhim[0].hang_doc;
                            this.hang_ngang = this.veXemPhim[0].hang_ngang;

                        }
                    } else {
                        // toastr.error(res.data.message, 'Error !');
                    }
                });
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
        generateRandomString(length) {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let result = '';

            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * characters.length);
                result += characters.charAt(randomIndex);
            }

            return result;
        },
        paymentClick() {
            let payload = {
                'movie': this.dataCart,
                'cart': this.listCart,
                'hash': this.generateRandomString(10),
            }
            axios
                .post('/movie-detail/cart/payment', payload)
                .then((res) => {
                    window.location.href = res.data.url;
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        // toastr.error(v[0], 'Error');
                    });
                });
        },
        orderClick() {
            axios
                .post('/movie-details/order', payload = {
                    'order': this.veXemPhim
                })
                .then((res) => {
                    if (res.data.status == 1) {
                        // toastr.success(res.data.message, 'Success');
                        $('#veModal').modal('hide');
                    } else if (res.data.status == -1) {
                        // toastr.error(res.data.message, 'Error');
                    } else {
                        // toastr.error(res.data.message, 'Error');
                    }
                });
        }
    }
}
</script>
<style>
@import "../../../assets/client/css/fontawesome.css"
</style>