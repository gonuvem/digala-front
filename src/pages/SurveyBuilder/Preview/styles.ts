import styled, { css } from 'styled-components';
import { transparentize, shade } from 'polished';
import { animated } from 'react-spring';

import Colors from '../../../utils/colors';

interface NavLinkProps {
  isActive?: boolean;
}

interface FieldWrapperProps {
  selected: boolean;
}

export const Container = styled.div`
  flex: 2;
  margin-left: 2.5rem;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PreviewLink = styled.a`
  font-size: 1.125rem;
  font-weight: bold;
  text-decoration: none;

  color: ${Colors.primary};

  &:hover {
    color: ${shade(0.2, Colors.primary)};
  }
`;

export const PanelArea = styled.div`
  margin-top: 1.5rem;
  padding: 2.5rem 2rem;

  background-color: ${Colors.white};
  border-radius: 4px;

  h1 {
    font-weight: 500;
    font-size: 2.2rem;
    margin-bottom: 1rem;
  }

  > p {
    margin-bottom: 0.5rem;
  }

  form > div {
    margin-top: 1rem;
  }

  > button {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    padding: 1rem 4rem;
    margin-top: 1.5rem;

    background: transparent;
    border: dashed 1px ${Colors.gray};
    opacity: 0.9;
    border-radius: 4px;

    transition: border-color 0.3s;

    &:hover {
      border-color: ${Colors.primary};
      border-width: 2px;
    }

    svg {
      margin-top: 1rem;
    }
  }
`;

export const QuestionsPanel = styled(animated.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(112px, 1fr));
  justify-items: center;
  grid-gap: 1.5rem;

  max-width: 100%;
  margin-top: 1.5rem;
  padding: 1rem;

  border: solid 1px ${transparentize(0.3, Colors.gray)};
  border-radius: 4px;
`;

export const NavLink = styled.a<NavLinkProps>`
  text-decoration: none;
  color: ${Colors.black};

  transition: color 0.3s;

  & + a {
    margin-left: 1.5rem;
  }

  &:hover {
    color: ${Colors.primary};
    font-weight: 500;
  }

  ${(props) =>
    props.isActive &&
    css`
      font-weight: 500;
      color: ${Colors.primary};
    `}
`;

export const ModalContent = styled.div`
  > div:first-child {
    margin-bottom: 1.5rem;
    align-items: center;
  }

  div {
    width: 20.8rem;
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
    font-weight: 500;
  }

  img {
    height: 1rem;
    width: 1rem;

    margin-right: 0.475rem;
  }
`;
