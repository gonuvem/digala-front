import styled from 'styled-components';

export const Container = styled.div``;

export const Panels = styled.div`
  display: flex;
  align-items: baseline;
  margin-top: 1.5rem;

  & + div {
    margin-left: 2.5rem;
  }
`;
