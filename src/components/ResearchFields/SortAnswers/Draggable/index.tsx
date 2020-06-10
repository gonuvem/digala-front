import React, { useState, useCallback, useEffect } from 'react';

import { Container } from './styles';

const POSITION = { x: 0, y: 0 };

const Draggable: React.FC = ({ children }) => {
  const [state, setState] = useState({
    isDragging: false,
    origin: POSITION,
    translation: POSITION,
  });

  const handleMouseDown = useCallback(({ clientX, clientY }) => {
    setState((state) => ({
      ...state,
      isDragging: true,
      origin: { x: clientX, y: clientY },
    }));
  }, []);

  const handleMouseMove = useCallback(
    ({ clientX, clientY }) => {
      console.log(clientX, clientY);
      const translation = {
        x: clientX - state.origin.x,
        y: clientY - state.origin.y,
      };

      setState((state) => ({
        ...state,
        translation,
      }));
    },
    [state.origin],
  );

  const handleMouseUp = useCallback(() => {
    setState((state) => ({
      ...state,
      isDragging: false,
    }));
  }, []);

  useEffect(() => {
    if (state.isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }

    setState((state) => ({ ...state, translation: POSITION }));
  }, [state.isDragging, handleMouseMove, handleMouseUp]);

  return (
    <Container
      isDragging={state.isDragging}
      translatex={state.translation.x}
      translatey={state.translation.y}
      onMouseDown={handleMouseDown}
    >
      {children}
    </Container>
  );
};

export default Draggable;
