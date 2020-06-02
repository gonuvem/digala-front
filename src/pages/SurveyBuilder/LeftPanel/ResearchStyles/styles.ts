import styled from 'styled-components';

import Colors from '../../../../utils/colors';

interface CardColorProps {
  color: string;
}

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

    input {
      width: 100%;
      border-radius: 4px;
      border: solid 1px ${Colors.black};
      padding: 0.8rem 0 0.8rem 0;
    }
  }
`;

export const CardColor = styled.div<CardColorProps>`
  height: 3.25rem;
  width: 3.25rem;
  border-radius: 4px;
  margin: 0 0.5rem 0.5rem 0;
  background: ${(props) => props.color};
`;

export const DashedContainer = styled.div`
  /* height: 2rem; */
  display: flex;
  padding: 1.5rem;
  flex-direction: column;
  place-content: center;
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
`;
