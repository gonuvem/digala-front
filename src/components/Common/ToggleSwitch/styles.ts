import styled from 'styled-components';

import Colors from '../../../utils/colors';

export const Container = styled.div`
  div {
    display: flex;
    align-items: end;
  }

  span {
    display: inline-block;
    font-weight: 500;
    color: ${Colors.black};
    margin-bottom: 1rem;
  }

  svg {
    margin-top: 0.2rem;
    margin-left: 0.5rem;
  }
`;

export const CheckBoxWrapper = styled.div`
  position: relative;
`;

export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 70px;
  height: 32px;
  border-radius: 15px;
  background: ${Colors.disabledGray};
  display: flex;
  align-items: center;
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 23px;
    height: 23px;
    margin-left: 7px;
    background: ${Colors.white};
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:checked + ${CheckBoxLabel} {
    background: ${Colors.primary};
    /* justify-content: flex-end; */
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 23px;
      height: 23px;
      margin-left: 40px;
      transition: 0.2s;
    }
  }
`;
