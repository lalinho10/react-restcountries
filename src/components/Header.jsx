import React from 'react';

import logo from '../logo.svg';

const Header = () => {
    return (
        <div className="row">
            <div className="col-sm-2">
                <img src={ logo } className="App-logo" alt="logo" />
            </div>
            <div className="col-sm-10">
                <h1>API Rest Countries</h1>
            </div>
        </div>
    );
}

export default Header;