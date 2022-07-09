import axios from "axios";

const api = axios.create({
    baseURL: "https://diary.haenu.xyz",
})

export default api;
