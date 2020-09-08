import React from 'react';

import { Container } from './styles';

interface ModalProps {
  isOpen: boolean;
  onRequestClose(): void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onRequestClose, children }) => {
  return (
    <Container
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      closeTimeoutMS={300}
    >
      {children}
    </Container>
  );
};

export default Modal;
