import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer from '../modules/index'; // the value from combineReducers

const persistConfig = {
  key: 'root',
  // storage에 저장함
  storage,
  // stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
};

// const pReducer = persistReducer(persistConfig, rootReducer);

// export const store = createStore(pReducer);
// export const persistor = persistStore(store);

export default persistReducer(persistConfig, rootReducer);

// index.tsx로 옮김. 나중에 다시 분리해보기
