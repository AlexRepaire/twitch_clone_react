import axios from 'axios';

let api = axios.create({
    headers: {
        "Client-ID" : "secret",
        "Authorization": "Bearer secret",
    }
})

export default api;
