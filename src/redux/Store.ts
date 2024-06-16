import { configureStore } from '@reduxjs/toolkit'
import UserSlice from './Slice/UserSlice/UserSlice';

export const store = configureStore({
    reducer: {
        user: UserSlice,
    },
  devTools : import.meta.env.NODE_ENV !== 'dev',
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch