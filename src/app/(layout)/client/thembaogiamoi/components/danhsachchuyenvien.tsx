import {
    Button,
    CloseButton,
    Table,
    TextInput,
    Modal,
    Select,
} from "@mantine/core";
import { isEmail, isNotEmpty, matches, useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { IconPlus } from "@tabler/icons-react";
const elementsChuyenVien = [
    {
        fullname: "Kim Thanh Loi",
        title: "MR",
        phone: "0955454544",
        email: "kimloi@gmail.com",
    },
    {
        fullname: "Nguyen Doan Van",
        title: "MS",
        phone: "0955454544",
        email: "doanquang@gmail.com",
    },
    {
        fullname: "Ngo hoang duy",
        title: "MR",
        phone: "0955454544",
        email: "ngoduy@gmail.com",
    },
];
function DanhSachChuyenVien() {
    const [opened, { open, close }] = useDisclosure(false);

    const form = useForm({
        validateInputOnBlur: true,
        mode: "uncontrolled",
        initialValues: {
            hoten: "",
            email: "",
            danhxung: "",
            sdt: "",
        },
        validate: {
            hoten: isNotEmpty("Họ và tên không được để trống"),
            danhxung: isNotEmpty("Danh xưng không được để trống"),
            sdt: (value) => {
                if (!value) {
                  return "Số điện thoại không được để trống"; 
                }
                if (!/(84|0[3|5|7|8|9])+([0-9]{8})\b/g.test(value)) {
                  return "Số điện thoại không hợp lệ"; 
                }
                return null;  
              },
            email: isEmail("Email không hợp lệ")
        },
    });
    const submitAddNoidung = (values: typeof form.values) => {
        console.log(values);
        form.reset();
    };
    const rows4 = elementsChuyenVien.map((element, index: number) => (
        <Table.Tr key={index}>
            <Table.Td className="text-center">{index + 1}</Table.Td>
            <Table.Td>{element.fullname}</Table.Td>
            <Table.Td>{element.title}</Table.Td>
            <Table.Td>{element.phone}</Table.Td>
            <Table.Td>{element.email}</Table.Td>

            <Table.Td>
                <div className="flex items-center justify-center">
                    <CloseButton size="lg" />
                </div>
            </Table.Td>
        </Table.Tr>
    ));
    return (
        <>
            <div>
                <Table
                    striped
                    highlightOnHover
                    withTableBorder
                    withColumnBorders
                    className="mt-3"
                >
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th className="text-center">STT</Table.Th>
                            <Table.Th className="text-center">
                                Họ và tên
                            </Table.Th>
                            <Table.Th className="text-center">
                                Danh xưng
                            </Table.Th>
                            <Table.Th className="text-center">
                                Số điện thoại
                            </Table.Th>
                            <Table.Th className="text-center">Email</Table.Th>
                            <Table.Th className="text-center">#</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>{rows4}</Table.Tbody>
                </Table>
                <Modal opened={opened} onClose={close} title="THÊM CHYYÊN VIÊN">
                    <form onSubmit={form.onSubmit(submitAddNoidung)}>
                        <TextInput
                            withAsterisk
                            label="Họ và tên"
                            placeholder="Nhập họ và tệ"
                            key={form.key("hoten")}
                            {...form.getInputProps("hoten")}
                            className=" mt-2"
                        />{" "}
                        <TextInput
                            withAsterisk
                            label="Số điện thoại"
                            placeholder="Nhập số điện thoại"
                            key={form.key("sdt")}
                            {...form.getInputProps("sdt")}
                            className=" mt-2"
                        />
                        <TextInput
                            withAsterisk
                            label="Email"
                            placeholder="Nhập email"
                            key={form.key("email")}
                            {...form.getInputProps("email")}
                            className=" mt-2"
                        />
                        <Select
                            label="Danh xưng"
                            placeholder="Chọn ..."
                            withAsterisk
                            data={["Cơ bản", "Tiêu chuẩn"]}
                            key={form.key("danhxung")}
                            {...form.getInputProps("danhxung")}
                            style={{ width: "100%" }}
                            className="mr-4 mt-2"
                        />
                        <Button
                            variant="filled"
                            color="cyan"
                            type="submit"
                            className="mt-3"
                        >
                            Xác nhận
                        </Button>
                    </form>
                </Modal>
                <Button
                    variant="outline"
                    color="cyan"
                    className="mt-3"
                    size="sm"
                    onClick={open}
                >
                    <IconPlus stroke={2} />
                    THÊM CHUYÊN VIÊN
                </Button>
            </div>
        </>
    );
}

export default DanhSachChuyenVien;
