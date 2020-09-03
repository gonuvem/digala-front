import styled, { css } from 'styled-components';

import Colors from '../../../utils/colors';

interface PageButtonProps {
  selected?: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;

  svg {
    cursor: pointer;
    margin: 0rem 1rem;
  }
`;

export const PageButton = styled.button<PageButtonProps>`
  padding: 1rem;
  color: ${Colors.primaryOpacity};

  background: none;
  border: solid 1px ${Colors.primary};
  border-radius: 8px;

  transition: background-color 0.2s, color 0.2s;

  & + button {
    margin-left: 1rem;
  }

  &:hover {
    background-color: ${Colors.primary};
    color: ${Colors.white};
  }

  ${(props) =>
    props.selected &&
    css`
      background-color: ${Colors.primary};
      color: ${Colors.white};
    `}
`;
