// create root reducer
import { combineReducers } from 'redux';
import todos from './todos';
import diary from './diary';
import calendar from './calendar';

const rootReducer = combineReducers({ todos, diary, calendar });

export default rootReducer;

// 루트 리듀서의 반환값를 유추해줌
export type RootState = ReturnType<typeof rootReducer>;
