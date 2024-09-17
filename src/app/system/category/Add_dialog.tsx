import {
  Modal,
  Button,
  TextInput,
  Group,
  Grid,
  Box,
  Loader,
  Textarea,
} from "@mantine/core";
import { useState, useEffect } from "react";
import { notifications } from "@mantine/notifications";
import ReactDOM from "react-dom";
import { useForm } from "@mantine/form";

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

export default function AddItemDialog({ opened, onClose }) {
  const [loading, setLoading] = useState(false);

  const form = useForm({
    initialValues: {
      name: "",
      price: "",
      qty: "",
      description: "",
    },

    validate: {
      name: (value) => (value.length < 1 ? "Vui lòng nhập tên hạn mục" : null),
      price: (value) =>
        value && !isNaN(value) && value > 0 ? null : "Giá phải là một số dương",
      qty: (value) =>
        value && !isNaN(value) && value > 0
          ? null
          : "Số lượng phải là một số dương",
      description: (value) => (value.length < 1 ? "Vui lòng nhập mô tả" : null),
    },
  });

  const handleSave = (values) => {
    setLoading(true);
    console.log("Form values:", values);

    setTimeout(() => {
      form.reset();
      onClose();

      notifications.show({
        title: "Thêm thành công",
        message: "Phần mềm đã được thêm vào danh sách.",
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

      <Modal
        opened={opened}
        onClose={onClose}
        title="Thêm Hạng Mục Mới"
        size="lg"
        padding="sm"
      >
        <form onSubmit={form.onSubmit(handleSave)}>
          <TextInput
            label="Tên hạng mục"
            placeholder="Nhập tên hạng mục"
            {...form.getInputProps("name")}
            size="sm"
            style={{ marginBottom: "1rem" }}
          />

          <Grid style={{ marginBottom: "1rem" }}>
            <Grid.Col span={6}>
              <TextInput
                label="Giá"
                placeholder="Nhập giá"
                {...form.getInputProps("price")}
                size="sm"
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                label="Số lượng"
                placeholder="Nhập số lượng"
                {...form.getInputProps("qty")}
                size="sm"
              />
            </Grid.Col>
          </Grid>

          <Textarea
            label="Mô tả"
            placeholder="Mô tả..."
            resize="vertical"
            {...form.getInputProps("description")}
          />

          <Group position="right" mt="xl">
            <Button type="submit" size="sm" disabled={loading}>
              Thêm
            </Button>
          </Group>
        </form>
      </Modal>
    </>
  );
}
