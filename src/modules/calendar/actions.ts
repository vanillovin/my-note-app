export const ADD_SCHEDULE = `calendar/ADD_SCHEDULE` as const;
export const DELETE_SCHEDULE = `calendar/DELETE_SCHEDULE` as const;

export const addSchedule = (day: number, text: string) => ({
  type: ADD_SCHEDULE,
  payload: { day, text },
});

export const deleteSchedule = (day: number) => ({
  type: DELETE_SCHEDULE,
  payload: { day },
});
