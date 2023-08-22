import { CREATE_OR_UPDATE_SCHEDULE, DELETE_SCHEDULE } from './actions';
import { CalendarAction, CalendarState } from './types';
import initialCalendarData from './calendarData';

const initialState: CalendarState = initialCalendarData;

export default function calendar(
  state: CalendarState = initialState,
  action: CalendarAction
): CalendarState {
  switch (action.type) {
    case CREATE_OR_UPDATE_SCHEDULE: {
      const { year, month, day, text } = action.payload;
      return {
        ...state,
        [year]: {
          ...state[year],
          [month]: {
            ...state[year][month],
            days: {
              ...state[year][month].days,
              [day]: {
                ...state[year][month].days[day],
                text,
              },
            },
          },
        },
      };
    }
    case DELETE_SCHEDULE: {
      const { year, month, day } = action.payload;
      return {
        ...state,
        [year]: {
          ...state[year],
          [month]: {
            ...state[year][month],
            days: {
              ...state[year][month].days,
              [day]: {
                ...state[year][month].days[day],
                text: '',
              },
            },
          },
        },
      };
    }
    default:
      return state;
  }
}
