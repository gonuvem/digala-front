import styled from 'styled-components';

import ReactTooltip from 'react-tooltip';

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
    margin-bottom: 1rem;

    p {
      font-weight: 400;
      margin-top: 0.5rem;
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

export const Tooltip = styled(ReactTooltip)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 0.5rem;
  transition: opacity 0.3s;
  opacity: 1 !important;
  left: 15rem;
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.1);

  p {
    font-size: 0.75rem;
    line-height: 1rem;
  }
`;
