import React, {useEffect, useState} from 'react';
import ReactTwitchEmbedVideo from "react-twitch-embed-video";
import {useParams} from "react-router-dom";
import api from "../../services/api";
import './live.css';

const Live = () => {
    const {nom} = useParams();

    const [infoStream, setInfoStream] = useState([]);
    const [infoGame, setInfoGame] = useState([]);

    const fetchData = async () => {
        const result = await api.get(`https://api.twitch.tv/helix/streams?user_login=${nom}`)
        const gameID = result.data.data.map(gameId=>{
            return gameId.game_id;
        })

        const resultNomGame = await api.get(`https://api.twitch.tv/helix/games?id=${gameID}`)

        const nomJeu = resultNomGame.data.data.map(gameName=>{
            return gameName.name;
        })
        setInfoGame(nomJeu);
        setInfoStream(result.data.data[0]);
    }

    useEffect(()=>{
       fetchData();
    },[nom])

    return (
        <div className="containerDecale">
            <ReactTwitchEmbedVideo height="754" width="100%" channel={nom}/>
            <div className="contInfo">
                <div className="titreStream">{infoStream.title}</div>
                <div className="viewer">Viewers : {infoStream.viewer_count}</div>
                <div className="infogame">Streamer : {infoStream.user_name}, &nbsp; Langue : {infoStream.language}</div>
                <div className="nomJeu">Jeu : {infoGame}</div>
            </div>
        </div>
    );
};

export default Live;