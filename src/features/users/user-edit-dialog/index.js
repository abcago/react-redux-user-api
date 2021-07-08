import React from "react";
import { Input, Form, Modal, Button } from "antd";

const ModalComponent = ({
  handleCancel,
  isModalVisible,
  selectedUser,
  userUpdated,
}) => {
  const FormModel = [
    { name: "name", label: "Name" },
    { name: "email", label: "Email" },
    { name: "phone", label: "Phone" },
    { name: "website", label: "Website" },
  ];
  return (
    <Modal
      title={selectedUser?.name}
      visible={isModalVisible}
      onCancel={handleCancel}
      footer={[
        <Button onClick={handleCancel}>Cancel</Button>,
        <Button form="myForm" type="primary" key="submit" htmlType="submit">
          Ok
        </Button>,
      ]}
    >
      <Form
        id={"myForm"}
        onFinish={(values) =>
          userUpdated({
            id: selectedUser.id,
            username: selectedUser.username,
            ...values,
          })
        }
        initialValues={selectedUser}
      >
        {FormModel.map((item, index) => (
          <Form.Item
            key={index}
            rules={[
              {
                required: true,
                message: `Please input your ${item.name}!`,
              },
            ]}
            label={item.label}
            name={item.name}
          >
            <Input />
          </Form.Item>
        ))}
      </Form>
    </Modal>
  );
};

export default ModalComponent;
