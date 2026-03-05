import { render, screen, fireEvent } from "@testing-library/react";
import GameCell from "../../components/GameCell/GameCell";
import { GameContext } from "../../contexts/GameContext";
import { SfxContext } from "../../contexts/SfxContext";
import { ModalContext } from "../../contexts/ModalContext";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../styles/theme";
import "@testing-library/jest-dom";

// Mocking SVGs
jest.mock("../../assets/svgs/icon-x.svg", () => ({
  ReactComponent: () => <svg data-testid="icon-x" />,
}));
jest.mock("../../assets/svgs/icon-o.svg", () => ({
  ReactComponent: () => <svg data-testid="icon-o" />,
}));
jest.mock("../../assets/svgs/icon-x-outline.svg", () => ({
  ReactComponent: () => <svg />,
}));
jest.mock("../../assets/svgs/icon-o-outline.svg", () => ({
  ReactComponent: () => <svg />,
}));

const mockUpdateBoard = jest.fn();
const mockRoundComplete = jest.fn();
const mockClickSfx = jest.fn();
const mockHoverSfx = jest.fn();
const mockWinSfx = jest.fn();

const renderGameCell = (cellItem = null) => {
  return render(
    <ThemeProvider theme={lightTheme}>
      <SfxContext.Provider
        value={{
          clickSfx: mockClickSfx,
          hoverSfx: mockHoverSfx,
          winSfx: mockWinSfx,
        }}
      >
        <GameContext.Provider
          value={{
            game: { board: Array(9).fill(null), turn: "x" },
            updateBoard: mockUpdateBoard,
            roundComplete: mockRoundComplete,
          }}
        >
          <ModalContext.Provider value={{ handleModal: jest.fn() }}>
            <GameCell cellItem={cellItem} index={0} isWinningCell={false} />
          </ModalContext.Provider>
        </GameContext.Provider>
      </SfxContext.Provider>
    </ThemeProvider>,
  );
};

describe("GameCell Component", () => {
  beforeEach(() => jest.clearAllMocks());

  test("should call updateBoard and clickSfx when an empty cell is clicked", () => {
    renderGameCell(null);
    const cellElement = screen.getByTestId("cell-0");
    fireEvent.click(cellElement);
    expect(mockUpdateBoard).toHaveBeenCalledWith(
      0,
      expect.any(Function),
      expect.any(Function),
    );
    expect(mockClickSfx).toHaveBeenCalled();
  });

  test("should play hover sound on mouse enter", () => {
    renderGameCell(null);
    const cellElement = screen.getByTestId("cell-0");
    fireEvent.mouseEnter(cellElement);
    expect(mockHoverSfx).toHaveBeenCalled();
  });

  test("should render X icon when cellItem is 'x'", () => {
    renderGameCell("x");
    expect(screen.getByTestId("icon-x")).toBeInTheDocument();
  });
});
