import React from 'react';

import logo from '../../logo.png';

const Header = () => {
    return (
        <div className="row mt-4 mb-4">
            <div className="col-sm-10">
                <h1>Países</h1>
                <h2>ReactJS Rest API</h2>
                <label>Powered by:</label>&nbsp;
                <a href="https://restcountries.eu/" target="_blank">REST Countries API</a>
            </div>
            <div className="col-sm-2">
                <img src={ logo } className="App-logo" alt="logo" />
            </div>
        </div>
    );
}

export default Header;