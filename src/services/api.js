import Axios from "axios"

export const api = Axios.create({
    baseURL: "http://foodexplorer-api-m2lk.onrender.com/"
})