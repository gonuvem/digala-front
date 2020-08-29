import styled from 'styled-components';
import { animated } from 'react-spring';

import Colors from '../../../utils/colors';

export const Container = styled(animated.span)`
  font-size: 1rem;
  align-self: flex-end;
  color: ${Colors.negative};
  margin-top: 0.5rem !important;
`;
