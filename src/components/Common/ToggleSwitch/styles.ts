import styled from 'styled-components';

import Colors from '../../../utils/colors';

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
  background: #bebebe;
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
    background: #ffffff;
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
