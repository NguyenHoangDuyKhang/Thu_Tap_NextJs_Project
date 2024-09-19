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
  Grid,
  List,
  ScrollArea,
  Divider,
} from "@mantine/core";
import { IconPencil } from "@tabler/icons-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

import EditDialog from "./EditDialog";
import Breadcrumbst from "@/component/Breadcrumbs/Breadcrumbst";
import Action from "./Action";
import Info_User from "./InfoUser";

export default function Category_Detail() {
  const router = useRouter();
  const [opened, setOpened] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const arr = [
    { title: "Trang chủ", href: "/system" },
    { title: "Báo giá", href: "/system/quote" },
    { title: "Chi tiết", href: "/system/quote/detail" },
  ];

  const data = [
    {
      Group: [
        {
          id: 1,
          name: "Nhóm chức năng 1",
          Function: [
            {
              functionId: 1,
              functionName: "Chức năng gì gì đó mà tên nó rất dài",
            },
            { functionId: 23, functionName: "Chức năng A" },
            { functionId: 25, functionName: "Chức năng A" },

            { functionId: 20, functionName: "Chức năng B" },
          ],
          describe: "describe 1",
        },
        {
          id: 2,
          name: "Nhóm chức năng 2",
          Function: [
            { functionId: 3, functionName: "Chức năng C" },
            { functionId: 4, functionName: "Chức năng D" },
          ],
        },
        {
          id: 3,
          name: "Nhóm chức năng 3",
          Function: [
            { functionId: 5, functionName: "Chức năng E" },
            { functionId: 6, functionName: "Chức năng F" },
          ],
        },
      ],
      id: "1",
    },
    {
      Group: [],
      Function: {},
      id: "2",
    },
    {
      Group: [],
      Function: {},
      id: "3",
    },
  ];

  const handleEditClick = (group: any) => {
    setSelectedData(group);
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
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  transition: "transform 0.2s ease",
                }}
                variant="gradient"
                gradient={{
                  from: "rgba(2, 204, 201, 1)",
                  to: "rgba(227, 20, 203, 1)",
                  deg: 66,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
                onClick={() => router.push("/system/warranty")}
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
                    Chi tiết bảo hành
                  </th>
                  <th>
                    <Action />
                  </th>
                </tr>
              </thead>
            </Table>

            <Box
              style={(theme) => ({
                border: `1px solid ${theme.colors.indigo[4]}`,
                padding: theme.spacing.md,
                borderRadius: theme.radius.md,
              })}
            >
              {/* Người tạo và Khách hàng */}
              <Info_User/>

              <Box mt="md" style={{ padding: 10 }}>
                <Text>Thời gian bảo hành</Text>
                <Text>Từ ngày A đến ngày B</Text>
              </Box>

              <Box style={{ padding: "20px", backgroundColor: "#f8f9fa" }}>
                <Text size="lg" mb={6}>Chức năng bảo hành</Text>

                {data.map((item, index) => (
                  <Box
                    key={index}
                    style={{
                      marginBottom: "20px",
                      backgroundColor: "white",
                      padding: "15px",
                      borderRadius: "8px",
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    {item.Group.length > 0 ? (
                      item.Group.map((group) => (
                        <Box key={group.id} mb="lg">
                          <Grid align="center" gutter="xs">
                            <Grid.Col span={3}>
                              <Text>{group.name}</Text>
                              <Divider my="sm" />
                            </Grid.Col>

                            <Grid.Col span={8}>
                              <ScrollArea style={{ height: "100px" }}>
                                <List size="sm" spacing="xs" withPadding>
                                  {group.Function.map((func) => (
                                    <List.Item key={func.functionId} mx={4}>
                                      {func.functionName}
                                      <Divider />
                                    </List.Item>
                                  ))}
                                </List>
                              </ScrollArea>
                            </Grid.Col>

                            <Grid.Col span={1}>
                              <ActionIcon
                                onClick={() => handleEditClick(group)}
                                style={{ cursor: "pointer" }}
                              >
                                <IconPencil size={16} />
                              </ActionIcon>
                            </Grid.Col>
                          </Grid>
                        </Box>
                      ))
                    ) : (
                      <Text color="gray" size="sm">
                        Không có nhóm chức năng nào.
                      </Text>
                    )}
                  </Box>
                ))}
              </Box>

              {/* Mô tả */}
              <Box mt="md" style={{ padding: 10 }}>
                <Text>Mô tả</Text>
                {data.map((item, index) => (
                  <Box key={index}>
                    {item.Group.map((data, index) => (
                      <Text key={index}>{data.describe}</Text>
                    ))}
                  </Box>
                ))}
              </Box>
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