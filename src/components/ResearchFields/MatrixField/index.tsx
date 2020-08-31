import React, { InputHTMLAttributes, useRef, useEffect } from 'react';
import { useField } from '@unform/core';

import CustomCheckbox from './CustomCheckbox';

import { Container, LineTitle } from './styles';

import flattenArray from '../../../utils/flattenArray';

interface MatrixFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  description?: string;
  label?: string;
  multipleChoice: boolean;
  name: string;
  columns: string[];
  rows: string[];
}

const MatrixField: React.FC<MatrixFieldProps> = ({
  description,
  label,
  multipleChoice,
  name,
  columns,
  rows,
  ...rest
}) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs.current,
      getValue: (refs: HTMLInputElement[]) => {
        return refs.filter((ref) => ref.checked).map((ref) => ref.value);
      },
    });
  }, [registerField, fieldName]);

  return (
    <Container>
      <label htmlFor={name}>
        {label && <span>{label}</span>}
        {description && <p>{description}</p>}
      </label>
      <table id={name}>
        <thead>
          <tr>
            <th />
            {columns.map((column) => (
              <th key={`${name}-${column}`}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={`${name}-${row}`}>
              <td>
                <LineTitle>{row}</LineTitle>
              </td>
              {columns.map((column, columnIndex) => (
                <td key={`${name}-${row}-${column}`}>
                  <CustomCheckbox
                    key={`${name}-${
                      rowIndex * columns.length - 1 + columnIndex
                    }`}
                    inputRef={(ref) => {
                      inputRefs.current[
                        rowIndex * columns.length - 1 + columnIndex
                      ] = ref as HTMLInputElement;
                    }}
                    fieldName={`line-${rowIndex}`}
                    value={[rowIndex.toString(), columnIndex.toString()]}
                    id={`${name}-row${rowIndex}-col${columnIndex}`}
                    type={multipleChoice ? 'checkbox' : 'radio'}
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
