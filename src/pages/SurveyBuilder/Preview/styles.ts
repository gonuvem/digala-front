import styled, { css } from 'styled-components';
import { transparentize, shade } from 'polished';
import { animated } from 'react-spring';
import { motion } from 'framer-motion';

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

export const FieldWrapper = styled.div<FieldWrapperProps>`
  cursor: pointer;
  position: relative;

  transition: border 0.2s ease, padding 0.2s ease;

  ${(props) =>
    props.selected &&
    css`
      border: solid 3px ${Colors.primary};
      border-radius: 4px;
      padding: 0.5rem;
      z-index: 9999;
    `}

  &:hover {
    border: solid 3px ${Colors.primary};
    border-radius: 4px;
    padding: 0.5rem;
    z-index: 9999;
  }
`;

export const FieldController = styled(motion.div).attrs({
  initial: { opacity: 0.8, x: 0 },
  animate: { opacity: 1, x: '-6rem' },
})`
  display: flex;
  flex-direction: column;

  position: absolute;
  top: 0;

  width: 5rem;
  height: 100px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-color: ${Colors.white};
    border-radius: 4px;
    box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.1);
  }

  button:first-child {
    border-radius: 4px 4px 0px 0px;
  }

  button:last-child {
    border-radius: 0px 0px 4px 4px;
  }

  button {
    flex: 1;
    border: none;
    background: none;

    &:hover {
      background-color: ${Colors.primary};

      svg {
        color: ${Colors.white};
      }
    }
  }

  #delete-button {
    margin-top: 0.5rem;

    background-color: ${Colors.negative};
    border-radius: 4px;

    svg {
      color: ${Colors.white};
    }

    &:hover {
      background-color: ${shade(0.1, Colors.negative)};
    }
  }
`;
