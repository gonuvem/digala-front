import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 5rem;

  img {
    max-width: 10rem;
  }

  p {
    margin-top: 1rem;
    max-width: 25%;

    text-align: center;
    font-weight: 500;
  }
`;
