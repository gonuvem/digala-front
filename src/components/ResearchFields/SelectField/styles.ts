import styled from 'styled-components';
import Select from 'react-select';

import Colors from '../../../utils/colors';

export const Container = styled.div`
  span {
    display: inline-block;
    font-weight: 500;
    margin-bottom: 1rem;
  }
`;

export const CustomSelect = styled(Select)`
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
