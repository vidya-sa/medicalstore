import React from 'react'
import SalesHead from './SalesHead'

function SalesTable() {
    return (
        <div>
            
										<TableCell className="p-4 md:p-16" component="th" scope="row">
											{n.name}
										</TableCell>

										<TableCell className="p-4 md:p-16 truncate" component="th" scope="row">
											{n.categories.join(', ')}
										</TableCell>

										<TableCell className="p-4 md:p-16" component="th" scope="row" align="right">
											<span>$</span>
											{n.priceTaxIncl}
										</TableCell>

										<TableCell className="p-4 md:p-16" component="th" scope="row" align="right">
											{n.quantity}
											<i
												className={clsx(
													'inline-block w-8 h-8 rounded mx-8',
													n.quantity <= 5 && 'bg-red',
													n.quantity > 5 && n.quantity <= 25 && 'bg-orange',
													n.quantity > 25 && 'bg-green'
												)}
											/>
										</TableCell>
            <SalesHead />
        </div>
    )
}

export default SalesTable
