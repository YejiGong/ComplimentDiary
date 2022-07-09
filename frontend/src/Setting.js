import axios from "axios";

const api = axios.create({
    baseURL: "http://15.164.166.89",
})

export default api;