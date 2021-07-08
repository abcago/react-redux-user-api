import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  userList: null,
  error: null,
  isModalVisible: false,
  selectedUser: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    //catchError
    catchError: (state, action) => {
      state.error = `${action.payload.error}`;
      state.loading = false;
    },
    //startCall
    startCall: (state, action) => {
      state.error = null;
      state.loading = true;
    },
    // getUsers
    setModalVisible: (state, action) => {
      state.isModalVisible = action.payload.isModalVisible;
      state.selectedUser = action.payload.selectedUser;
    },
    // getUsers
    getUsers: (state, action) => {
      state.userList = action.payload.users;
      state.loading = false;
    },
    //change fav status
    setFavStatus: (state, action) => {
      state.userList = state.userList.map((user) => {
        if (user.id === action.payload.id) {
          return {
            ...user,
            favStatus: !user.favStatus,
          };
        }
        return user;
      });
    },
    // updateCustomer
    userUpdated: (state, action) => {
      state.error = null;
      state.isModalVisible = false;
      state.userList = state.userList.map((user) => {
        if (user.id === action.payload.values.id) {
          return {
            ...user,
            name: action.payload.values.name,
            email: action.payload.values.email,
            phone: action.payload.values.phone,
            website: action.payload.values.website,
          };
        }
        return user;
      });
    },
    // deleteCustomer
    userDeleted: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.userList = state.userList.filter(
        (el) => el.id !== action.payload.id
      );
    },
  },
});

export const {
  setFavStatus,
  userDeleted,
  userUpdated,
  setModalVisible,
} = usersSlice.actions;

export const selectUsers = (state) => state.users.userList;
export const selectLoading = (state) => state.users.loading;
export const selectIsModalVisible = (state) => state.users.isModalVisible;
export const selectSelectedUser = (state) => state.users.selectedUser;

export default usersSlice.reducer;
