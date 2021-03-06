import React, {useEffect, useState} from 'react';
import api from "../../services/api";
import {Link, useLocation, useParams} from "react-router-dom";
import './GameStreams.css';

const GameStreams = () => {
    let {slug} = useParams();
    let location = useLocation();

    const [streamData, setStreamData] = useState([]);
    const [viewers, setViewers] = useState(0);

    useEffect( ()=>{
        const fetchData = async () => {
            const result = await api.get(
                `https://api.twitch.tv/helix/streams?game_id=${location.state.gameID}`
            );
            let dataArray = result.data.data;
            let finalArray = dataArray.map(stream => {
                let newUrl = stream.thumbnail_url.replace('{width}',"320").replace('{height}', "180");
                stream.setThumbnailUrl = newUrl;
                return stream;
            })

            let totalViewers = finalArray.reduce((acc,val)=>{
                return acc + val.viewer_count;
            },0);

            let userIDs = dataArray.map(stream => {
                return stream.user_id;
            })

            let baseUrl = "https://api.twitch.tv/helix/users?";
            let queryParamsUsers = "";

            userIDs.map(id => {
                return (queryParamsUsers = queryParamsUsers + `id=${id}&`)
            })
            let finalUrl = baseUrl + queryParamsUsers;

            let getUsersLogin = await api.get(finalUrl);

            let userLoginArray = getUsersLogin.data.data;
            finalArray = dataArray.map(stream => {
                stream.login = '';
                userLoginArray.forEach(login => {
                    if (stream.user_id === login.id) {
                        stream.login = login.login;
                    }

                })
                return stream;
            })
            setViewers(totalViewers);
            setStreamData(finalArray);
        }
        fetchData();
    },[])

    return (
        <div>
            <h1 className="titreGamesStreams">Streams : {slug}</h1>
            <h3 className="sousTitreGameStreams">
                <strong className="textColored">{viewers}</strong> personnes regardent {slug}
            </h3>
            <div className="flexAccueil">
                {streamData.map((stream,index) => (
                    <div key={index} className="carteGameStreams">
                        <img src={stream.thumbnail_url} alt="Jeu carte img" className="imgCarte"/>
                        <div className="cardBodyGameStreams">
                            <h5 className="titreCartesStream">{stream.user_name}</h5>
                            <p className="txtStream">Nombre de viewers : {stream.viewer_count}</p>

                            <Link className="lien"
                            to={{
                                pathname : `/live/${stream.login}`
                            }}>
                                <div className="btnCarte">Regarder {stream.user_name}</div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GameStreams;