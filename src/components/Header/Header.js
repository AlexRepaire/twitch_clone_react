import React, {useEffect, useState} from 'react';
import logo from '../../assets/IconeTwitch.svg';
import search from '../../assets/Search.svg';
import menuIco from '../../assets/MenuIco.svg';
import './header.css';
import {Link} from "react-router-dom";
import croix from '../../assets/Croix.svg';

const Header = () => {

    const [showMenu, setShowMenu] = useState(false);
    const [smallScreen, setSmallScreen] = useState(false);
    const [searchInput, setSearchInput] = useState('');

    useEffect(()=>{
        const mediaQuery = window.matchMedia("(max-width: 900px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        }
    },[])

    const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
            setSmallScreen(true);
        } else {
            setSmallScreen(false);
        }
    }

    const toggleNavRes = () => {
        setShowMenu(!showMenu);
    }

    const hideMenu = () =>{
        if (showMenu === true){
            setShowMenu(!showMenu);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    const handleKeyPress = e => {
        setSearchInput(e.target.value);
    }

    return (
        <div>
            <nav className="headerTop">
                {(showMenu || !smallScreen) && (
                <ul className="listeMenu">
                    <li className="liensNav" onClick={hideMenu}>
                        <Link className="lien" to="/">
                            <img src={logo} className="logo" alt="logo twitch"/>
                        </Link>
                    </li>
                    <li className="liensNav" onClick={hideMenu}>
                        <Link className="lien" to="/">
                            Top Jeux
                        </Link>
                    </li>
                    <li className="liensNav" onClick={hideMenu}>
                        <Link className="lien" to="/top-streams">
                            Top Streams
                        </Link>
                    </li>
                    <li className="liensNav">
                        <form className="formSubmit" onSubmit={handleSubmit}>
                            <input required value={searchInput} onChange={(e) => handleKeyPress(e)} type="text" className="inputRecherche"/>
                            <Link
                                className="lien"
                                to={{
                                    pathname: `/resultats/${searchInput}`
                                }}>
                                <button type="submit">
                                    <img src={search} alt="icone loupe" className="logoLoupe"/>
                                </button>
                            </Link>

                        </form>
                    </li>
                </ul>
                )}
            </nav>
            <div className="menuResBtn">
                <img onClick={toggleNavRes} src={!showMenu ? menuIco : croix} alt="icone menu responsive" className="menuIco"/>
            </div>
        </div>
    );
};

export default Header;