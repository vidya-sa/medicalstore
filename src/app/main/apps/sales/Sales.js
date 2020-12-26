import React from 'react'
import SalesHead from './SalesHead';
import SalesTable from './SalesTable';

function Sales() {
    return (
        <div>
            {<SalesHead />}
			{<SalesTable />}
        </div>
    )
}

export default Sales
