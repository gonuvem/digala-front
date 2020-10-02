import styled, { css } from 'styled-components';
import { shade } from 'polished';
import Modal from 'react-modal';

import Colors from '../../utils/colors';

interface CardOptionProps {
  gradientColor: string;
}

interface NameProps {
  fontColor: string;
}

interface NavLinkProps {
  isActive?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 10rem;
`;

export const Titles = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 2rem;
  span {
    font-size: 1.2rem;
    font-weight: bold;
    margin-right: 11rem;
  }
`;

export const Header = styled.div`
  flex: 1;
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

export const LinkShare = styled.div`
  flex: 1;
  display: flex;
  padding: 1rem;
  background: ${Colors.white};
  border-radius: 6px;

  p {
    font-size: 0.75rem;
    margin-bottom: 0.5rem;
  }

  div {
    div {
      display: flex;
    }
  }

  img {
    height: 2rem;
    width: 2rem;
  }

  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: solid 1px ${Colors.smokeWhite};
    border-radius: 4px 0px 0px 4px;
    padding: 0 1rem;
    height: 3rem;
    background: ${Colors.smokeWhite};

    color: ${Colors.primary};

    &:focus {
      border-color: ${Colors.primary};
    }
  }
`;

export const Separator = styled.div`
  width: 0.05rem;
  margin: 0 1rem;
  background: ${Colors.blackOpacity};
  opacity: 0.3;
`;

export const ShareOptions = styled.div`
  display: flex;
  margin-top: 1.5rem;
  justify-content: space-between;
  flex-wrap: wrap;

  button {
    flex: 1;
    margin-bottom: 1rem;
    border: none;
    text-decoration: none;
    text-align: left;
    background: ${Colors.smokeWhite};

    div {
      transition: border 0.3s ease;
    }

    &:hover {
      > div {
        border: solid 5px ${Colors.white};
      }
    }
  }

  button + button {
    margin-left: 1rem;
  }
`;

export const CardOption = styled.div<CardOptionProps>`
  flex: 1;
  display: flex;
  border-radius: 5px;
  height: 12.75rem;
  justify-content: center;
  align-items: center;
  background: ${(props) => `linear-gradient(${props.gradientColor})`};

  svg {
    height: 5.5rem;
    width: 6.875rem;
    color: ${Colors.white};
  }
`;

export const Name = styled.h3<NameProps>`
  color: ${(props) => props.fontColor};
  margin: 0.5rem 0 0.5rem 0;
`;

export const ButtonMedia = styled.button`
  border: none;
  background: none;
  margin: 1rem 0.5rem 0 0;
`;

export const ButtonCopy = styled.button`
  display: flex;
  justify-content: center;
  border: solid 1px ${Colors.primary};
  align-items: center;
  padding: 0rem 1.5rem;
  background: ${Colors.primary};
  text-decoration: none;
  color: ${Colors.white};
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;

  font-size: 1.125rem;
  font-weight: bold;

  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, Colors.primary)};
  }
`;

export const ModalShareSurvey = styled(Modal).attrs({
  style: { overlay: { background: Colors.blackOpacity } },
})`
  display: flex;
  position: static;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  max-width: 30rem;
  transform: translateY(50%);
  margin: 2rem auto;
  padding: 2rem 2.5rem;

  background-color: ${Colors.white};
  border-radius: 4px;

  h2 {
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
    text-align: justify;
  }

  button {
    margin-top: 1.5rem;

    background: transparent;
    border: none;

    font-weight: 500;
    font-size: 1.1rem;
    color: ${Colors.darkPrimary};
    text-decoration: none;
  }

  a {
    visibility: hidden;
  }
`;
