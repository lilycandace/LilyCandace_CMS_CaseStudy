import axios from "axios";

const http = axios.create({
    // baseURL: "http://localhost:8080",
        baseURL: "http://13.232.111.227:8080",
    headers: {
        "Content-Type": "application/json"
    }
});

http.interceptors.request.use((config) => {

    const auth = JSON.parse(localStorage.getItem("auth"));

    if (auth?.token) {
        config.headers.Authorization = `Bearer ${auth.token}`;
    }

    return config;
});

export default http;

