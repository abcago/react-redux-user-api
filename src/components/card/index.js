import { Card } from "antd";
import {
  EditOutlined,
  DeleteFilled,
  HeartOutlined,
  HeartFilled,
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

import classes from "./card.module.scss";

const CardComponent = ({
  image,
  id,
  setFavStatus,
  favStatus,
  deleteUser,
  setModalVisible,
  name,
  website,
  mail,
  phone,
}) => {
  return (
    <Card
      style={{ width: "100%", margin: "15px", border: "1px solid #e8e8e8" }}
      cover={
        <div className={classes.cardHeaderImage}>
          <img
            className={classes.image}
            alt={`${image}`}
            src={`https://avatars.dicebear.com/v2/avataaars/${image}.svg?options[mood][]=happy`}
          />
        </div>
      }
      actions={[
        <>
          {favStatus ? (
            <HeartFilled
              onClick={() => setFavStatus(id)}
              key="faved"
              style={{ color: "red", fontSize: "25px" }}
            />
          ) : (
            <HeartOutlined
              onClick={() => setFavStatus(id)}
              key="unfaved"
              style={{ color: "red", fontSize: "25px" }}
            />
          )}
        </>,

        <EditOutlined
          onClick={setModalVisible}
          key="edit"
          style={{ fontSize: "25px" }}
        />,
        <DeleteFilled
          onClick={() => deleteUser(id)}
          key="delete"
          style={{ fontSize: "25px" }}
        />,
      ]}
    >
      <h3 className={classes.nameText}>
        <b>{name}</b>
      </h3>
      <div className={classes.descriptionWrapper}>
        <MailOutlined />
        <span className={classes.descriptionText}>{mail}</span>
      </div>
      <div className={classes.descriptionWrapper}>
        <PhoneOutlined />
        <span className={classes.descriptionText}>{phone}</span>
      </div>
      <div className={classes.descriptionWrapper}>
        <GlobalOutlined />
        <span span className={classes.descriptionText}>
          {website}
        </span>
      </div>
    </Card>
  );
};

export default CardComponent;
