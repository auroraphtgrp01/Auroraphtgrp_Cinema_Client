import axios from 'axios'

const apiUrl = 'https://minhtuandng.dzloye.com/api';

export default {
    getHeader() {
        let token = window.localStorage.getItem('token');
        if (token == null) {
            return {}
        }
        return { Authorization: 'Bearer' + token }
    }, get(url) {
        return axios.get(apiUrl + url, { headers: this.getHeader() })
    }, post(url, data) {
        return axios.post(apiUrl + url, data, { headers: this.getHeader() })
    }
}