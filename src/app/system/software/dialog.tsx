import { Modal, Button, TextInput, Group, Grid, Box, Loader } from "@mantine/core";
import { useState, useEffect } from "react";
import { notifications } from "@mantine/notifications";
import ReactDOM from "react-dom";

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
      {visible && <Loader color="teal" size="lg" />}{/* Display spinner  */}
    </Box>,
    document.body
  );
};

export default function AddItemDialog({ opened, onClose }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSave = () => {
    setLoading(true);
    let data = { name: name, price: price, qty: qty };
    console.log("Check data submit", data);

    setTimeout(() => {
      setName("");
      setPrice("");
      setQty("");
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
      {/* Full-screen overlay */}
      <FullScreenOverlay visible={loading} />

      <Modal opened={opened} onClose={onClose} title="Thêm Hạng Mục Mới" size="lg" padding="sm">
        <TextInput
          label="Tên hạng mục"
          placeholder="Nhập tên hạng mục"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
          required
          size="sm"
          style={{ marginBottom: "1rem" }}
        />

        <Grid>
          <Grid.Col span={6}>
            <TextInput
              label="Giá"
              placeholder="Nhập giá"
              value={price}
              onChange={(e) => setPrice(e.currentTarget.value)}
              required
              size="sm"
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              label="Số lượng"
              placeholder="Nhập số lượng"
              value={qty}
              onChange={(e) => setQty(e.currentTarget.value)}
              required
              size="sm"
            />
          </Grid.Col>
        </Grid>

        <Group position="right" mt="xl">
          <Button onClick={handleSave} size="sm" disabled={loading}>
            Thêm
          </Button>
        </Group>
      </Modal>
    </>
  );
}