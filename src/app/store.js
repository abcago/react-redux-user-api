import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/users/redux/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
