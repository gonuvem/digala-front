import styled from 'styled-components';

import Colors from '../../../utils/colors';

interface CardImage {
  image: string;
}

export const Container = styled.div`
  > label {
    display: flex;
    flex-direction: column;

    span {
      font-weight: 500;
      margin-bottom: 0.5rem;
      color: ${Colors.black};
    }

    label + label {
      margin-top: 1rem;
    }

    > p {
      font-weight: 400;
      margin-bottom: 1rem;
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
  margin: 0 1rem 0rem 0;
  background-image: url(${(props) => props.image});
  background-size: cover;
  display: flex;
  align-items: flex-end;
  cursor: pointer;

  span {
    display: block;
    width: 1rem;
    height: 1rem;
    border-radius: 2px;
    margin-right: 0.5rem;
    margin-bottom: 0rem !important;
    background-color: ${Colors.smokeWhite};
    transition: background-color 0.3s;
  }

  input {
    opacity: 0;
    position: absolute;

    &:checked ~ span {
      background-color: ${Colors.primary};
      border-color: ${Colors.primary};
    }
  }

  label {
    display: flex;
    height: 2.1rem;
    cursor: pointer;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    width: 100%;
    padding: 0 0.6rem;
    align-items: center;
    background-color: ${Colors.secondary};
    font-weight: 500;
    font-size: 0.875rem;
    color: ${Colors.white};
  }
`;
