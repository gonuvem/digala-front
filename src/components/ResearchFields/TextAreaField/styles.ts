import styled, { css } from 'styled-components';

import Colors from '../../../utils/colors';

interface ContainerProps {
  hasFocus: boolean;
  isInvalid: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    flex-direction: column;

    span {
      font-weight: 500;
      color: ${Colors.black};
      align-self: flex-start;
      margin-bottom: 0rem;
    }

    p {
      font-weight: 400;
      margin-top: 0.5rem;
    }

    textarea {
      border-radius: 4px;
      border: solid 2px ${Colors.black};
      padding: 1rem;
      font-size: 1.1rem;
      transition: border-color 0.2s;
      margin-top: 1rem;

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
  }
`;
