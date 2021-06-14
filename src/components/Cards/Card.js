import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CssBaseline, Collapse } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    // minWidth: ,
  },
  card: {
    border: 0,
    borderRadius: 0,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    "&:hover .MuiButton-text": {
      backgroundColor: "#9999ff",
    },
    "&.active .MuiButton-text": {
      backgroundColor: "#3333ff",
      color: "#fff",
    },
  },
  cardBtn: {
    color: "#111",
    borderRadius: 0,
    position: "absolute",
    bottom: 0,
    left: 0,
    top: 0,
    width: "100%",
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const { cardText, cardIndex } = props;
  const bull = <span className={classes.bullet}>•</span>;

  const [isActive, setIsActive] = useState(false);

  const handleClickBox = function () {
    setIsActive(!isActive);
    props.handleCardClick(cardIndex);
  }

  return (
    <Card variant="outlined" className={classes.card + (isActive || cardIndex == 13 ? " active" : "")}>
      <Button className={classes.cardBtn} onClick={handleClickBox} disabled={cardIndex == 13}>
        <Typography variant="body2" component="p">
          {cardText}
        </Typography>
      </Button>
    </Card>
  );
}

    //   <CardActions>
    //     <Button size="small">Learn More</Button>
    //   </CardActions>