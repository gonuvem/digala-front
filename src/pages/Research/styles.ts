import styled from 'styled-components';
import { transparentize, lighten } from 'polished';

import Colors from '../../utils/colors';

interface ProgressBarProps {
  pagesCount: number;
}

interface StepProps {
  filled?: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  @media (max-width: 670px) {
    flex-direction: column;
  }
`;

export const ResearchHeader = styled.div`
  padding: 1.5rem;
  margin-bottom: 1rem;

  background-color: ${Colors.white};
  border-radius: 4px;

  h3 {
    font-size: 1.5rem;
    font-weight: 500;
    color: ${Colors.primary};
  }

  p {
    margin-top: 1rem;
    opacity: 0.9;
  }
`;

export const FormArea = styled.div`
  display: flex;
  position: relative;
  flex-direction: row-reverse;

  #progress-wrapper {
    position: absolute;
  }

  @media (max-width: 670px) {
    flex-direction: column;

    #progress-wrapper {
      position: relative;
    }
  }
`;

export const ProgressBar = styled.div<ProgressBarProps>`
  position: fixed;
  padding: 1rem;
  margin-left: 1rem;

  background-color: ${Colors.white};
  border-radius: 8px;

  div {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 8px;
    height: ${(props) => `${4.5 * props.pagesCount}rem`};

    background-color: ${Colors.smokeWhite};
    border-radius: 8px;

    &:before {
      content: '';

      position: absolute;
      width: 8px;
      height: 4.5rem;
      top: 0%;
      z-index: 0;

      background-color: ${lighten(0.15, Colors.primary)};
      border-radius: 8px;
    }

    span:first-child {
      margin-top: 1rem;
    }
  }

  @media (max-width: 670px) {
    position: relative;
    margin-left: 0;
    margin-bottom: 1rem;

    div {
      flex-direction: row;
      height: 8px;
      width: 100%;

      &:before {
        position: absolute;
        width: 100%;
        height: auto;
      }

      span:first-child {
        margin-top: 0rem;
        margin-left: 2rem;
      }
    }
  }
`;

export const Step = styled.span<StepProps>`
  display: flex;
  z-index: 1;
  justify-content: center;
  align-items: center;

  width: 24px;
  height: 24px;

  background-color: ${(props) =>
    props.filled ? lighten(0.15, Colors.primary) : Colors.smokeWhite};
  border-radius: 50%;

  p {
    font-weight: 500;
    color: ${(props) => (props.filled ? Colors.smokeWhite : '#a0a0a0')};
    text-align: center;
  }
`;

export const ResearchBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 5rem;
  max-width: 45%;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 1.5rem 2rem;

    background-color: ${Colors.white};
    border-radius: 4px;

    #form-separator {
      width: 100%;
      height: 2px;

      margin-top: 3.5rem;
      margin-bottom: 3.5rem;

      background-color: ${transparentize(0.88, Colors.black)};
    }
  }

  #research-separator {
    height: 2px;
    width: 25%;

    margin-top: 3rem;
    margin-bottom: 2rem;

    background-color: ${transparentize(0.75, Colors.primary)};
  }

  @media (max-width: 670px) {
    max-width: 100%;
    padding: 0 1rem;
    margin-top: 2rem;

    form {
      button {
        width: 100%;
      }

      #form-separator {
        margin-top: 2rem;
        margin-bottom: 2rem;
      }
    }

    #research-separator {
      width: 80%;
    }

    img {
      margin-bottom: 2rem;
    }
  }
`;

export const ResearchFooter = styled.div`
  padding: 2rem 1.5rem;
  margin-top: 1rem;

  background-color: ${Colors.white};
  border-radius: 4px;

  p {
    opacity: 0.8;
    text-align: center;
  }
`;
