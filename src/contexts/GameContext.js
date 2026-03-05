import { createContext, useState } from "react";
import { genConfig } from "react-nice-avatar";
import { checkForWinner } from "../utils/GameUtils/Index";
import RoundOverModal from "../components/Modal/RoundOverModal/RoundOverModal";

export const GameContext = createContext({});

export const GameContextProvider = (props) => {
  const [game, setGame] = useState({
    board: [null, null, null, null, null, null, null, null, null],
    player1: {
      choice: "x",
      name: "Player1",
      score: 0,
      color: "#8437f9",
      avatarConfig: genConfig(),
    },
    player2: {
      choice: "o",
      name: "Player2",
      score: 0,
      color: "#f9c811",
      avatarConfig: genConfig(),
    },
    turn: "x",
    roundWinner: "",
    winningCombo: [],
  });

  const updateBoard = (index, handleModal, winSfx) => {
    // Guard clause: if cell is taken or game is already won
    if (game.board[index] !== null || game.roundWinner) return;

    const updatedBoard = [...game.board];
    updatedBoard[index] = game.turn;

    const result = checkForWinner(updatedBoard);

    if (result) {
      setGame((prev) => ({
        ...prev,
        board: updatedBoard,
      }));
      // Pass the handlers to roundComplete
      roundComplete(result, handleModal, winSfx);
    } else {
      setGame((prev) => ({
        ...prev,
        board: updatedBoard,
        turn: prev.turn === "x" ? "o" : "x",
      }));
    }
  };

  const resetBoard = () => {
    setGame({
      ...game,
      board: [null, null, null, null, null, null, null, null, null],
      turn: "x",
      winningCombo: [],
      roundWinner: "",
    });
  };

  const restartGame = () => {
    setGame({
      board: [null, null, null, null, null, null, null, null, null],
      player1: {
        choice: "x",
        name: "Player1",
        score: 0,
        color: "#8437f9",
        avatarConfig: genConfig(),
      },
      player2: {
        choice: "o",
        name: "Player2",
        score: 0,
        color: "#f9c811",
        avatarConfig: genConfig(),
      },
      turn: "x",
      roundWinner: "",
      winningCombo: [],
    });
  };

  const toggleChoice = (choice) => (choice === "x" ? "o" : "x");

  const switchTurn = () => {
    setGame((prevGame) => ({
      ...prevGame,
      player1: {
        ...prevGame.player1,
        choice: toggleChoice(prevGame.player1.choice),
      },
      player2: {
        ...prevGame.player2,
        choice: toggleChoice(prevGame.player2.choice),
      },
      turn: "x",
    }));
  };

  const updateScore = (winner, result) => {
    if (winner === "draw") {
      setGame((prevGame) => ({
        ...prevGame,
        player1: { ...prevGame.player1, score: prevGame.player1.score + 0.5 },
        player2: { ...prevGame.player2, score: prevGame.player2.score + 0.5 },
        roundWinner: "",
        winningCombo: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      }));
    } else {
      setGame((prevGame) => ({
        ...prevGame,
        [winner]: {
          ...prevGame[winner],
          score: prevGame[winner].score + 1,
        },
        roundWinner: prevGame[winner],
        winningCombo: result,
      }));
    }
  };

  const roundComplete = (result, handleModal, winSfx) => {
    if (game.turn === game.player1.choice && result !== "draw") {
      updateScore("player1", result);
      winSfx();
    } else if (game.turn === game.player2.choice && result !== "draw") {
      updateScore("player2", result);
      winSfx();
    } else {
      updateScore("draw", result);
    }

    // Modal pops up after a short delay so user sees the win
    setTimeout(() => {
      handleModal(<RoundOverModal />);
    }, 2000);

    switchTurn();
  };

  return (
    <GameContext.Provider
      value={{
        game,
        updateBoard,
        resetBoard,
        roundComplete,
        restartGame,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
