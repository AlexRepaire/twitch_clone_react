import React from 'react';
import logo from '../../assets/IconeTwitch.svg';
import search from '../../assets/Search.svg';
import menuIco from '../../assets/MenuIco.svg';
import './header.css';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav className="headerTop">
                <ul className="listeMenu">
                    <li className="liensNav">
                        <Link className="lien" to="/">
                            <img src={logo} className="logo" alt="logo twitch"/>
                        </Link>
                    </li>
                    <li className="liensNav">
                        <Link className="lien" to="/">
                            Top Jeux
                        </Link>
                    </li>
                    <li className="liensNav">
                        <Link className="lien" to="/top-streams">
                            Top Streams
                        </Link>
                    </li>
                    <li className="liensNav">
                        <form className="formSubmit">
                            <input type="text" className="inputRecherche"/>
                            <button type="submit">
                                <img src={search} alt="icone loupe" className="logoLoupe"/>
                            </button>
                        </form>
                    </li>
                </ul>
            </nav>

            <div className="menuResBtn">
                <img src={menuIco} alt="icone menu responsive" className="menuIco"/>
            </div>
        </div>
    );
};

export default Header;