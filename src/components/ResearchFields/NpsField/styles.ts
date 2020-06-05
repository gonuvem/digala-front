import styled from 'styled-components';
import Colors from '../../../utils/colors';

export const Container = styled.div`
  line-height: 1.1875rem;

  > div {
    display: flex;
    margin-top: 1.2rem;
    flex: 1;
    justify-content: space-between;
    p {
      font-size: 0.75rem;
      font-weight: 500;
      color: ${Colors.secondary};
    }
  }
`;

export const Title = styled.p`
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

export const NumberBar = styled.div`
  /* height: 4.25rem; */
  /* display: flex; */
  border: 1px solid ${Colors.black};
  border-radius: 4px;
`;

export const Number = styled.div`
  text-decoration: none;
  flex: 1;
  padding: 1.2rem;
  border-right: 1px solid ${Colors.black};
  /* background: #000; */

  /* font-size: 1.5rem; */
`;
