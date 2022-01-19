import React from 'react';
import axios from 'axios'

import { toast } from 'react-toastify'


axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.response.use(null, error => {

    const excepted = error.response &&

        error.response.status >= 300 &&
        error.response.status < 500;

    if (!excepted) {
        toast.error("مشکلی از سمت سرور رخ داده است.", {
            position: "top-right",
            closeOnClick: true
        });

    }


});

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}