import React from 'react';

import TableHeader from '../table/TableHeader';
import TableBody from '../table/TableBody';

const Main = ( props ) => {
    return (
        <div className="row">
            <div className="col-sm-12">
                <table className="table">
                    <TableHeader />
                    <TableBody countries={ props.countries } />
                </table>
            </div>
        </div>
    );
}

export default Main;