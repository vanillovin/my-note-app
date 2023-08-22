export const CREATE_OR_UPDATE_SCHEDULE =
  `calendar/CREATE_OR_UPDATE_SCHEDULE` as const;
export const DELETE_SCHEDULE = `calendar/DELETE_SCHEDULE` as const;

export const createOrUpdateSchedule = (
  year: number,
  month: number,
  day: number,
  text: string
) => ({
  type: CREATE_OR_UPDATE_SCHEDULE,
  payload: { year, month, day, text },
});

export const deleteSchedule = (year: number, month: number, day: number) => ({
  type: DELETE_SCHEDULE,
  payload: { year, month, day },
});
