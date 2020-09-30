import styled from 'styled-components';
import ReactCalendar from 'react-calendar';
import { transparentize } from 'polished';

import Colors from '../../../utils/colors';

export const Container = styled.div`
  > span {
    display: inline-block;
    font-weight: 500;
    margin-bottom: 1rem;
  }
`;

export const CustomCalendar = styled(ReactCalendar)`
  .react-calendar__navigation {
    button {
      background-color: ${Colors.primary};
      color: ${Colors.smokeWhite};
      border: none;
      /* padding: 0.5rem 0rem; */

      span {
        font-size: 0.75rem;
        text-transform: capitalize;
      }
    }
  }

  .react-calendar__navigation__arrow {
    font-size: 2rem;
  }

  .react-calendar__navigation__next-button {
    flex: 1;
  }

  .react-calendar__navigation__prev-button {
    flex: 1;
  }

  .react-calendar__viewContainer {
    background-color: ${Colors.smokeWhite};
  }

  .react-calendar__month-view__weekdays {
    margin-top: 0.5rem;
  }

  .react-calendar__month-view__weekdays__weekday {
    text-align: center;
    text-transform: uppercase;
    font-size: 0.75rem;
  }

  .react-calendar__tile {
    background-color: transparent;
    border: none;
    font-size: 0.75rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;

    transition: background-color 0.1s ease, color 0.1s ease;

    &:hover {
      background-color: ${Colors.primary};
      color: ${Colors.smokeWhite};
    }
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    opacity: 0.3;
  }

  .react-calendar__tile--rangeStart {
    background-color: ${Colors.primary} !important;
    color: ${Colors.smokeWhite};
  }

  .react-calendar__tile--rangeEnd {
    background-color: ${Colors.primary} !important;
    color: ${Colors.smokeWhite};
  }

  .react-calendar__tile--range {
    background-color: ${transparentize(0.4, Colors.primary)};
  }
`;
