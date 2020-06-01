import styled from 'styled-components';
import Modal from 'react-modal';

import Colors from '../../../utils/colors';

interface StatusProps {
  isActive: boolean;
}

export const CreatedAt = styled.div`
  flex: 1;
`;

export const Answers = styled.div`
  flex: 1;
`;

export const Status = styled.div`
  display: flex;
  flex: 1;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  button {
    border: none;
    display: flex;
    align-items: flex-end;
    background: ${Colors.white};
  }

  img {
    height: 1.375rem;
    width: 1.375rem;

    margin-right: 0.375rem;
  }

  div {
    width: 0.099rem;
    height: 1.5625rem;
    opacity: 0.12;
    background: ${Colors.black};
    margin: 0 0.5rem;
  }
`;

export const Name = styled.div`
  flex: 2;
`;

export const TableLabels = styled.div`
  display: flex;
  align-items: center;
  height: 3.625rem;
  padding: 0 1rem;
  border-radius: 4px;
  background: ${Colors.secondary};
  justify-content: space-between;
  font-size: 1rem;
  font-weight: 500;
  color: ${Colors.smokeWhite};
`;

export const TableRow = styled.div`
  height: 6.25rem;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: 1rem;
    color: ${Colors.black};
  }
`;

export const ColorStatus = styled.div<StatusProps>`
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  margin-right: 0.375rem;
  background: ${(props) =>
    props.isActive ? Colors.positive : Colors.negative};
`;

export const EditLabel = styled.h3`
  font-size: 1rem;
  align-items: center;
  font-weight: bold;
  color: ${Colors.primary};
`;

export const DeleteLabel = styled.h3`
  font-size: 1rem;
  align-items: center;
  font-weight: bold;
  color: ${Colors.negative};
`;

export const Separator = styled.div`
  height: 0.0625rem;
  background: ${Colors.black};
  opacity: 0.12;
`;

export const ModalDelete = styled(Modal).attrs({
  style: { overlay: { background: Colors.black } },
})`
  display: flex;
  width: 22rem;
  padding: 1.8rem 1rem;
  margin: 10rem 30rem;
  background: ${Colors.white};
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div {
    width: 20.8rem;
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
    font-weight: 500;
  }

  img {
    height: 1.375rem;
    width: 1.375rem;

    margin-right: 0.475rem;
  }

  p {
    margin-bottom: 1.2rem;
  }
`;
