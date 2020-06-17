import styled from 'styled-components';

import Colors from '../../../utils/colors';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  label {
    font-weight: 500;
    color: ${Colors.black};
    display: flex;
    flex-direction: column;

    p {
      font-weight: 400;
      margin-top: 0.5rem;
      margin-bottom: 1rem;
    }
  }

  div {
    div:first-child {
      font-size: 0.75rem;
      font-weight: 500;
      color: ${Colors.secondary};
      margin-bottom: 0.7rem;
    }
    div {
      display: flex;
      flex: 1;
      justify-content: space-between;
    }
  }
`;

export const Slider = styled.input`
  width: 100%;
  cursor: pointer;
  -webkit-appearance: none;

  &::-moz-range-thumb {
    -webkit-appearance: none;
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    background: ${Colors.primary};
  }

  ::-moz-range-track {
    -webkit-appearance: none;
    outline: none;
    background: ${Colors.primary};
    height: 0.4rem;
    opacity: 0.7;
    border-radius: 4px;
  }

  ::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    outline: none;
    background: ${Colors.primaryOpacity};
    height: 0.52rem;
    border-radius: 4px;
    margin-bottom: 0.5rem;
  }

  ::-webkit-slider-thumb {
    position: relative;
    -webkit-appearance: none;
    height: 1.2rem;
    width: 1.2rem;
    border-radius: 50%;
    background: ${Colors.primary};
    margin-top: -0.3rem;
  }
`;
