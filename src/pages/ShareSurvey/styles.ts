import styled from 'styled-components';

import Colors from '../../utils/colors';

interface CardOptionProps {
  gradientColor: string;
}

interface NameProps {
  fontColor: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Header = styled.div`
  flex: 1;
`;

export const LinkShare = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
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
`;

export const ShareOptions = styled.div`
  display: flex;
  margin-top: 1.5rem;
  div {
    width: 17.875rem;
    margin-right: 0.51rem;
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
