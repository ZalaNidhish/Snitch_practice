import axios from "axios";

export const api = axios.create({
    baseURL: "https://snitch-practice.onrender.com/api"
})