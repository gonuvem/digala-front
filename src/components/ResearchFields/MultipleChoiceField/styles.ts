import styled from 'styled-components';

import Colors from '../../../utils/colors';

interface ViewOptionsProps {
  rowDirection: boolean;
}

export const Container = styled.div`
  > label {
    display: flex;
    flex-direction: column;

    span:first-child {
      font-weight: 500;
      margin-bottom: 0.5rem;
    }

    p {
      color: ${Colors.black};
      font-size: 1rem;
      font-weight: 400;
    }
  }
`;

export const ViewOptions = styled.div<ViewOptionsProps>`
  margin-top: 1rem;
  display: ${(props) => (props.rowDirection ? 'flex' : undefined)};
  flex-wrap: ${(props) => (props.rowDirection ? 'wrap' : undefined)};
`;
