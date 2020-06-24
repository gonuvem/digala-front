import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

import Colors from '../../../utils/colors';

interface ContainerProps {
  hasFocus?: boolean;
  isInvalid?: boolean;
  isFilled?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: column;

  label {
    font-weight: 500;
    color: ${Colors.black};
    display: flex;
    flex-direction: column;

    p {
      font-weight: 400;
      margin-top: 0.5rem;
      margin-bottom: 1rem;
    }
  }

  #inputs {
    display: flex;
    align-items: center;
  }

  input {
    padding: 1rem;
    max-width: 7.5rem;

    border-radius: 4px;
    border: solid 2px ${Colors.black};

    font-size: 1.1rem;

    transition: border-color 0.2s;

    ${(props) =>
      (props.hasFocus || props.isFilled) &&
      css`
        border-color: ${Colors.primary};

        svg {
          color: ${Colors.primary};
          opacity: 1;
        }
      `}

    ${(props) =>
      props.isInvalid &&
      css`
        border-color: ${Colors.negative};

        svg {
          color: ${Colors.negative};
          opacity: 1;
        }
      `}

      &:disabled {
      background-color: transparent;
    }
  }

  span {
    margin: 0 0.5rem;

    font-size: 3rem;
    line-height: 0;
  }
`;

export const InputContainer = styled.div`
  position: relative;

  #time-selector {
    z-index: 9999;
    display: flex;
    max-width: 7.5rem;
    justify-content: space-between;
    flex-wrap: wrap;

    top: 100%;
    position: absolute;
    margin-top: 0.7rem;
    padding: 1rem 0.5rem;

    background-color: ${Colors.white};
    box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.2);
    border-radius: 4px;

    &:before {
      content: '';
      position: absolute;
      top: -6px;
      width: 16px;
      height: 16px;
      background-color: ${Colors.white};
      transform: rotate(45deg);
    }

    button {
      padding: 0.5rem;
      margin-bottom: 0.5rem;

      background-color: ${Colors.primary};
      color: ${Colors.white};

      border: none;
      border-radius: 8px;

      transition: background-color 0.1s ease-in-out;

      &:hover {
        background-color: ${Colors.secondary};
      }
    }
  }
`;

export const CalendarContainer = styled(animated.div)`
  position: absolute;
  width: 200%;
  margin-top: 0.7rem;

  z-index: 999;

  &:before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    background-color: ${Colors.primary};
    transform: rotate(45deg);
    left: 25%;
    top: -5px;
  }
`;
