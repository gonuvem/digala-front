import styled from 'styled-components';

import Colors from '../../../utils/colors';

export const Container = styled.div`
  @keyframes spinner {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  position: relative;

  &::before {
    content: '';
    animation: 2s linear infinite spinner;
    border: solid 3px #eee;
    border-bottom-color: ${Colors.secondary};
    border-radius: 50%;
    height: 24px;
    width: 24px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    will-change: transform;
  }
`;
