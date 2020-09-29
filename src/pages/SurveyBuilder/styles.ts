import styled from 'styled-components';

export const Container = styled.div``;

export const Panels = styled.div`
  display: flex;
  align-items: baseline;

  & + div {
    margin-left: 2.5rem;
  }
`;
