import styled from 'styled-components';
import { shade } from 'polished';

import Colors from '../../utils/colors';

export const Container = styled.div``;

export const Card = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;

  background-color: ${Colors.white};
  box-shadow: 0 0px 5.5px -47px rgba(0, 0, 0, 0.051),
    0 0px 12.3px -47px rgba(0, 0, 0, 0.063),
    0 0px 20.9px -47px rgba(0, 0, 0, 0.069),
    0 0px 32.2px -47px rgba(0, 0, 0, 0.073),
    0 0px 47.7px -47px rgba(0, 0, 0, 0.077),
    0 0px 70.1px -47px rgba(0, 0, 0, 0.081),
    0 0px 105.1px -47px rgba(0, 0, 0, 0.088),
    0 0px 167.5px -47px rgba(0, 0, 0, 0.099),
    0 0px 314px -47px rgba(0, 0, 0, 0.13);
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

  padding: 2.5rem 5rem;

  span {
    font-weight: 500;
    display: inline-block;
    text-align: center;

    margin-top: 1rem;
    max-width: 70%;
  }

  img {
    max-width: 120px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    margin-top: 2.5rem;

    div + div {
      margin-top: 1.5rem;
    }

    button {
      margin-top: 2rem;
    }
  }

  a {
    text-decoration: none;
    color: ${Colors.primary};
    margin-top: 1.5rem;

    &:hover {
      color: ${shade(0.3, Colors.primary)};
    }
  }
`;
