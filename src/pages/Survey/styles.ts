import styled from 'styled-components';
import { transparentize, lighten, readableColor } from 'polished';

import Colors from '../../utils/colors';

interface ProgressBarProps {
  pagesCount: number;
}

interface StepProps {
  filled?: boolean;
}

interface SurveyHeaderProps {
  backgroundColor: string;
}

interface SurveyFooterProps {
  backgroundColor: string;
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

export const SurveyHeader = styled.div<SurveyHeaderProps>`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1.5rem 0rem;
  margin-bottom: 1rem;

  background-color: ${(props) => props.backgroundColor};
  border-radius: 4px;

  div {
    width: 100%;
    margin-right: 2rem;
    margin-left: 2rem;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 500;
    color: ${Colors.primary};
  }

  p {
    margin-top: 1rem;
    opacity: 0.9;
    color: ${(props) => readableColor(props.backgroundColor)};
  }

  img {
    max-width: 6rem;
    margin-left: 1.5rem;
  }

  @media (max-width: 670px) {
    flex-direction: column;

    div {
      margin-left: 0rem;
      margin-right: 0rem;
    }

    h3,
    p {
      text-align: center;
    }
  }
`;

export const FormArea = styled.div`
  display: flex;
  flex-direction: row-reverse;
  position: relative;
  width: 100%;

  #progress-wrapper {
    position: absolute;
  }

  form {
    width: 100%;
  }

  @media (max-width: 670px) {
    flex-direction: column;

    #progress-wrapper {
      position: relative;
    }
  }
`;

export const QuestionWrapper = styled.div`
  width: 100%;

  & + div {
    margin-top: 2.5rem;
  }

  & > div label:first-child span {
    font-size: 1.3rem;
    color: ${Colors.darkPrimary};
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

export const SurveyBody = styled.div`
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

      margin-top: 1.5rem;
      margin-bottom: 1.5rem;

      background-color: ${transparentize(0.88, Colors.black)};
    }
  }

  #survey-separator {
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

    #survey-separator {
      width: 80%;
    }

    img {
      margin-bottom: 2rem;
    }
  }
`;

export const SurveyFooter = styled.div<SurveyFooterProps>`
  width: 100%;

  padding: 2rem 0rem;
  margin-top: 1rem;

  background-color: ${(props) => props.backgroundColor};
  border-radius: 4px;

  p {
    margin: 0rem 1.5rem;
    opacity: 0.8;
    text-align: center;
    color: ${(props) => readableColor(props.backgroundColor)};
  }
`;
