import styled from 'styled-components';
import Modal from 'react-modal';

import Colors from '../../../utils/colors';

export const Container = styled(Modal).attrs({
  style: { overlay: { background: Colors.blackOpacity } },
})`
  display: flex;
  position: static;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  max-width: 22rem;
  transform: translateY(50%);
  margin: 2rem auto;
  padding: 2rem 2.5rem;

  background-color: ${Colors.white};
  border-radius: 4px;
`;
