import { Checkbox, Input, Table } from "@mantine/core";
import { useState } from "react";
const elements = [
    { position: 6, name: "Carbon" },
    { position: 7, name: "Nitrogen" },
    { position: 39, name: "Yttrium" },
    { position: 56, name: "Barium" },
    { position: 58, name: "Cerium" },
];
function DanhSachChucNang() {
    const [selectedRows, setSelectedRows] = useState<number[]>([]);

    const handleSelectAll = (event: any) => {
        if (event.currentTarget.checked) {
            const allPositions = elements.map((element) => element.position);
            setSelectedRows(allPositions);
        } else {
            setSelectedRows([]);
        }
    };
    const rows = elements.map((element) => (
        <Table.Tr
            key={element.name}
            bg={
                selectedRows.includes(element.position)
                    ? "var(--mantine-color-blue-light)"
                    : undefined
            }
        >
            <Table.Td>
                <Checkbox
                    aria-label="Select row"
                    checked={selectedRows.includes(element.position)}
                    onChange={(event) =>
                        setSelectedRows(
                            event.currentTarget.checked
                                ? [...selectedRows, element.position]
                                : selectedRows.filter(
                                      (position) =>
                                          position !== element.position
                                  )
                        )
                    }
                />
            </Table.Td>
            <Table.Td className="text-center" width={"10%"}>
                {element.position}
            </Table.Td>
            <Table.Td width={"90%"}>{element.name}</Table.Td>
        </Table.Tr>
    ));
    return (
        <>
            <div className=" bg-[#eceef0] p-4 rounded">
                <Input.Label required>Danh sách chức năng</Input.Label>
                <Table
                    striped
                    highlightOnHover
                    withTableBorder
                    withColumnBorders
                >
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>
                                <Checkbox
                                    aria-label="Select row"
                                    checked={
                                        selectedRows.length === elements.length
                                    }
                                    onChange={handleSelectAll}
                                />
                            </Table.Th>
                            <Table.Th className="text-center">STT</Table.Th>
                            <Table.Th className="text-center">
                                Chức năng
                            </Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>{rows}</Table.Tbody>
                </Table>
            </div>
        </>
    );
}

export default DanhSachChucNang;
