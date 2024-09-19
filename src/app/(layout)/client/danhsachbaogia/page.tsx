"use client";

import Breadcrumbst from "@/component/Breadcrumbs/Breadcrumbst";
import { rem, Text, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { TextInput, Button, Group, Modal } from "@mantine/core";
import { Select } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useState } from "react";
import { Table } from "@mantine/core";
import { IconAlignBoxLeftMiddle } from "@tabler/icons-react";
import { IconFileTypeDoc } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { Badge } from "@mantine/core";

const arr = [
  { title: "Trang chủ", href: "#" },
  { title: "Danh Sách báo giá", href: "#" },
];
const elements = [
  {
    position: 6,
    mass: 14.007,
    symbol: (
      <div>
        <div className="flex items-center">
          <Badge color="blue">cơ bản</Badge>
          <Text fw={500}> Hệ thống văn phòng điện tử</Text>
        </div>
        <div>Đơn vị: Trường đại học nha trang</div>
      </div>
    ),
    name: "24/12/2005",
  },
  {
    position: 7,
    mass: 14.007,
    symbol: (
      <div>
        <div className="flex items-center">
          <Badge color="yellow"> Tùy Chọn</Badge>
          <Text fw={500}>Hệ thống văn phòng điện tử</Text>
        </div>

        <div>Đơn vị: trường đại học cần thơ</div>
      </div>
    ),
    name: "9//24/2000",
  },
  {
    position: 39,
    mass: 88.906,
    symbol: (
      <div>
        <div className="flex items-center">
          <Badge color="green"> Tiêu chuẩn</Badge>
          <Text fw={500}>Một cửa điện tử</Text>
        </div>
        <div>Đơn vị: tỉnh quản ninh</div>
      </div>
    ),
    name: "9/12/2024",
  },
  {
    position: 56,
    mass: 137.33,
    symbol: (
      <div>
        <Badge color="blue">Badge</Badge>
      </div>
    ),
    name: "9/12/2023",
  },
  {
    position: 58,
    mass: 140.12,
    symbol: (
      <div>
        <Badge color="blue">Badge</Badge>
      </div>
    ),
    name: "9/12/2026",
  },
];

export default function DanhSachBaoGia() {
  const [valueDate, setValueDate] = useState<Date | null>(null);
  const [opened, { open, close }] = useDisclosure(false);

  const form = useForm({
    mode: "uncontrolled",
    // initialValues: {
    //   name: "",
    // },
  });
  const handleSubmit = (values: typeof form.values) => {
    console.log(values);
    form.reset();
};
  const rows = elements.map((element, index) => (
    <Table.Tr key={element.name}>
      <Table.Td className="text-center">{index + 1}</Table.Td>
      <Table.Td className="text-center">{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>
        <div className="flex justify-center items-center" onClick={open}>
          <IconAlignBoxLeftMiddle stroke={2} />
        </div>
      </Table.Td>
      <Table.Td className="text-center">
        <div className="flex justify-center items-center cursor-pointer">
          <IconFileTypeDoc stroke={2} />
        </div>
      </Table.Td>
    </Table.Tr>
  ));
  return (
    <>
      <Modal opened={opened} onClose={close} withCloseButton={false}>
        Lịch sử báo giá
      </Modal>
      <div className="my-3">
        <Breadcrumbst ArrBreadcrumb={arr} />
      </div>
      <div className="py-2 px-2 bg-[#339af0] text-white rounded-md my-3 ">
        <Title order={3}>Danh sách báo giá</Title>
      </div>
      {/* form */}
      <form onSubmit={form.onSubmit(handleSubmit)}>
      <div className="flex bg-[#eceef0] p-4 rounded mb-3 md:flex-nowrap flex-wrap">
        <TextInput
          label="Nội dung báo giá hoặc khách hàng"
          placeholder="Nhập nội dung báo giá hoặc khách hàng"
          key={form.key("noidungbaogia")}
          {...form.getInputProps("noidungbaogia")}
          style={{ width: rem(400) }}
          className="mr-4"
        />
        <Select
          label="Gói sản phẩm"
          placeholder="Pick value"
          data={["React", "Angular", "Vue", "Svelte"]}
          key={form.key("goisanpham")}
          {...form.getInputProps("goisanpham")}
          style={{ width: rem(200) }}
          className="mr-4"
        />
        <DatePickerInput
          label="Ngày báo giá"
          placeholder="Pick date"
          key={form.key("ngaybaogia")}
          {...form.getInputProps("ngaybaogia")}
          style={{ width: rem(200) }}
          className="mr-4"
        />
        <Group justify="center" className="mt-6">
          <Button
            type="submit"
          >
            Tìm Kiếm
          </Button>
        </Group>
      </div>
        </form>
      {/* list */}
      <div className="mb-5">
        <Table striped highlightOnHover withTableBorder withColumnBorders>
          <Table.Thead className="bg-[#339af0] text-white ">
            <Table.Tr>
              <Table.Th  style={{textAlign: 'center'}}>STT</Table.Th>
              <Table.Th  style={{textAlign: 'center'}}>Ngày báo giá</Table.Th>
              <Table.Th  style={{textAlign: 'center'}}>Báo giá</Table.Th>
              <Table.Th  style={{textAlign: 'center'}}>Lịch sử</Table.Th>
              <Table.Th  style={{textAlign: 'center'}}> Xuất</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </div>
    </>
  );
}
