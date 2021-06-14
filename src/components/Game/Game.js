import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "../Cards/Card";
import "./Game.css";
import {
  Table,
  Paper,
  TableContainer,
  TableBody,
  TableRow,
  TableCell,
  Box,
  Typography,
} from "@material-ui/core";
import { phrases } from "../../data/phrases";

const useStyles = makeStyles({
  root: {
    maxWidth: 680,
    margin: "auto",
    padding: "15px 0",
    "& .MuiTableCell-root": {
      border: "solid 2px #ccc",
      padding: 0,
    },
  },
  title: {
    marginBottom: 15,
  },
});

const Game = () => {
  const classes = useStyles();
  const [isBingo, setIsBingo] = useState(false);
  const [activeCards, setActiveCards] = useState([13]);
  let [bingoCount, setBingoCount] = useState(0);

  const handleCardClick = async function (cardIndex) {
    if(isBingo){
        await setIsBingo(!isBingo)
        console.log("isBingo veing set ???")
    }
    let index = activeCards.indexOf(cardIndex);
    let cards = activeCards;

    if (index >= 0) {
      cards.splice(index, 1);
    } else {
      cards.push(cardIndex);
      cards.sort((a, b) => a - b);
    }
    // indicates the selected cards
    setActiveCards([...cards]);

    if (cards.length > 5 || cards.length % 5 === 0) {
      console.log(cards);
      checkForBingoRowAndColumn(cards);
    }
  };

  // const checkForBingoDiagonal = function (arr) {
  //     console.log(`checkForBingoDiagonal called `)
  //     const bingoPoints = [
  //         [1,7,19,25],
  //         [5,9,17,21]
  //     ]

  //     for(let point of bingoPoints) {
  //         let m = arr.length;
  //         let n = arr.length;
  //         // console.log(arr)
  //         console.log(isSubset(arr,point,m,n));
  //         // if(isSubset(arr,point,m,n)) {
  //         //     setIsBingo(true)
  //         // }
  //     }
  // }

  const checkForBingoRowAndColumn = function (arr) {
    console.log(`checkForBingoRowAndColumn`);
    const bingoPoints = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
      [1, 6, 11, 16, 21],
      [2, 7, 12, 17, 22],
      [3, 8, 13, 18, 23],
      [4, 9, 14, 19, 24],
      [5, 10, 15, 20, 25],
      [1, 7, 13, 19, 25],
      [5, 9, 13, 17, 21],
    ];

    // [1,2,3,4,5,13]
    // [1,2,3,4,5]
    // setIsBingo(false);
    for (let point of bingoPoints) {
      let m = arr.length;
      let n = point.length;
      console.log((arr.length-1)%5, arr.length);
      if (isSubset(arr, point, m, n) && ((arr.length-1)%5===0)) {
        setIsBingo(true);
        // console.log("isBingo true");
        // setIsBingo(false)
      }
    }
  };
  const isSubset = function (arr1, arr2, m, n) {
    let i = 0;
    let j = 0;
    for (i = 0; i < n; i++) {
      for (j = 0; j < m; j++)
        if (arr2[i] == arr1[j]) {
          break;
        }

      if (j == m) {
        return false;
      }
    }

    return true;
  };

  return (
    <div className={classes.root}>
      <Typography
        variant="h2"
        component="h1"
        className={classes.title + (isBingo ? " is-bingo" : "")}
      >
        {isBingo ? "You got a BINGO" : "Play Bingo"}
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {[1, 2, 3, 4, 5].map((i) => {
              return (
                <TableRow key={"row_" + i}>
                  {[1, 2, 3, 4, 5].map((j) => {
                    let cardIndex = 5 * (i - 1) + j;
                    let cardText = phrases[cardIndex - 1];

                    return (
                      <TableCell
                        className="table-cell"
                        key={"card_" + cardIndex}
                      >
                        <Card
                          className="Card"
                          cardIndex={cardIndex}
                          cardText={cardText}
                          handleCardClick={handleCardClick}
                        />
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Game;
