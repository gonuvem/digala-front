import React, { InputHTMLAttributes } from 'react';

import CustomCheckbox from './CustomCheckbox';

import { Container, LineTitle } from './styles';

interface MatrixFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  columns: string[];
  lines: string[];
}

const MatrixField: React.FC<MatrixFieldProps> = ({
  name,
  columns,
  lines,
  ...rest
}) => {
  return (
    <Container>
      <label htmlFor="">
        Matriz de escolhas
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </label>
      <table>
        <thead>
          <tr>
            <th />
            {columns.map((column) => (
              <th>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {lines.map((line, lineIndex) => (
            <tr>
              <td>
                <LineTitle>{line}</LineTitle>
              </td>
              {columns.map((column, columnIndex) => (
                <td>
                  <CustomCheckbox
                    fieldName={name}
                    id={`${name}-row${lineIndex}-col${columnIndex}`}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default MatrixField;
