import axios from 'axios';

const instance = axios.create({
    // baseURL : 'http://cia_church.test/'
});

// instance.defaults.baseURL = process.env.VUE_APP_URL || process.env.apiUrl || 'NO AUTHORIZATION NEEDED';
instance.defaults.baseURL = 'http://exams.test/';
instance.defaults.headers.common['Authorization'] = localStorage.getItem('token');
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

instance.interceptors.request.use(
    function(config) {
        // Do something before request is sent

        return config;
    },
    function(error) {

        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    function(response) {
        // console.log(response.data.data);
        // Do something with response data
        return response;
    },
    function(error) {

        return Promise.reject(error);
    }
);
export default instance;