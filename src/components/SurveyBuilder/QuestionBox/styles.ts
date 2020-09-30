import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';

import Colors from '../../../utils/colors';

export const Container = styled.button`
  cursor: pointer;
  padding: 1rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: transparent;

  border: solid 1px ${Colors.black};
  border-radius: 4px;

  min-width: 7rem;
  max-width: 7rem;

  margin-bottom: 1rem;

  svg {
    align-self: center;
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
    font-size: 0.75rem;
    opacity: 0.9;
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

    svg {
      border-color: ${Colors.primary};
    }
  }
`;

export const Tooltip = styled(ReactTooltip)`
  display: flex;
  flex-direction: column;
  width: 7.5rem;
  border-radius: 4px;
  padding: 0.5rem 0.5rem 1rem 0.5rem;
  transition: opacity 0.3s;

  opacity: 1 !important;

  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.5);

  img {
    width: 100%;
    height: auto;
    border-radius: 2px;
    margin-bottom: 0.5rem;
  }

  h3 {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
    color: ${Colors.black};
  }

  p {
    font-size: 0.75rem;
    line-height: 1rem;
  }
`;
