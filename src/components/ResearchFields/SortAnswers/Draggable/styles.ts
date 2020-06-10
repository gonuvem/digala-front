import styled from 'styled-components';

interface ContainerProps {
  isDragging: boolean;
  translatex: number;
  translatey: number;
}

export const Container = styled.div<ContainerProps>`
  cursor: ${(props) =>
    props.isDragging ? '-webkit-grabbing' : '-webkit-grab'};
  transform: ${(props) =>
    `translate(${props.translatex}px ${props.translatey}px) `};
  transition: ${(props) => (props.isDragging ? 'none' : 'transform: 500ms')};
  z-index: ${(props) => (props.isDragging ? 2 : 1)};
  position: ${(props) => (props.isDragging ? 'absolute' : 'relative')};
`;
