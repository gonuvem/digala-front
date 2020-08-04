import styled from 'styled-components';

import Colors from '../../../utils/colors';

interface ViewOptionsProps {
  rowDirection: boolean;
}

export const Container = styled.div`
  > label {
    display: flex;
    flex-direction: column;

    span {
      font-weight: 500;
      color: ${Colors.black};
    }

    p {
      font-weight: 400;
      margin-top: 0.5rem;
    }
  }
`;

export const ViewOptions = styled.div<ViewOptionsProps>`
  margin-top: 1rem;
  display: ${(props) => (props.rowDirection ? 'flex' : undefined)};
  flex-wrap: ${(props) => (props.rowDirection ? 'wrap' : undefined)};
`;
