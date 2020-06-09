import styled from 'styled-components';

import Colors from '../../../utils/colors';

export const Container = styled.div`
  span {
    display: inline-block;
    font-weight: 500;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;

  margin-top: 1rem;

  border-radius: 4px;
  border: solid 2px ${Colors.black};

  input {
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }

    border: none;

    display: flex;
    flex: 1;
    padding: 1rem;

    font-size: 1.1rem;

    transition: border-color 0.2s;

    &:disabled {
      background-color: transparent;
    }
  }

  div {
    display: flex;
    flex-direction: column;

    svg {
      cursor: pointer;
      transition: color 0.3s ease;
    }

    svg:first-child {
      margin-bottom: -50%;
    }

    svg:hover {
      color: ${Colors.primary};
    }
  }
`;
