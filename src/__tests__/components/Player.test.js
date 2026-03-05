import { render, screen } from "@testing-library/react";
import Player from "../../components/Player/Player";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../styles/theme";
import "@testing-library/jest-dom";

// Mock react-nice-avatar since we don't need to test the library itself
jest.mock("react-nice-avatar", () => {
  return function MockAvatar() {
    return <div data-testid="player-avatar" />;
  };
});

const mockPlayer = {
  name: "Kamogelo",
  choice: "x",
  score: 5,
  avatarconfig: { sex: "man", faceColor: "#F9C9B6" },
};

const renderPlayer = (isPlayerActive = false) => {
  return render(
    <ThemeProvider theme={lightTheme}>
      <Player player={mockPlayer} isPlayerActive={isPlayerActive} />
    </ThemeProvider>,
  );
};

describe("Player Component", () => {
  test("should render player name and choice correctly", () => {
    renderPlayer(false);

    // Check if name and choice (uppercase) are visible
    expect(screen.getByText(/Kamogelo \(X\)/i)).toBeInTheDocument();
    // Check if score is visible
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  test("should render the avatar", () => {
    renderPlayer(false);
    expect(screen.getByTestId("player-avatar")).toBeInTheDocument();
  });

  test("should handle missing isPlayerActive prop gracefully", () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Player player={mockPlayer} />
      </ThemeProvider>,
    );
    // Should render without crashing
    expect(screen.getByText(/Kamogelo/i)).toBeInTheDocument();
  });
});
