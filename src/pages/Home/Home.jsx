import React from "react";
import { Container,Subtitle, Title } from "../../styles/General.styled";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <Container>
      <Title isDarkMode>TicTacToe</Title>
      <Subtitle>Play with your friends, higher score win!</Subtitle>
      <Button onClick={() => navigate("/game-on")}>Play Now</Button>
    </Container>
  );
}

export default Home;
