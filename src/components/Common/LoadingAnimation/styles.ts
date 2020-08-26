import styled from 'styled-components';
import { animated } from 'react-spring';

import Colors from '../../../utils/colors';

export const Container = styled(animated.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Square = styled(animated.div)`
  width: 168px;
  height: 28px;
  background-color: ${Colors.black};
`;

export const Ball = styled(animated.div)`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: ${Colors.black};
`;
