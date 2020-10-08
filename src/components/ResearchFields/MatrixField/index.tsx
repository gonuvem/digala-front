import React, { InputHTMLAttributes, useRef, useEffect } from 'react';
import { useTransition } from 'react-spring';
import { useField } from '@unform/core';

import CustomCheckbox from './CustomCheckbox';
import ErrorMessage from '../../Common/ErrorMessage';
import { Container, LineTitle } from './styles';

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
}) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const { fieldName, registerField, error } = useField(name);
  const transitions = useTransition(!!error, {
    from: { opacity: 0, transform: 'translateX(-50px)' },
    enter: { opacity: 1, transform: 'translateX(0px)' },
    leave: { opacity: 0, transform: 'translateX(-50px)' },
  });

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs.current,
      getValue: (refs: HTMLInputElement[]) => {
        return refs.filter((ref) => ref.checked).map((ref) => ref.value);
      },
      setValue: (_, values: any) => {
        values.forEach((pair: number[]) => {
          inputRefs.current[pair[0] * columns.length + pair[1]].checked = true;
        });
      },
    });
  }, [registerField, fieldName, columns.length]);

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
                        rowIndex * columns.length + columnIndex
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
      {transitions(
        (props, item) =>
          item && (
            <ErrorMessage
              style={{ ...props, alignSelf: 'flex-start' }}
              message={error}
            />
          ),
      )}
    </Container>
  );
};

export default MatrixField;
