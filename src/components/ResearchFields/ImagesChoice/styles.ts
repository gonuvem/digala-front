import styled from 'styled-components';

import Colors from '../../../utils/colors';

interface CardImage {
  image: string;
  isSelected: boolean;
}

export const Container = styled.div`
  > label {
    font-weight: 500;
    color: ${Colors.black};
    display: flex;
    flex-direction: column;

    label + label {
      margin-top: 1rem;
    }

    > p {
      font-weight: 400;
      margin: 0.5rem 0 1rem 0;
    }

    div {
      display: flex;
      flex-wrap: wrap;
    }
  }
`;

export const CardImage = styled.div<CardImage>`
  height: 8.5rem;
  width: 10.6rem;
  border-radius: 4px;
  margin: 0 1rem 1rem 0;
  background-image: url(${(props) => props.image});
  display: flex;
  align-items: flex-end;
  cursor: pointer;

  button {
    height: 1.2rem;
    width: 1.2rem;
    border: none;
    border-radius: 3px;
    background: ${(props) =>
      props.isSelected ? Colors.primary : Colors.white};
    margin-right: 0.4rem;
  }

  div {
    display: flex;
    height: 2.1rem;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    width: 100%;
    padding: 0 0.6rem;
    align-items: center;
    background-color: ${Colors.secondary};
    /* mix-blend-mode: multiply; */
  }

  p {
    font-weight: 500;
    font-size: 0.875rem;
    color: ${Colors.white};
  }
`;
