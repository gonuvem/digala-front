import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';

import Colors from '../../../utils/colors';

interface CheckBoxWrapperProps {
  isChecked: boolean;
}

export const Container = styled.div`
  flex-direction: column;

  div {
    display: flex;
    align-items: center;

    span {
      display: inline-block;
      font-weight: 500;
      color: ${Colors.black};
    }
  }

  svg {
    margin-left: 0.5rem;
    color: ${Colors.secondary};
  }
`;

export const CheckBoxWrapper = styled.div<CheckBoxWrapperProps>`
  position: relative;
  display: flex;
  align-items: center;

  margin-top: 1rem;

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

export const Tooltip = styled(ReactTooltip)`
  display: flex;
  flex-direction: column;
  width: auto;

  opacity: 1 !important;

  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.5);
`;
