import { createOrUpdateSchedule, deleteSchedule } from './actions';

export interface CalendarDay {
  name: string;
  text: string;
  isHoliday: boolean;
  bgColor: string;
}

export interface CalendarMonth {
  space: number;
  days: { [day: number]: CalendarDay };
}

export interface CalendarYear {
  [month: number]: CalendarMonth;
}

export interface CalendarState {
  [year: number]: CalendarYear;
}

export type CalendarAction =
  | ReturnType<typeof createOrUpdateSchedule>
  | ReturnType<typeof deleteSchedule>;
