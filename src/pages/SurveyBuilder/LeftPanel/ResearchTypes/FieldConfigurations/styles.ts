import styled from 'styled-components';

import Colors from '../../../../../utils/colors';

interface DragContainerProps {
  isDraggingOver: boolean;
  optionsLength: number;
}

export const Container = styled.div`
  form > section {
    margin-top: 1.5rem;
  }

  span {
    display: inline-block;
    font-weight: 500;
    color: ${Colors.black};
  }
`;

export const SectionTitle = styled.span`
  display: inline-block;
  font-weight: 500;
  color: ${Colors.black};
  margin-bottom: 1rem;
`;

export const DragContainer = styled.div<DragContainerProps>`
  margin-top: 1.3rem;
  background: ${(props) =>
    props.isDraggingOver ? Colors.disabledGray : Colors.white};
  min-height: ${(props) => props.optionsLength * 3.625}rem;

  button {
    border: 0.5px solid ${Colors.negative};
    background: none;
    display: flex;
    place-content: center;
    border-radius: 50%;
    padding: 0.3rem;

    margin-left: 0.3rem;
  }
`;

export const Option = styled.div`
  user-select: 'none';
  padding: 0 1rem;
  margin-bottom: 0.5rem;
  border-radius: 3px;
  min-height: 3.125rem;
  border: 1px solid ${Colors.black};

  justify-content: space-between;
  align-items: center;

  display: flex;
  color: ${Colors.white};

  svg {
    color: ${Colors.negative};
  }

  svg + svg {
    color: #000;
  }

  input {
    border: none;

    font-size: 1.1rem;
  }
`;

export const ViewButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;
