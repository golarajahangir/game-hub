import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '3683fa895bac479daf84ca0810cd4b0e'
    }
})

