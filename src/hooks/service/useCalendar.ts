import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules';
import { createOrUpdateSchedule, deleteSchedule } from '../../modules/calendar';

const useCalendar = () => {
  const dispatch = useDispatch();

  const calendar = useSelector((state: RootState) => state.calendar);

  const onCreateOrUpdateSchedule = useCallback(
    (day: number, text: string) => dispatch(createOrUpdateSchedule(day, text)),
    [dispatch]
  );

  const onDeleteSchedule = useCallback(
    (day: number) => dispatch(deleteSchedule(day)),
    [dispatch]
  );

  return {
    calendar,
    onCreateOrUpdateSchedule,
    onDeleteSchedule,
  };
};

export default useCalendar;
