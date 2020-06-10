import styled from 'styled-components';

import Colors from '../../../utils/colors';

interface DragContainerProps {
  snapshot: any;
}

export const Container = styled.div`
  > label {
    font-weight: 500;
    color: ${Colors.black};
    display: flex;
    flex-direction: column;

    label + label {
      margin-top: 1rem;
    }

    > p {
      font-weight: 400;
      margin-top: 0.5rem;
    }
  }
`;

export const DragContainer = styled.div<DragContainerProps>`
  margin-top: 1.3rem;
  background: ${(props) =>
    props.snapshot.isDraggingOver ? Colors.disabledGray : Colors.white};
  min-height: 150px;
`;

export const Option = styled.div`
  user-select: 'none';
  padding: 0 1rem;
  margin-bottom: 0.5rem;
  border-radius: 3px;
  min-height: 3.125rem;
  background: ${Colors.option};

  justify-content: space-between;
  align-items: center;

  display: flex;
  color: ${Colors.white};
`;
