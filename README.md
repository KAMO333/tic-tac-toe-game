# 🕹️ React Tic-Tac-Toe (Lofi Edition)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Styled Components](https://img.shields.io/badge/Styled--Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![Testing Library](https://img.shields.io/badge/Testing_Library-E33332?style=for-the-badge&logo=testing-library&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

[![Tic-Tac-Toe CI](https://github.com/KAMO333/tic-tac-toe-game/actions/workflows/ci.yml/badge.svg)](https://github.com/KAMO333/tic-tac-toe-game/actions/workflows/ci.yml)

A professional-grade, full-stack Tic-Tac-Toe game built with **React**, **Styled-Components**, and a focus on **Test-Driven Development (TDD)**. This project features immersive sound effects, Lofi background music, and a robust CI/CD pipeline.

---

## 🚀 Features

- **Immersive Audio**: Integrated background music player and sound effects (SFX) using React Context.
- **Dynamic Avatars**: Custom player avatars generated via `react-nice-avatar`.
- **Responsive Design**: Built with Styled-Components for a seamless experience across devices.
- **Production Quality**: Automated testing and CI/CD integration.

---

## 🏗️ Architecture

The project follows a modular architecture to separate concerns:

- **Components**: Atomic UI elements (Buttons, Cells, Modals).
- **Contexts**: Global state management for Game Logic, Audio, and UI Themes.
- **Hooks**: Custom logic for audio playback and modal state.
- **Utils**: Pure, tested mathematical logic for win-conditions and music randomization.

---

## 🧪 Testing & Quality Assurance

This project maintains a high standard of code quality through comprehensive testing.

### Test Categories

1. **Unit Tests**: Pure logic verification in `src/utils`.
2. **Component Tests**: UI verification using React Testing Library.
3. **Integration Tests**: State and Context flow verification for `GameContext`.

### Running Tests

```bash
# Run tests in watch mode
npm test

# Generate a full coverage report
npm test -- --coverage --watchAll=false
```

### CI/CD Pipeline

Automated workflows are configured via **GitHub Actions**. Every push to `master` triggers a build and test cycle to ensure zero-regression deployments.

---

## 🛠️ Tech Stack

| Category   | Technology                     |
| ---------- | ------------------------------ |
| Frontend   | React 18, Styled-Components    |
| State      | React Context API              |
| Testing    | Jest, React Testing Library    |
| Automation | GitHub Actions                 |
| Icons/UI   | React Icons, React Nice Avatar |

---

## 🚦 Getting Started

1. Clone the repo: `git clone git@github.com:KAMO333/tic-tac-toe-game.git`
2. Install dependencies: `npm install`
3. Start the dev server: `npm start`

---

## 📝 License

Distributed under the MIT License.
