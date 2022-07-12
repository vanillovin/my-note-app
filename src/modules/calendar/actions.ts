export const CREATE_OR_UPDATE_SCHEDULE =
  `calendar/CREATE_OR_UPDATE_SCHEDULE` as const;
export const DELETE_SCHEDULE = `calendar/DELETE_SCHEDULE` as const;

export const createOrUpdateSchedule = (day: number, text: string) => ({
  type: CREATE_OR_UPDATE_SCHEDULE,
  payload: { day, text },
});

export const deleteSchedule = (day: number) => ({
  type: DELETE_SCHEDULE,
  payload: { day },
});
