import React, { Component } from 'react';

import './App.css';

import Header from './components/layout/Header';
import Main from './components/layout/Main';

class App extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            data: []
        };
    }

    componentDidMount() {
        const url = 'https://restcountries.eu/rest/v2/all';

        fetch( url )
            .then( response => response.json() )
            .then( countries => {
                this.setState({ data: countries })
            });
    }

    render() {
        const { data } = this.state;

        return (
            <div className="container">
                <Header />
                <Main countries={ data } />
            </div>
        );
    }
}

export default App;