import axios from 'axios';

let api = axios.create({
    headers: {
        "Client-ID" : "6vz1fcbuxqqcbw7j1g40g3nu8oyqvd",
        "Authorization": "Bearer udk95gn8fm4oaq7rprq33z18nd1cfh",
    }
})
/*
    CLIENT_ID = '6vz1fcbuxqqcbw7j1g40g3nu8oyqvd';
    REDIRECT = 'http://127.0.0.1/';

    LIEN AUTH = https://id.twitch.tv/oauth2/authorize?client_id=6vz1fcbuxqqcbw7j1g40g3nu8oyqvd&redirect_uri=https://127.0.0.1/&response_type=token


*/
export default api;