import styled from 'styled-components';

import Colors from '../../../../utils/colors';

export const Container = styled.div`
  div {
    /* margin-bottom: 1.5rem; */
    p {
      font-weight: 500;
      margin-bottom: 0.8rem;
    }

    div {
      display: flex;
      flex-wrap: wrap;
    }
  }
`;

export const DashedContainer = styled.button`
  display: flex;
  padding: 1.5rem;
  flex-direction: column;
  place-content: center;
  background: ${Colors.white};
  border: 1px dashed ${Colors.black};
  border-radius: 6px;

  img {
    height: 2rem;
    width: 2.8125rem;
    align-self: center;
    margin-bottom: 0.5rem;
  }
`;

export const Section = styled.div`
  margin-bottom: 1.2rem;
  display: flex;
  flex-direction: column;
  flex: 1;

  svg {
    height: 1.2rem;
    width: 1.2rem;
    margin-left: 0.4rem;
    color: ${Colors.negative};
  }
`;
