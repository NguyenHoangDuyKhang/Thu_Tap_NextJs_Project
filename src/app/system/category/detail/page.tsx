"use client";
import {
  Stack,
  Card,
  Table,
  Group,
  Text,
  ActionIcon,
  Box,
  Button,
} from "@mantine/core";
import { IconPencil } from "@tabler/icons-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

import EditDialog from "./EditDialog";
import Breadcrumbst from "@/component/Breadcrumbs/Breadcrumbst";

export default function Category_Detail() {
  const router = useRouter();
  const [opened, setOpened] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const arr = [
    { title: "Trang chủ", href: "/system" },
    { title: "Hạng mục", href: "/system/category" },
    { title: "Chi tiết", href: "/system/category/detail" },
  ];

  const data = [
    { label: "Tên phần mềm", value: "Hệ thống quản lý dự án" },
    { label: "Công nghệ và kỹ thuật sử dụng", value: "ReactJS và Node.js" },
    {
      label: "Chức năng",
      value:
        "Quản lý tiến độ dự án, Quản lý tài nguyên, Báo cáo và phân tích dữ liệu",
    },
    { label: "Nhóm chức năng", value: "Quản lý dự án, Báo cáo hiệu suất" },
    {
      label: "Mô tả",
      value:
        "Phần mềm quản lý dự án giúp doanh nghiệp dễ dàng theo dõi tiến độ, quản lý tài nguyên và phân tích dữ liệu hiệu quả.",
    },
  ];

  const handleEditClick = (item: string) => {
    const formattedData = {
      [item.label]: item.value,
    };
    setSelectedData(formattedData);
    setOpened(true);
  };

  return (
    <>
      <Box style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <Stack
          align="stretch"
          justify="center"
          gap="md"
          style={{
            zIndex: 0,
            maxWidth: "100%",
          }}
        >
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
                style={{
                  background: "linear-gradient(135deg, #7b2cbf, #ff6b6b)",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  transition: "transform 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
                onClick={() => router.push("/system/category")}
              >
                Trở lại
              </Button>
            </Box>
          </Group>

          <Card
            withBorder
            shadow="md"
            style={{ borderRadius: "12px", overflow: "hidden" }}
          >
            <Table
              withColumnBorders
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
                  <th
                    style={{ padding: "12px", borderRadius: "12px 0 0 12px" }}
                  >
                    Chi tiết
                  </th>
                </tr>
              </thead>
            </Table>
            <Box
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
              }}
            >
              {data.map((item, index) => (
                <Group
                  key={index}
                  position="apart"
                  style={{ marginBottom: 15 }}
                >
                  <Text weight={500}>
                    {item.label}: {item.value}
                  </Text>
                  <ActionIcon onClick={() => handleEditClick(item)}>
                    <IconPencil size={16} />
                  </ActionIcon>
                </Group>
              ))}
            </Box>
          </Card>
        </Stack>
      </Box>
      <EditDialog
        opened={opened}
        onClose={() => setOpened(false)}
        data={selectedData}
      />
    </>
  );
}
