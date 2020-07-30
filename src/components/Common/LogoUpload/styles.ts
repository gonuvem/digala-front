import styled from 'styled-components';

import Colors from '../../../utils/colors';

export const DashedContainer = styled.button`
  /* height: 2rem; */
  display: flex;
  padding: 1.5rem;
  flex-direction: column;
  place-content: center;
  background: ${Colors.white};
  border: 1px dashed ${Colors.black};
  border-radius: 6px;

  img {
    height: 2rem;
    width: 2.8125rem;
    align-self: center;
    margin-bottom: 0.5rem;
  }
`;
