import styled, { css } from 'styled-components';
import { shade } from 'polished';

import Colors from '../../../utils/colors';

interface ButtonStyleProps {
  hasShadow?: boolean;
  colorScheme: 'info' | 'danger' | 'disabled';
}

export const Container = styled.button<ButtonStyleProps>`
  display: flex;
  justify-content: center;
  border: none;
  align-items: center;
  height: 2.9375rem;
  padding: 0rem 1.5rem;

  text-decoration: none;
  border-radius: 4px;

  font-size: 1.125rem;
  font-weight: bold;

  transition: background-color 0.2s;

  ${(props) =>
    props.hasShadow &&
    css`
      box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.16);
    `}

  svg {
    margin-right: 0.5rem;
  }

  ${(props) =>
    props.colorScheme === 'info' &&
    css`
      background-color: ${Colors.primary};
      color: ${Colors.white};

      &:hover {
        background: ${shade(0.2, Colors.primary)};
      }
    `}

  ${(props) =>
    props.colorScheme === 'danger' &&
    css`
      background-color: ${Colors.negative};
      color: ${Colors.white};

      &:hover {
        background: ${shade(0.2, Colors.negative)};
      }
    `}

    ${(props) =>
      props.colorScheme === 'disabled' &&
      css`
        background-color: ${Colors.gray};
        color: ${Colors.white};

        &:hover {
          background: ${shade(0.2, Colors.gray)};
        }
      `}
`;
