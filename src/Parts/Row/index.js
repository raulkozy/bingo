import React from 'react'
import Cell from '../Cell'

const Row = ({b}) => {
    return (
        <div className='row'>
            {
                [0,1,2,3,4].map(e => <Cell key={`Row_${e}`} p1={b} p2={e} />)
            }
        </div>
    )
}

export default Row
