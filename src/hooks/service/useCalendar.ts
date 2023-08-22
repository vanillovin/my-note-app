import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules';
import { createOrUpdateSchedule, deleteSchedule } from '../../modules/calendar';

const useCalendar = () => {
  const dispatch = useDispatch();

  const calendar = useSelector((state: RootState) => state.calendar);

  const onCreateOrUpdateSchedule = useCallback(
    (year: number, month: number, day: number, text: string) =>
      dispatch(createOrUpdateSchedule(year, month, day, text)),
    [dispatch]
  );

  const onDeleteSchedule = useCallback(
    (year: number, month: number, day: number) =>
      dispatch(deleteSchedule(year, month, day)),
    [dispatch]
  );

  return {
    calendar,
    onCreateOrUpdateSchedule,
    onDeleteSchedule,
  };
};

export default useCalendar;
