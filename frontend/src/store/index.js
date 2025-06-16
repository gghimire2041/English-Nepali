import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import lessonsSlice from './slices/lessonsSlice';
import progressSlice from './slices/progressSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    lessons: lessonsSlice,
    progress: progressSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;