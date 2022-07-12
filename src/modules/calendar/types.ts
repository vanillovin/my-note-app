import { createOrUpdateSchedule, deleteSchedule } from './actions';

export type Calendar = {
  space: number;
  holidyas: number[];
  [key: number]: {
    [key: number]: string;
  };
};

export type CalendarState = Calendar[];

export type CalendarAction =
  | ReturnType<typeof createOrUpdateSchedule>
  | ReturnType<typeof deleteSchedule>;
