import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:8080",
        // baseURL: "http://43.205.215.91:8080",
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

