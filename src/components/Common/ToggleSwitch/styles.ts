import styled from 'styled-components';

import Colors from '../../../utils/colors';

interface CheckBoxWrapperProps {
  isChecked: boolean;
}

export const Container = styled.div`
  div {
    display: flex;
    align-items: end;

    span {
      display: inline-block;
      font-weight: 500;
      color: ${Colors.black};
      margin-bottom: 1rem;
    }
  }

  svg {
    margin-top: 0.2rem;
    margin-left: 0.5rem;
  }
`;

export const CheckBoxWrapper = styled.div<CheckBoxWrapperProps>`
  position: relative;
  display: flex;
  align-items: center;

  span {
    margin: 0.3rem 0 0 1rem;
    opacity: ${(props) => (props.isChecked ? 1 : 0.5)};
  }
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
  /* cursor: pointer; */

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
  width: 70px;
  height: 32px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;

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
