import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../../components/card";
import Loading from "../../components/loading-indicator";

import { getUsers } from "./redux/usersActions";
import classes from "./users.module.scss";
import {
  selectUsers,
  selectLoading,
  setFavStatus,
  userDeleted,
  setModalVisible,
  selectIsModalVisible,
  selectSelectedUser,
  userUpdated,
} from "./redux/usersSlice";

import EditDialog from "./user-edit-dialog";
const Users = () => {
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const loading = useSelector(selectLoading);
  const users = useSelector(selectUsers);
  const isModalVisible = useSelector(selectIsModalVisible);
  const selectedUser = useSelector(selectSelectedUser);

  const dispatch = useDispatch();

  return (
    <>
      {loading ? (
        <div className={classes.loadingContainer}>
          <Loading />
        </div>
      ) : (
        users != null && (
          <>
            <div className={classes.userContainer}>
              {users?.map((user, index) => (
                <div key={index} className={classes.userCard}>
                  <Card
                    website={user.website}
                    phone={user.phone}
                    mail={user.email}
                    key={index}
                    id={user.id}
                    name={user.name}
                    image={user.username}
                    favStatus={user.favStatus}
                    setFavStatus={(id) => dispatch(setFavStatus({ id }))}
                    deleteUser={(id) => dispatch(userDeleted({ id }))}
                    setModalVisible={() =>
                      dispatch(
                        setModalVisible({
                          isModalVisible: true,
                          selectedUser: user,
                        })
                      )
                    }
                  />
                </div>
              ))}
            </div>
            {isModalVisible && (
              <EditDialog
                userUpdated={(values) => dispatch(userUpdated({ values }))}
                selectedUser={selectedUser}
                isModalVisible={isModalVisible}
                handleCancel={() =>
                  dispatch(
                    setModalVisible({
                      isModalVisible: false,
                      selectedUser: null,
                    })
                  )
                }
              />
            )}
          </>
        )
      )}
    </>
  );
};

export default Users;
