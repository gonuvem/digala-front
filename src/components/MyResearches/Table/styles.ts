import styled from 'styled-components';

import Colors from '../../../utils/colors';

interface statusProps {
  isActive: boolean;
}

export const CreatedAt = styled.div`
  width: 145px;
`;

export const Answers = styled.div`
  width: 145px;
`;

export const Status = styled.div`
  display: flex;
  width: 125px;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  a {
    text-decoration: none;
    display: flex;
    align-items: flex-end;
  }

  img {
    height: 22px;
    width: 22px;

    margin-right: 6px;
  }

  div {
    width: 0.099rem;
    height: 25px;
    opacity: 0.12;
    background: ${Colors.black};
    margin: 0 8px;
  }
`;

export const Name = styled.div`
  width: 300px;
  min-width: 300px;
`;

export const TableLabels = styled.div`
  display: flex;
  align-items: center;
  height: 58px;
  padding: 0 16px;
  border-radius: 4px;
  background: ${Colors.secondary};

  font-size: 16px;
  font-weight: 500;
  color: ${Colors.smokeWhite};
`;

export const TableRow = styled.div`
  height: 100px;
  padding: 0 16px;
  display: flex;
  align-items: center;

  p {
    font-size: 16px;
    color: ${Colors.black};
  }
`;

export const ColorStatus = styled.div<statusProps>`
  height: 16px;
  width: 16px;
  border-radius: 50%;
  margin-right: 6px;
  background: ${(props) =>
    props.isActive ? Colors.positive : Colors.negative};
`;

export const EditLabel = styled.h3`
  font-size: 16px;
  align-items: center;
  font-weight: bold;
  color: ${Colors.primary};
`;

export const DeleteLabel = styled.h3`
  font-size: 16px;
  align-items: center;
  font-weight: bold;
  color: ${Colors.negative};
`;

export const Separator = styled.div`
  height: 1px;
  background: ${Colors.black};
  opacity: 0.12;
`;

export const ResultButon = styled.a`
  text-decoration: none;
  padding: 14px 30px;
  border-radius: 4px;
  border: 2px solid ${Colors.primary};

  p {
    font-size: 18px;
    font-weight: bold;
    color: ${Colors.primary};
  }
`;
