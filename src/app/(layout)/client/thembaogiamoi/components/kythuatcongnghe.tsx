import {
    Button,
    CloseButton,
    Input,
    Table,
    Modal,
    TextInput,
    Select,
    NumberInput,
} from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { IconPlus } from "@tabler/icons-react";
const elementsKithuatcongnghe = [
    { content: "phần mềm kiểm tra CV", technology: "reactJS" },
    {
        content: "Phần mềm xây dựng và phát triển môi trường",
        technology: "angular",
    },
];
function KyThuatCongNghe() {
    const [opened, { open, close }] = useDisclosure(false);

    const form = useForm({
        validateInputOnBlur: true,
        mode: "uncontrolled",
        initialValues: {
            kythuatcongnghe: "",
            noidung: "",
        },
        validate: {
            kythuatcongnghe: isNotEmpty(
                "Kỹ thuật công nghệ không được để trống"
            ),
            noidung: isNotEmpty("Nội dung không được để trống"),
        },
    });
    const submitAddNoidung = (values: typeof form.values) => {
        console.log(values);
        form.reset();
    };
    const rows3 = elementsKithuatcongnghe.map((element, index: number) => (
        <Table.Tr key={index}>
            <Table.Td className="text-center">{index + 1}</Table.Td>
            <Table.Td width={"60%"}>{element.content}</Table.Td>
            <Table.Td className="text-center">{element.technology}</Table.Td>

            <Table.Td>
                <div className="flex items-center justify-center">
                    <CloseButton size="lg" />
                </div>
            </Table.Td>
        </Table.Tr>
    ));

    return (
        <>
            <div className=" bg-[#eceef0] p-4 rounded mt-3">
                <Input.Label required>Kỹ thuật công nghệ</Input.Label>
                <Table
                    striped
                    highlightOnHover
                    withTableBorder
                    withColumnBorders
                >
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th className="text-center">STT</Table.Th>
                            <Table.Th className="text-center">
                                Nội dung
                            </Table.Th>
                            <Table.Th className="text-center">
                                Kỹ thuật - công nghệ
                            </Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>{rows3}</Table.Tbody>
                </Table>
                <Modal
                    opened={opened}
                    onClose={close}
                    title="THÊM NỘI DUNG KỸ THUẬT CÔNG NGHỆ"
                >
                    <form onSubmit={form.onSubmit(submitAddNoidung)}>
                        <TextInput
                            withAsterisk
                            label="Nội dung"
                            placeholder="Nhập nội dung công nghệ"
                            key={form.key("noidung")}
                            {...form.getInputProps("noidung")}
                            className=" mt-2"
                        />{" "}
                        <TextInput
                            withAsterisk
                            label="Kỹ thuật công nghệ"
                            placeholder="Nhập kỹ thuật công nghệ"
                            key={form.key("kythuatcongnghe")}
                            {...form.getInputProps("kythuatcongnghe")}
                            className=" mt-2"
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
                    THÊM NỘI DUNG
                </Button>
            </div>
        </>
    );
}

export default KyThuatCongNghe;
