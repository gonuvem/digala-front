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

export const DragContainer = styled.div<DragContainerProps>`
  margin-top: 1.3rem;
  background: ${(props) =>
    props.isDraggingOver ? Colors.disabledGray : Colors.white};
  min-height: ${(props) => props.optionsLength * 3.625}rem;

  button {
    border: none;
    background: none;
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
    margin-left: 0.5rem;
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
