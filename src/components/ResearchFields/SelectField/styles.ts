import styled from 'styled-components';
import Select from 'react-select';

import Colors from '../../../utils/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  label {
    span {
      display: inline-block;
      font-weight: 500;
      margin-bottom: 0.5rem;
    }
  }

  > p {
    margin-top: 0.5rem;
  }
`;

export const CustomSelect = styled(Select)`
  margin-top: 1rem;
  .react-select__control {
    border-radius: 4px;
    border: solid 2px ${Colors.black};

    &:hover {
      border-color: ${Colors.primary};
    }
  }

  .react-select__value-container {
    padding: 1rem;
  }

  .react-select__indicator-separator {
    display: none;
  }

  .react-select__dropdown-indicator {
    color: ${Colors.black};

    &:hover {
      color: ${Colors.primary};
    }
  }
`;
