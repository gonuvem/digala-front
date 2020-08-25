/* eslint-disable no-await-in-loop */
import React from 'react';
import { useSpring, useTransition, config } from 'react-spring';

import { Container, Square, Ball } from './styles';

interface LoadingAnimationProps {
  isLoading: boolean;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ isLoading }) => {
  const containerTransition = useTransition(isLoading, {
    from: { opacity: 1 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const squareProps = useSpring({
    to: async (next: any, cancel: any) => {
      while (true) {
        await next({
          width: '56px',
          height: '56px',
          transform: 'translateY(-100px) rotate(180deg)',
        });
        await next({
          width: '168px',
          height: '28px',
          transform: 'translateY(0px) rotate(0deg)',
        });
      }
    },
    from: {
      width: '168px',
      height: '28px',
      transform: 'translateY(0px) rotate(0deg)',
    },
    config: config.wobbly,
  });

  const ballProps = useSpring({
    to: async (next: any) => {
      while (true) {
        await next({
          transform: 'translateY(-110px)',
        });
        await next({
          transform: 'translateY(0px)',
        });
      }
    },
    from: { transform: 'translateY(0px)' },
    config: config.wobbly,
  });

  return (
    <div>
      {containerTransition((props, item) => {
        return (
          <Container style={props}>
            <Ball style={ballProps} />
            <Square style={squareProps} />
          </Container>
        );
      })}
    </div>
  );
};

export default LoadingAnimation;
