import React, { useContext } from "react";
import { CellStyle } from "./GameCell.styled";
import { GameContext } from "../../contexts/GameContext";
import { ModalContext } from "../../contexts/ModalContext";
import RoundOverModal from "../Modal/RoundOverModal/RoundOverModal"
import { checkForWinner } from "../../utils/GameUtils/Index";
import { ReactComponent as IconX } from "../../assets/svgs/icon-x.svg";
import { ReactComponent as XIconOutline } from "../../assets/svgs/icon-x-outline.svg";
import { ReactComponent as IconO } from "../../assets/svgs/icon-o.svg";
import { ReactComponent as OIconOutline } from "../../assets/svgs/icon-o-outline.svg";

const GameCell = ({ cellItem, index }) => {
  const { updateBoard, game } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);

  const cellClickHandler = () => {
    updateBoard(index);
    if (checkForWinner(game.board)) {
      handleModal(<RoundOverModal />);
    }
  };

  if (cellItem === "x") {
    return (
      <CellStyle>
        <IconX className="markedItem" />
      </CellStyle>
    );
  } else if (cellItem === "o") {
    return (
      <CellStyle>
        <IconO className="markedItem" />
      </CellStyle>
    );
  }
  return (
    <CellStyle onClick={cellClickHandler}>
      {game.turn === "x" ? (
        <XIconOutline className="outLineIcon" />
      ) : (
        <OIconOutline className="outLineIcon" />
      )}
    </CellStyle>
  );
};

export default GameCell;
