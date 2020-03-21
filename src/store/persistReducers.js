import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export default redurcers => {
  const persistedReducer = persistReducer(
    {
      key: 'root',
      storage,
      whitelist: ['auth'],
    },
    redurcers
  );

  return persistedReducer;
};
