import styled from 'styled-components';

import Colors from '../../utils/colors';

export const Container = styled.div`
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  place-content: center;

  border: solid 1px ${Colors.black};
  border-radius: 4px;

  max-width: 6.25rem;

  div {
    border: solid 2px ${Colors.black};
    border-radius: 4px;
    padding: 1rem;
    display: flex;
    place-content: center;
  }

  span {
    margin-top: 0.5rem;
    text-align: center;
  }
`;
