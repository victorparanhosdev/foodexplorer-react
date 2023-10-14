import Axios from "axios"

export const api = Axios.create({
    baseURL: "https://foodexplorer-api-mbum.onrender.com/"
})