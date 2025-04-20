import axios from "axios"
import { BACKEND_API } from "../config"

const api = axios.create({
    baseURL: BACKEND_API,
})

export default api