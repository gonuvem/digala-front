import React, { InputHTMLAttributes } from 'react';

import CustomCheckbox from './CustomCheckbox';

import { Container, LineTitle } from './styles';

interface MatrixFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  description?: string;
  label?: string;
  name: string;
  columns: string[];
  lines: string[];
}

const MatrixField: React.FC<MatrixFieldProps> = ({
  description,
  label,
  name,
  columns,
  lines,
  ...rest
}) => {
  return (
    <Container>
      <label htmlFor="">
        {label && <span>{label}</span>}
        {description && <p>{description}</p>}
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
