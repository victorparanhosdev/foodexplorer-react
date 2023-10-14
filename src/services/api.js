import Axios from "axios"

export const api = Axios.create({
    baseURL: "https://foodexplorer-api-ghd3.onrender.com/"
})