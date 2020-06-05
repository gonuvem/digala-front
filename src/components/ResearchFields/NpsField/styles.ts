import styled from 'styled-components';
import Colors from '../../../utils/colors';

interface NumberProps {
  isSelected: boolean;
}

export const Container = styled.div`
  line-height: 1.1875rem;

  div {
    div {
      display: flex;
      flex: 1;
      justify-content: space-between;
      p {
        font-size: 0.75rem;
        font-weight: 500;
        color: ${Colors.secondary};
      }
    }

    div:first-child {
      margin: 1.2rem 0 0.3rem 0;
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

  button:last-child {
    border: none;
  }
`;

export const Number = styled.button<NumberProps>`
  text-decoration: none;
  flex: 1;
  padding: 1.2rem;
  background: ${(props) => (props.isSelected ? Colors.primary : Colors.white)};
  border: none;
  border-right: 1px solid ${Colors.black};

  color: ${(props) => (props.isSelected ? Colors.white : Colors.black)};
  /* font-size: 1.5rem; */
`;
