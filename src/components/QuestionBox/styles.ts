import styled from 'styled-components';

import Colors from '../../utils/colors';

export const Container = styled.div`
  cursor: pointer;
  padding: 1rem 2rem 0.5rem 2rem;
  display: flex;
  flex-direction: column;
  place-content: center;

  border: solid 1px ${Colors.black};
  border-radius: 4px;

  max-width: 6.25rem;

  margin-bottom: 0.5rem;

  div {
    border: solid 2px ${Colors.black};
    border-radius: 4px;
    padding: 1rem;
    display: flex;
    place-content: center;

    transition: border-color 0.3s;
  }

  span {
    margin-top: 0.5rem;
    text-align: center;
    transition: font-weight 0.1s ease-out, color 0.3s ease-out;
  }

  svg path {
    fill: ${Colors.black};
    transition: fill 0.3s;
  }

  &:hover {
    span {
      color: ${Colors.primary};
      font-weight: 700;
    }

    svg path {
      fill: ${Colors.primary};
    }

    div {
      border-color: ${Colors.primary};
    }
  }
`;
