import styled, { css } from 'styled-components';

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
  /* background: #000; */
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
    margin: 1rem 0.5rem 0 0;
  }

  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    border-radius: 4px;
    padding: 0 1rem;
    height: 3rem;
    background: ${Colors.smokeWhite};

    color: ${Colors.primary};
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
    width: 17.875rem;
    margin-bottom: 1rem;
    border: none;
    text-decoration: none;
    text-align: left;
    background: ${Colors.smokeWhite};
  }
`;

export const CardOption = styled.div<CardOptionProps>`
  display: flex;
  border-radius: 5px;
  height: 10.75rem;
  width: 17.875rem;
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
