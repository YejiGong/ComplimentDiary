import axios from "axios";

const api = axios.create({
    baseURL: "https://diary-api.haenu.xyz",
})

export default api;
