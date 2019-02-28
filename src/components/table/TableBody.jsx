import React from 'react';

import TableBodyRow from './TableBodyRow';

const TableBody = ( props ) => {
    const countriesRows = props.countries.map( ( country ) => {
        return (
            <TableBodyRow key={ country.alpha3Code } country={ country } />
        );
    });

    return (
        <tbody>
            { countriesRows }
        </tbody>
    );
}

export default TableBody;