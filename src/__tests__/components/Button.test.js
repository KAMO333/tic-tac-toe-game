import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../../components/Button/Button";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../styles/theme";
import "@testing-library/jest-dom"; // Ensures .toBeInTheDocument() works

// Helper to wrap component in theme since you use styled-components
const renderWithTheme = (component) => {
  return render(<ThemeProvider theme={lightTheme}>{component}</ThemeProvider>);
};

describe("Button Component", () => {
  test("should render the button with correct text", () => {
    renderWithTheme(<Button>Play Game</Button>);
    const buttonElement = screen.getByText(/Play Game/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test("should call onClick function when clicked", () => {
    const mockFn = jest.fn();
    renderWithTheme(<Button onClick={mockFn}>Click Me</Button>);
    const buttonElement = screen.getByText(/Click Me/i);

    fireEvent.click(buttonElement);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
