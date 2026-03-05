import React, { useContext } from "react";
import { render, act, screen } from "@testing-library/react";
import { GameContext, GameContextProvider } from "../../contexts/GameContext";

// Helper component to test context actions
const TestConsumer = () => {
  const { game, updateBoard, resetBoard } = useContext(GameContext);
  return (
    <div>
      <span data-testid="turn">{game.turn}</span>
      <span data-testid="board">{JSON.stringify(game.board)}</span>
      <button onClick={() => updateBoard(0)}>Update Cell 0</button>
      <button onClick={resetBoard}>Reset</button>
    </div>
  );
};

describe("GameContext Logic", () => {
  test("should initialize with an empty board and turn X", () => {
    render(
      <GameContextProvider>
        <TestConsumer />
      </GameContextProvider>,
    );
    expect(screen.getByTestId("turn").textContent).toBe("x");
    const board = JSON.parse(screen.getByTestId("board").textContent);
    expect(board).toEqual(Array(9).fill(null));
  });

  test("should update board and switch turn when updateBoard is called", () => {
    render(
      <GameContextProvider>
        <TestConsumer />
      </GameContextProvider>,
    );

    const button = screen.getByText("Update Cell 0");

    act(() => {
      button.click();
    });

    expect(screen.getByTestId("turn").textContent).toBe("o");
    const board = JSON.parse(screen.getByTestId("board").textContent);
    expect(board[0]).toBe("x");
  });

  test("should reset board to initial state", () => {
    render(
      <GameContextProvider>
        <TestConsumer />
      </GameContextProvider>,
    );

    act(() => {
      screen.getByText("Update Cell 0").click();
      screen.getByText("Reset").click();
    });

    const board = JSON.parse(screen.getByTestId("board").textContent);
    expect(board).toEqual(Array(9).fill(null));
    expect(screen.getByTestId("turn").textContent).toBe("x");
  });
});
