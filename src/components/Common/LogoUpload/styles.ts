import styled from 'styled-components';

import Colors from '../../../utils/colors';

interface DashedContainerProps {
  hasLogo: boolean;
}

export const DashedContainer = styled.button<DashedContainerProps>`
  /* height: 2rem; */
  display: flex;
  place-content: center;
  background: ${Colors.white};
  border: ${(props) => (props.hasLogo ? 'none' : `1px dashed ${Colors.black}`)};
  border-radius: 6px;

  div {
    flex-direction: column;
    place-content: center;
    padding: 1.5rem;
  }
`;

export const ImgLogo = styled.img`
  height: auto;
  width: 16.2rem;
`;

export const IconLogoUpload = styled.img`
  height: 2rem;
  width: 2.8125rem;
  align-self: center;
  margin-bottom: 0.5rem;
`;
