import styled from 'styled-components';

import Colors from '../../../utils/colors';

interface DashedContainerProps {
  hasLogo: boolean;
}

export const DashedContainer = styled.button<DashedContainerProps>`
  display: flex;
  place-content: center;
  background: ${Colors.white};
  border: ${(props) => (props.hasLogo ? 'none' : `1px dashed ${Colors.black}`)};
  border-radius: 6px;

  transition: background-color 0.3s ease-in-out;

  div {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;

    p {
      margin-bottom: 0rem;
    }
  }

  &:hover {
    background-color: ${Colors.primary};
    color: ${Colors.white};

    div {
      svg {
        color: ${Colors.white};
      }
    }
  }

  svg {
    width: 2.5rem;
    height: 2.5rem;
    margin-bottom: 0.5rem;
    margin-left: 0rem;

    color: ${Colors.black};
  }
`;

export const ImgLogo = styled.img`
  height: auto;
  width: 16.2rem;
`;
