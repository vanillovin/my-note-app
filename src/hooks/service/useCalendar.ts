import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules';
import { addSchedule, deleteSchedule } from '../../modules/calendar';

const useCalendar = () => {
  const dispatch = useDispatch();

  const calendar = useSelector((state: RootState) => state.calendar);

  const onAddSchedule = useCallback(
    (day: number, text: string) => dispatch(addSchedule(day, text)),
    [dispatch]
  );

  const onDeleteSchedule = useCallback(
    (day: number) => dispatch(deleteSchedule(day)),
    [dispatch]
  );

  return {
    calendar,
    onAddSchedule,
    onDeleteSchedule,
  };
};

export default useCalendar;
