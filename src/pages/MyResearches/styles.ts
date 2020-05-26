import styled from 'styled-components';
import { shade } from 'polished';

import Colors from '../../utils/colors';

export const Container = styled.div`
  background: #ffff;
  height: 100vh;
  padding: 30px 40px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  margin-bottom: 18px;

  h1 {
    font-size: 20px;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 47px;
    width: 218px;
    background: ${Colors.primary};
    text-decoration: none;
    color: ${Colors.white};
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.16);
    border-radius: 4px;

    font-size: 18px;
    font-weight: bold;

    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, Colors.primary)};
    }
  }

  img {
    height: 18px;
    width: 18px;
    margin-right: 8px;
  }
`;
