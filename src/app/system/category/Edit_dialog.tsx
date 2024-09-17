// file: EditItemDialog.js
import { Modal, TextInput, Button, Group, Loader, Box, Textarea } from "@mantine/core";
import { useState, useEffect } from "react";
import { notifications } from "@mantine/notifications";
import ReactDOM from "react-dom";
import { useForm } from "@mantine/form";

// FullScreenOverlay component để hiển thị loading
const FullScreenOverlay = ({ visible }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return ReactDOM.createPortal(
    <Box
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 1000,
        display: visible ? "flex" : "none",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {visible && <Loader color="teal" size="lg" />}
    </Box>,
    document.body
  );
};

export default function EditItemDialog({ opened, onClose, item }) {
  const [loading, setLoading] = useState(false); // State để điều khiển loading

  const form = useForm({
    initialValues: {
      name: "",
      price: "",
      quantity: "",
      unit: "",
      description: "",
    },

    validate: {
      name: (value) => (value.length < 1 ? "Vui lòng nhập tên hạng mục" : null),
      price: (value) => value && !isNaN(value) && value > 0 ? null : "Giá phải là số dương",
      quantity: (value) => value && !isNaN(value) && value > 0 ? null : "Số lượng phải là số dương",
      description: (value) => (value.length < 1 ? "Vui lòng nhập mô tả" : null),
    },
  });

  useEffect(() => {
    if (item) {
      form.setValues({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        unit: item.unit,
        description: item.description,
      });
    }
  }, [item]);

  const handleSave = (values) => {
    setLoading(true); 

    setTimeout(() => {
      console.log("Dữ liệu đã chỉnh sửa:", values);
      form.reset();
      onClose();

      notifications.show({
        title: "Chỉnh sửa thành công",
        message: "Thông tin đã được cập nhật thành công.",
        color: "teal",
        autoClose: 3000,
        position: "top-right",
      });

      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <FullScreenOverlay visible={loading} />

      <Modal opened={opened} onClose={onClose} title="Chỉnh sửa hạng mục" size="lg">
        <form onSubmit={form.onSubmit(handleSave)}>
          <TextInput
            label="Tên hạng mục"
            placeholder="Nhập tên hạng mục"
            {...form.getInputProps("name")}
            size="sm"
            style={{ marginBottom: "1rem" }}
          />

          <TextInput
            label="Giá"
            placeholder="Nhập giá"
            {...form.getInputProps("price")}
            size="sm"
            style={{ marginBottom: "1rem" }}
          />

          <TextInput
            label="Số lượng"
            placeholder="Nhập số lượng"
            {...form.getInputProps("quantity")}
            size="sm"
            style={{ marginBottom: "1rem" }}
          />

          <TextInput
            label="Đơn vị tính"
            placeholder="Nhập đơn vị tính"
            {...form.getInputProps("unit")}
            size="sm"
            style={{ marginBottom: "1rem" }}
          />

          <Textarea
            label="Mô tả"
            placeholder="Mô tả..."
            resize="vertical"
            {...form.getInputProps("description")}
            style={{ marginBottom: "1rem" }}
          />

          <Group position="right" mt="md">
            <Button type="submit" size="sm" disabled={loading}>
              Lưu
            </Button>
          </Group>
        </form>
      </Modal>
    </>
  );
}
