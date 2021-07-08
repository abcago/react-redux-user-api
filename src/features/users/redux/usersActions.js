import * as requestFromServer from "./usersCrud";
import { usersSlice } from "./usersSlice";

const { actions } = usersSlice;

export const getUsers = () => (dispatch) => {
  dispatch(actions.startCall());
  return requestFromServer
    .getUsers()
    .then((response) => {
      const users = response.data.map((user) => {
        return {
          ...user,
          favStatus: false,
        };
      });

      dispatch(actions.getUsers({ users }));
    })
    .catch((error) => {
      error.clientMessage = "Can't get users";
      dispatch(actions.catchError({ error }));
    });
};
