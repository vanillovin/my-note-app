// create root reducer
import { combineReducers } from 'redux';
import todos from './todos';

const rootReducer = combineReducers({ todos });

export default rootReducer;

// 루트 리듀서의 반환값를 유추해줌
export type RootState = ReturnType<typeof rootReducer>;
