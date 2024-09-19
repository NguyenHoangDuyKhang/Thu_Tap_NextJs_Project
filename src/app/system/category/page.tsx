"use client";
import { Button, Card, Group, Table, Space, Box } from "@mantine/core";
import {
  IconEdit,
  IconTrash,
  IconEye,
  IconPlus,
  IconListDetails,
} from "@tabler/icons-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Pagination } from "@mantine/core";
import Breadcrumbst from "@/component/Breadcrumbs/Breadcrumbst";
import AddItemDialog from "./Add_dialog";
import EditItemDialog from "./Edit_dialog";

export default function Category() {
  const router = useRouter();
  const [activePage, setPage] = useState(1);
  const [dialogOpened, setDialogOpened] = useState(false); // State để điều khiển dialog
  const [editDialogOpened, setEditDialogOpened] = useState(false); // State để điều khiển dialog edit
  const [selectedItem, setSelectedItem] = useState(null); // State lưu trữ thông tin item cần chỉnh sửa

  const handleEditClick = (item: any) => {
    setSelectedItem(item); // Lưu item cần chỉnh sửa vào state
    setEditDialogOpened(true); // Mở dialog
  };

  const data = [
    {
      id: 1,
      name: "Phần mềm quản lý nhân sự",
      price: "50,000,000 VND",
      quantity: 1,
      unit: "Gói",
      description: "Phần mềm quản lý nhân sự",
    },
    {
      id: 2,
      name: "Phần mềm quản lý nhân sự",
      price: "50,000,000 VND",
      quantity: 1,
      unit: "Gói",
      description: "Phần mềm quản lý nhân sự",
    },
    {
      id: 3,
      name: "Phần mềm quản lý nhân sự",
      price: "50,000,000 VND",
      quantity: 1,
      unit: "Gói",
      description: "Phần mềm quản lý nhân sự",
    },
    {
      id: 4,
      name: "Phần mềm quản lý nhân sự",
      price: "50,000,000 VND",
      quantity: 1,
      unit: "Gói",
      description: "Phần mềm quản lý nhân sự",
    },
  ];
  const arr = [
    { title: "Trang chủ", href: "/system" },
    { title: "Hạng mục", href: "/system/category" },
  ];

  const rows = data.map((item, index) => (
    <tr
      key={item.id}
      style={{
        transition: "background-color 0.2s ease",
        fontSize: "16px",
        height: "60px",
        borderCollapse: "separate",
        marginBottom: "10px",
      }}
    >
      <td
        style={{
          borderTopLeftRadius: "10px",
          borderBottomLeftRadius: "10px",
          padding: "10px",
        }}
      >
        {index + 1}
      </td>
      <td style={{ padding: "10px" }}>{item.name}</td>
      <td style={{ padding: "10px" }}>{item.price}</td>
      <td style={{ padding: "10px" }}>{item.quantity}</td>
      <td style={{ padding: "10px" }}>{item.unit}</td>
      <td style={{ padding: "10px" }}>{item.description}</td>
      <td
        style={{
          borderTopRightRadius: "10px",
          borderBottomRightRadius: "10px",
          padding: "10px",
        }}
      >
        <Group>
          <Button
            variant="subtle"
            color="blue"
            onClick={() => handleEditClick(item)}
          >
            <IconEdit size={20} />
          </Button>
          <Button
            variant="subtle"
            color="blue"
            onClick={() => router.push("/system/category/detail")}
          >
            <IconListDetails  size={20} />
          </Button>
          <Button variant="subtle" color="red">
            <IconTrash size={20} />
          </Button>
        </Group>
      </td>
    </tr>
  ));

  return (
    <Box style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <Group
        position="apart"
        mb="md"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Breadcrumbst ArrBreadcrumb={arr} />

        <Box style={{ flexGrow: 1, textAlign: "right" }}>
          <Button
            rightSection={<IconPlus size={16} />}
            style={{
              color: "white",
              padding: "10px 20px",
              borderRadius: "8px",
              fontWeight: "bold",
              transition: "transform 0.2s ease",
            }}
            variant="gradient"
            gradient={{ from: 'rgba(2, 204, 201, 1)', to: 'rgba(227, 20, 203, 1)', deg: 66 }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            onClick={() => setDialogOpened(true)} // Hiển thị dialog khi click
          >
            Thêm
          </Button>
        </Box>
      </Group>

      <Card
        withBorder
        shadow="md"
        style={{ borderRadius: "12px", overflow: "hidden" }}
      >
        <Table
          highlightOnHover
          verticalSpacing="md"
          horizontalSpacing="lg"
          striped
          style={{
            borderCollapse: "separate",
            borderSpacing: "0 10px",
            fontSize: "16px",
          }}
        >
          <thead
            style={{
              backgroundColor: "#7b2cbf",
              color: "white",
              textAlign: "left",
              fontSize: "18px",
              height: "50px",
            }}
          >
            <tr>
              <th style={{ padding: "12px", borderRadius: "12px 0 0 12px" }}>
                #
              </th>
              <th>Tên</th>
              <th>Giá</th>
              <th>Số lượng</th>
              <th>Đơn vị tính</th>
              <th>Mô tả</th>
              <th
                style={{ textAlign: "center", borderRadius: "0 12px 12px 0" }}
              >
                Hành động
              </th>
            </tr>
          </thead>
          <tbody
            style={{
              backgroundColor: "white",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              borderRadius: "12px",
            }}
          >
            {rows}
          </tbody>
        </Table>
        <Group
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Pagination page={activePage} onChange={setPage} total={10} />
        </Group>
      </Card>

      {/* Dialog thêm hạng mục */}
      <AddItemDialog
        opened={dialogOpened}
        onClose={() => setDialogOpened(false)}
      />

      {selectedItem && (
        <EditItemDialog
          opened={editDialogOpened}
          onClose={() => setEditDialogOpened(false)}
          item={selectedItem}
        />
      )}
    </Box>
  );
}
