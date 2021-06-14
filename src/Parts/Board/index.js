import React, { useState, useEffect } from 'react'
import Row from '../Row'

// import { phrases } from "../../data";
import {phrases} from "../../data/phrases";

const Board = () => {
    // const [cellArray, setCellArray] = useState([])
    // useEffect(() => {
    //     setCellArray
    // }, [])
    
    return (
        <div className="board">
            {
                [0,1,2,3,4].map(e => (
                    <>
                        <Row b={e} key={`Board_${e}`}/>
                        <br/>
                    </>
                ))
            }
        </div>
    )
}

export default Board
