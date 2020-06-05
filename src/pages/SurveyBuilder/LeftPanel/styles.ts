import styled, { css } from 'styled-components';
import { transparentize, shade } from 'polished';

import Colors from '../../../utils/colors';

interface ContainerProps {
  activePanelNumber: number;
  distance: number;
}

interface PanelTabLinkProps {
  isActive?: boolean;
}

export const Container = styled.div`
  flex: 1;

  h5 {
    font-size: 1.3rem;
    font-weight: 700;
    flex: 1;
  }
`;

export const PanelArea = styled.div<ContainerProps>`
  background-color: ${Colors.white};
  border-radius: 4px;
  margin-top: 1.5rem;

  nav {
    display: flex;
    position: relative;
    justify-content: space-between;
    padding: 2rem 2rem 1rem 2rem;
    margin-bottom: 1.5rem;
    border-bottom: solid 1px ${transparentize(0.88, Colors.black)};

    &::after {
      content: '';
      width: 4rem;
      position: absolute;
      height: 2px;
      background-color: ${Colors.primary};
      left: 1.5rem;
      transform: translateX(${(props) => props.distance}px);
      margin: 0 auto;
      bottom: 0;

      transition: transform 0.3s ease-in-out;
    }
  }

  > div {
    padding: 0 2rem 2rem 2rem;

    h5 {
      font-weight: 300;
      font-size: 1rem;
      color: ${transparentize(0.1, Colors.black)};
    }
  }
`;

export const PanelTabLink = styled.span<PanelTabLinkProps>`
  cursor: pointer;
  position: relative;
  font-weight: 500;
  text-transform: uppercase;
  transition: color 0.3s;

  &:hover {
    color: ${shade(0.2, Colors.primary)};
  }

  ${(props) =>
    props.isActive &&
    css`
      color: ${shade(0.2, Colors.primary)};
    `}
`;
