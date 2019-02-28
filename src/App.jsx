import React, { Component } from 'react';

import './App.css';

import Header from './components/Header';

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

        const countries = data.map( ( country ) => {
            return (
                <tr key={ country.alpha3Code }>
                    <td>
                        { country.name }
                    </td>
                    <td>
                        <img src={ country.flag } width="30" alt="flag" />
                    </td>
                    <td>
                        { country.languages[ 0 ].name }
                    </td>
                </tr>
            );
        });

        return (
            <div className="container">
                <Header />
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>País</th>
                                <th>Bandera</th>
                                <th>Idioma</th>
                            </tr>
                        </thead>
                        <tbody>
                            { countries }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default App;