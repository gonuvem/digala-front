import styled, { css } from 'styled-components';
import { shade } from 'polished';
import { motion } from 'framer-motion';

import Colors from '../../../utils/colors';

interface ContainerProps {
  selected: boolean;
}

export const Container = styled.div<ContainerProps>`
  cursor: pointer;
  position: relative;

  transition: border 0.2s ease, padding 0.2s ease;

  ${(props) =>
    props.selected &&
    css`
      border: solid 3px ${Colors.primary};
      border-radius: 4px;
      padding: 0.5rem;
      z-index: 999;
    `}

  &:hover {
    border: solid 3px ${Colors.primary};
    border-radius: 4px;
    padding: 0.5rem;
    z-index: 9999;
  }
`;

export const LeftController = styled(motion.div).attrs({
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

export const RightController = styled(motion.div).attrs({
  initial: { opacity: 0.8, x: 0 },
  animate: { opacity: 1, x: '3rem' },
})`
  display: flex;
  flex-direction: column;

  position: absolute;
  top: 0;
  right: 0rem;

  button {
    flex: 1;
    background: none;
    border: none;

    svg {
      color: ${Colors.negative};
    }

    &:hover {
      svg {
        color: ${shade(0.2, Colors.negative)};
      }
    }
  }
`;
