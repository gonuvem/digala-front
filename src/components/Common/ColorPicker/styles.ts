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

  transition: transform 0.2s ease-in-out, border 0.2s ease-in-out,
    box-shadow 0.2s;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 1px 0.9px rgba(0, 0, 0, 0.034),
      0 2.2px 2.2px rgba(0, 0, 0, 0.049), 0 4px 3.9px rgba(0, 0, 0, 0.06),
      0 6.6px 6.4px rgba(0, 0, 0, 0.07), 0 10.8px 10.6px rgba(0, 0, 0, 0.081),
      0 19px 18.5px rgba(0, 0, 0, 0.096), 0 41px 40px rgba(0, 0, 0, 0.13);
  }

  ${(props) =>
    props.isSelected &&
    css`
      border: solid 2px ${Colors.black};
      transform: scale(1.1);
      box-shadow: 0 1px 0.9px rgba(0, 0, 0, 0.034),
        0 2.2px 2.2px rgba(0, 0, 0, 0.049), 0 4px 3.9px rgba(0, 0, 0, 0.06),
        0 6.6px 6.4px rgba(0, 0, 0, 0.07), 0 10.8px 10.6px rgba(0, 0, 0, 0.081),
        0 19px 18.5px rgba(0, 0, 0, 0.096), 0 41px 40px rgba(0, 0, 0, 0.13);
    `}
`;
