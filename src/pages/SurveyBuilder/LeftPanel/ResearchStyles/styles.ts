import styled, { css } from 'styled-components';

import Colors from '../../../../utils/colors';

interface CardColorProps {
  color: string;
  isSelected?: boolean;
}

export const Container = styled.div`
  div {
    /* margin-bottom: 1.5rem; */
    p {
      font-weight: 500;
      margin-bottom: 0.8rem;
    }

    div {
      display: flex;
      flex-wrap: wrap;
    }
  }
`;

export const CardColor = styled.button<CardColorProps>`
  height: 3.25rem;
  width: 3.25rem;
  border-radius: 4px;
  margin: 0 0.5rem 0.5rem 0;
  background: ${(props) => props.color};
  border: none;

  transition: transform 0.1s ease-in-out;

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

export const DashedContainer = styled.div`
  /* height: 2rem; */
  display: flex;
  padding: 1.5rem;
  flex-direction: column;
  place-content: center;
  border: 1px dashed ${Colors.black};
  border-radius: 6px;

  img {
    height: 2rem;
    width: 2.8125rem;
    align-self: center;
    margin-bottom: 0.5rem;
  }
`;

export const Section = styled.div`
  margin-bottom: 1.2rem;
  display: flex;
  flex-direction: column;
  flex: 1;

  svg {
    height: 1.2rem;
    width: 1.2rem;
    margin-left: 0.4rem;
    color: ${Colors.negative};
  }
`;
