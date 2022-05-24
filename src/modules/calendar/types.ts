import { addSchedule, deleteSchedule } from './actions';

export type Calendar = {
  space: number;
  holidyas: number[];
  [key: number]: {
    [key: number]: string;
  };
};

export type CalendarState = Calendar[];

export type CalendarAction =
  | ReturnType<typeof addSchedule>
  | ReturnType<typeof deleteSchedule>;
