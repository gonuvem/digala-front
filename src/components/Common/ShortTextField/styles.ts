import styled, { css } from 'styled-components';

import Colors from '../../../utils/colors';

interface ContainerProps {
  hasFocus: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;

  label {
    font-weight: 500;
    color: ${Colors.black};
    display: flex;
    flex-direction: column;

    p {
      font-weight: 400;
      margin-top: 0.5rem;
    }

    input {
      margin-top: 1rem;
      border-radius: 4px;
      border: solid 1px ${Colors.black};
      padding: 1rem;
      font-size: 1.1rem;
      transition: border-color 0.2s;

      ${(props) =>
        props.hasFocus &&
        css`
          border-color: ${Colors.primary};
        `}

      &:disabled {
        background-color: transparent;
      }
    }
  }
`;
