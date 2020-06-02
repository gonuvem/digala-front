import styled from 'styled-components';

import Colors from '../../utils/colors';

export const Container = styled.div``;

export const Card = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;

  background-color: ${Colors.white};
`;

export const LeftSide = styled.div`
  flex: 1;

  padding: 2.5rem 4rem 2.5rem 2.5rem;

  background-color: ${Colors.smokeWhiteSecondary};

  h3 {
    margin-top: 1rem;
    font-size: 2rem;
  }

  p {
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    line-height: 1.5rem;
  }

  div {
    display: flex;
    align-items: flex-end;

    svg {
      margin-right: 0.5rem;
      color: ${Colors.primary};
    }

    span {
      font-weight: 700;
      color: ${Colors.primary};
    }

    & + div {
      margin-top: 0.5rem;
    }
  }
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 2;

  span {
    font-weight: 500;
    display: inline-block;
    text-align: center;
    margin-top: 1rem;
  }

  img {
    max-width: 120px;
  }
`;
