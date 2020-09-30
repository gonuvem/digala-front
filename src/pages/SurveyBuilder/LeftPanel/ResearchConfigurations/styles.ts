import styled from 'styled-components';
import { transparentize } from 'polished';

import Colors from '../../../../utils/colors';

export const Container = styled.div`
  form {
    margin-top: 1rem;
  }

  & > span {
    display: block;
    padding-bottom: 1rem;

    font-size: 1.2rem;

    border-bottom: solid 1px ${transparentize(0.88, Colors.black)};
    border-width: 100%;
  }

  section + section {
    margin-top: 1.5rem;
  }
`;
