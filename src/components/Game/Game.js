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
  Typography,
} from "@material-ui/core";
import { data } from "../../data/phrases";

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
  const [phrases, setPhrases] = useState([]);
  

  useEffect(() => {
    let dataPhrases = shuffle(data.phrases);
    dataPhrases[12] = data.title
    console.log(dataPhrases)
    setPhrases(dataPhrases)
  }, [])
  function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

  const bingoPoints = [
    // row bingo
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],

    // column bingo
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24],
    [5, 10, 15, 20, 25],

    // diagonal bingo
    [1, 7, 13, 19, 25],
    [5, 9, 13, 17, 21],
  ];

  const handleCardClick = function (cardIndex) {
    let index = activeCards.indexOf(cardIndex);
    let cards = activeCards;

    if (index >= 0) {
      cards.splice(index, 1);
    } else {
      cards.push(cardIndex);
    }

    // indicates the selected cards
    setActiveCards([...cards]);
    checkIsBingo(cards, cardIndex);
  };

  const checkIsBingo = function (cards, cardIndex) {
    let bingoSets = [];
    for (let i in bingoPoints) {
      let set = bingoPoints[i];
      // get the bingo points for selected card index
      if (set.includes(cardIndex)) bingoSets.push(set);
    }

    for (let i in bingoSets) {
      setIsBingo(false);
      let set = bingoSets[i];
      if (isSubset(set, cards)) {
        setIsBingo(true);
        break;
      }
    }
  };

  const isSubset = function (set, arr) {
    let isPresent = true;
    for (let i in set) {
      let s = set[i];
      if (!arr.includes(s)) {
        isPresent = false;
        break;
      }
    }
    return isPresent;
  };

  // Shuffle
  // const shuffledPhrases = shuffle(data.phrases)
  // const textPhrase = shuffledPhrases.splice(12,0,data.title);

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
