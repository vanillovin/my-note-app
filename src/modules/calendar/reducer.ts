import { ADD_SCHEDULE, DELETE_SCHEDULE } from './actions';
import { CalendarAction, CalendarState } from './types';
import calendarState from './calendarState';

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();

const initialState: CalendarState = calendarState;

export default function calendar(
  state: CalendarState = initialState,
  action: CalendarAction
): CalendarState {
  switch (action.type) {
    case ADD_SCHEDULE:
      return state.map((mon, i) =>
        i === month
          ? {
              ...mon,
              [year]: {
                ...mon[year],
                [action.payload.day]: action.payload.text,
              },
            }
          : mon
      );
    case DELETE_SCHEDULE:
      return state.map((mon, i) =>
        i === month
          ? {
              ...mon,
              [year]: {
                ...mon[year],
                [action.payload.day]: '',
              },
            }
          : mon
      );
    default:
      return state;
  }
}
