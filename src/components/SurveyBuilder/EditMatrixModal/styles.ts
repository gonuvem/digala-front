import styled from 'styled-components';
import Modal from 'react-modal';

import Colors from '../../../utils/colors';

interface ContainerModalProps {
  columnCount: number;
}

export const ContainerModal = styled(Modal).attrs({
  style: { overlay: { background: Colors.blackOpacity } },
})<ContainerModalProps>`
  display: flex;
  position: static;
  flex-direction: column;

  background-color: ${Colors.white};
  border-radius: 4px;

  max-width: 60rem;
  margin: 2rem auto;
  padding: 3rem;

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;

    margin-bottom: 0.5rem;

    div {
      flex-direction: column;
    }

    p {
      margin-top: 1rem;
    }
  }

  input {
    text-align: center;
  }

  form {
    > div {
      display: grid;
      grid-template-columns: ${(props) =>
          `repeat(${props.columnCount + 1}, minmax(50px, 1fr))`} 0.5fr;
      align-items: center;
      justify-items: center;
    }

    #last-line {
      margin-top: 1rem;
    }
  }
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;

  input {
    margin-right: 0.5rem;
  }
`;

export const InputField = styled.div`
  position: relative;
  width: 100%;

  svg {
    /* display: none; */
    position: absolute;
    top: 50%;
    left: 5%;

    margin-right: 0.5rem;
    max-width: 1.5rem;
    max-height: 1.5rem;

    cursor: pointer;

    color: ${Colors.secondary};
    opacity: 0;

    transition: opacity 0.2s;
  }

  &:hover {
    svg {
      /* display: block; */
      opacity: 1;
    }
  }
`;

export const FakeCheckbox = styled.div`
  display: flex;
  justify-content: center !important;
  align-items: center !important;

  width: 100%;

  &:after {
    content: '';
    width: 1.5rem;
    height: 1.5rem;

    border: solid 1px;
    border-radius: 4px;
  }
`;

export const Button = styled.button`
  display: flex;

  max-width: 2rem;

  background: none;
  border: none;

  svg {
    color: ${Colors.secondary};
    width: 2rem;
    height: 2rem;
  }
`;
