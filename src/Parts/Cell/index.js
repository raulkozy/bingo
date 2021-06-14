import React, { useState, useEffect } from 'react'
import { phrases } from "../../data/phrases";

const Cell = ({ p1, p2 }) => {
    const [cellArray, setCellArray] = useState([...phrases])
    const [selectedIndex, setSelectedIndex] = useState([[0,[]],[1,[]],[2,[2]],[3,[]],[4,[]]])
    
    
    function sliceIntoChunks(arr, chunkSize) {
        const res = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            const chunk = arr.slice(i, i + chunkSize);
            res.push(chunk);
        }
        return res;
    }
    
    // useEffect(() => {
    //     console.log('useEffect')
    //     setCellArray(sliceIntoChunks(phrases,5))
    //     console.log('useEffect')

    // }, [])

    function handleCell(p1,p2) {
        // let selectedList = selectedIndex;
        let selectedRowItem = selectedIndex[p1];
        if(selectedRowItem[1].length === 5) {
            console.log('Bingo !')
        }
        if(p1!==2 && p2!==2){
            if(selectedRowItem[1].includes(p2))
            {
                selectedRowItem[1].push(p2)
            }
            else {
                selectedRowItem[1].splice(p2, 1)
            }
        }

    }
    
    return (
        <>
        {
            // cellArray ?
            <div className="cell">
                {
                    (p1===2 && p2===2) ? 
                    '*':
                    cellArray[p1+p2]
                }
            </div>
            // : <div/>
        }
        </>
    )
}

export default Cell
