import styled, { css } from 'styled-components';

import Colors from '../../../utils/colors';

interface ContainerProps {
  hasFocus: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  align-items: center;

  padding: 1rem 0.5rem;

  border: solid 2px ${Colors.black};
  border-radius: 4px;

  transition: border-color 0.3s;

  svg {
    color: ${Colors.black};
    opacity: 0.5;

    transition: color 0.3s, opacity 0.3s;
  }

  input {
    flex: 1;

    margin-left: 0.5rem;

    border: none;

    &::placeholder {
      opacity: 0.7;
    }
  }

  ${(props) =>
    props.hasFocus &&
    css`
      border-color: ${Colors.primary};

      svg {
        color: ${Colors.primary};
        opacity: 1;
      }
    `}
`;
