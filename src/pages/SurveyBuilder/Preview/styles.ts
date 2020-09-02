import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import { animated } from 'react-spring';

import Colors from '../../../utils/colors';

interface NavLinkProps {
  isActive?: boolean;
}

export const Container = styled.div`
  flex: 2;
  margin-left: 2.5rem;
`;

export const PanelArea = styled.div`
  margin-top: 1.5rem;
  padding: 2.5rem 4rem;

  background-color: ${Colors.white};
  border-radius: 4px;

  h1 {
    font-weight: 500;
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
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

export const FieldWrapper = styled.div`
  cursor: pointer;

  transition: border 0.2s ease, padding 0.2s ease;

  &:hover {
    border: solid 3px ${Colors.primary};
    border-radius: 4px;
    padding: 0.5rem;
    z-index: 9999;
  }
`;
