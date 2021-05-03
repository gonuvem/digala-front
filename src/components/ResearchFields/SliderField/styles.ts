import styled from 'styled-components';

import Colors from '../../../utils/colors';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    span {
      font-weight: 500;
      color: ${Colors.black};
    }

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
    content: 'Teste';
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    background: ${Colors.primary};
  }

  ::-moz-range-track {
    -webkit-appearance: none;
    outline: none;
    background: ${Colors.disabledGray};
    height: 0.4rem;
    opacity: 0.7;
    border-radius: 4px;
  }

  ::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    outline: none;
    background: ${Colors.disabledGray};
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

export const SliderBubble = styled.div`
  position: absolute;
  top: -225%;

  span {
    width: 30px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    background: #03a9f4;
    color: #fff;
    font-size: 12px;
    display: block;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: 6px;

    &:before {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border-top: 10px solid #03a9f4;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      top: 100%;
      left: 50%;
      margin-left: -5px;
      margin-top: -1px;
    }
  }
`;

export const SliderWrap = styled.div`
  position: relative;
`;
