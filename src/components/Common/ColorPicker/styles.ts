import styled, { css } from 'styled-components';

import Colors from '../../../utils/colors';

interface CardColorProps {
  color: string;
  isSelected?: boolean;
}

export const Container = styled.div``;

export const CardColor = styled.button<CardColorProps>`
  height: 3.25rem;
  width: 3.25rem;
  border-radius: 4px;
  margin: 0 0.5rem 0.5rem 0;
  background: ${(props) => props.color};
  border: none;

  transition: transform 0.1s ease-in-out, border 0.1s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  ${(props) =>
    props.isSelected &&
    css`
      border: solid 2px ${Colors.black};
      transform: scale(1.1);
    `}
`;
