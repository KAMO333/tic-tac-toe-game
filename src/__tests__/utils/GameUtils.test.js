import { checkForWinner } from "../../utils/GameUtils/Index";

describe("Game Logic: checkForWinner", () => {
  test("should identify a winning row", () => {
    const board = ["x", "x", "x", null, "o", null, null, null, "o"];
    expect(checkForWinner(board)).toEqual([0, 1, 2]);
  });

  test("should identify a winning column", () => {
    const board = ["o", "x", null, "o", "x", null, "o", null, null];
    expect(checkForWinner(board)).toEqual([0, 3, 6]);
  });

  test("should identify a winning diagonal", () => {
    const board = ["x", null, "o", null, "x", "o", null, null, "x"];
    expect(checkForWinner(board)).toEqual([0, 4, 8]);
  });

  test("should return 'draw' when the board is full with no winner", () => {
    const board = ["x", "o", "x", "x", "o", "o", "o", "x", "x"];
    expect(checkForWinner(board)).toBe("draw");
  });

  test("should return false if there is no winner and the game is ongoing", () => {
    const board = ["x", null, null, null, "o", null, null, null, null];
    expect(checkForWinner(board)).toBe(false);
  });
});
