import React, { useContext } from "react";
import { Title, Subtitle } from "../../../styles/General.styled";
import { ModalHeader, ModalBody, ModalFooter } from "../../Modal/Modal.styled";
import Button from "../../Button/Button";
import { GameContext } from "../../../contexts/GameContext";
import { ModalContext } from "../../../contexts/ModalContext";

const RoundOverModal = () => {
  const { resetBoard } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);
  return (
    <>
      <ModalHeader>
        <Title primary>Kamo Wins Round</Title>
      </ModalHeader>
      <ModalBody>
        <Subtitle primary>Choices will be switched now.</Subtitle>
        <Subtitle primary>Kamo: 1.</Subtitle>
        <Subtitle primary>Mosa: 2.</Subtitle>
      </ModalBody>
      <ModalFooter>
        <Button
          color="#f9c811"
          onClick={() => {
            handleModal();
            resetBoard();
          }}
        >
          Continue
        </Button>
        <Button color="#8437f9">Restart</Button>
      </ModalFooter>
    </>
  );
};

export default RoundOverModal;
