import styled from 'styled-components';
import Colors from '../../../utils/colors';

interface NumberProps {
  isSelected: boolean;
}

export const Container = styled.div`
  line-height: 1.1875rem;

  label {
    display: flex;
    flex-direction: column;

    span {
      font-weight: 500;
      color: ${Colors.black};
      margin-bottom: 0.5rem;
    }

    p {
      font-weight: 400;
    }
  }

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

  h2 {
    font-size: 1rem;
  }

  transition: 0.3s ease;

  &:hover {
    background: ${Colors.primary};
    color: ${Colors.white};
  }

  @media (max-width: 1280px) {
    padding: 1rem 0.8rem;
  }
`;
