import React from 'react';

const TableBodyRow = ( props ) => {
    return (
        <tr>
            <td><img src={ props.country.flag } width="30" alt="flag" /></td>
            <td>{ props.country.name }</td>
            <td>{ props.country.capital }</td>
            <td>{ props.country.languages[ 0 ].name }</td>
            <td>{ props.country.currencies[ 0 ].code }</td>
        </tr>
    );
}

export default TableBodyRow;