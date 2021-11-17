import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import api from "../../services/api";
import './Resultats.css';

const Resultats = () => {

    let {slug} = useParams();

    const [result, setResult] = useState(true);
    const [streamerInfo, setStreamerInfo] = useState([]);

    let cleanSearch = slug.replace(/ /g,'');

    useEffect(()=>{
       const fetchData = async () => {
           const result = await api.get(`https://api.twitch.tv/helix/users?login=${cleanSearch}`)
           setStreamerInfo(result.data.data);
       }
       fetchData();
    },[])

    return (
        <div>
            <div className="containerDecaleResultats">
                <h4>Résultats de recherche : </h4>
                {streamerInfo.map((stream, index) => (
                    <div className="carteResultats" key={index}>
                        <img src={stream.profile_image_url} alt="resultat profile" className="imgCarte"/>
                        <div className="cardBodyResultats">
                            <h5 className="titreCartesStream">{stream.displayName}</h5>
                            <div className="txtResult">
                                {stream.description}
                            </div>

                            <Link
                                className="lien"
                                to={{
                                    pathname: `/live/${stream.login}`
                                }}
                            >
                                <div className="btnCarte btnResult">Regarder {stream.displayName}</div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Resultats;