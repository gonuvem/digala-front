import styled from 'styled-components';

import Colors from '../../../utils/colors';

interface ViewOptionsProps {
  rowDirection: boolean;
}

export const Container = styled.div`
  > label {
    font-weight: 500;
    color: ${Colors.black};
    display: flex;
    flex-direction: column;

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
