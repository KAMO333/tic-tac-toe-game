import React, { useContext } from "react";
import { CellStyle } from "./GameCell.styled";
import { GameContext } from "../../contexts/GameContext";
import { checkForWinner } from "../../utils/GameUtils/Index";

const GameCell = ({ cellItem, index }) => {
  const { updateBoard, game } = useContext(GameContext);

  const cellClickHandler = () => {
    updateBoard(index);
    checkForWinner(game.board);

    // if(results) {
 
    // }
  };
  return <CellStyle onClick={cellClickHandler}>{cellItem}</CellStyle>;
};

export default GameCell;
