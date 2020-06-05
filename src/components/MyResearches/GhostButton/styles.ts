import styled from 'styled-components';

import Colors from '../../../utils/colors';

export const Container = styled.button`
  background: ${Colors.white};
  padding: 0.8rem 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1.5px ${Colors.white};
  border-color: ${Colors.negative};
  border-radius: 4px;

  color: ${Colors.negative};
  font-weight: bold;
`;
