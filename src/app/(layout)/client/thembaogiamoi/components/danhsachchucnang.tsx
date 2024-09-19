import { Checkbox, Table } from "@mantine/core";
import { useState } from "react";

// Dữ liệu mẫu của các chức năng và nhóm chức năng
const elements = [
  {
    phanMemId: 1,
    phanMemName: "Văn phòng điện tử",
    hangMucs: [
      {
        hangMucId: 1,
        hangMucName: "Hệ thống văn phòng điện tử",
        nhomChucNangs: [
          {
            nhomChucNangId: 1,
            nhomChucNangName: "Mặc định",
            chucNangs: [
              {
                chucNangId: 1,
                chucNangName: "Tiếp nhận văn bản",
                useCases: [
                  {
                    useCaseId: 1,
                    useCaseName: "Tiếp nhận văn bản đến trực tiếp",
                  },
                ],
              },
              {
                chucNangId: 2,
                chucNangName: "Danh sách văn bản",
                useCases: [
                  {
                    useCaseId: 2,
                    useCaseName:
                      "Đánh dấu trạng thái xử lý văn bản cá nhân bằng màu sắc(Chưa xử lý trể hạn, chưa xử lý còn hạn, chưa xử lý không thời hạn, đã xử lý)",
                  },
                  {
                    useCaseId: 3,
                    useCaseName: "Tìm kiếm văn bản đến(Theo quy định nghị định 30)",
                  },
                  {
                    useCaseId: 4,
                    useCaseName: "Đánh dấu văn bản quan trọng",
                  },
                  {
                    useCaseId: 5,
                    useCaseName: "Đánh dấu văn bản chưa xem",
                  },
                  {
                    useCaseId: 6,
                    useCaseName:
                      "Lọc trạng thái văn bản(Tất cả, chưa xử lý, đã chuyển, Hoàn thành) của đơn vị",
                  },
                ],
              },
              {
                chucNangId: 3,
                chucNangName: "Bút phê văn bản",
                useCases: [
                  {
                    useCaseId: 7,
                    useCaseName: "Bút phê văn bản đến",
                  },
                  {
                    useCaseId: 8,
                    useCaseName: "Vừa xem file đính kèm vừa bút phê văn bản",
                  },
                ],
              },
              {
                chucNangId: 4,
                chucNangName: "Chi tiết văn bản",
                useCases: [
                  {
                    useCaseId: 9,
                    useCaseName: "Xem chi tiết thông tin văn bản",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

function DanhSachChucNang() {
  const [selectedItems, setSelectedItems] = useState<any[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleUseCaseSelect = (useCase: any, checked: boolean) => {
    setSelectedItems((prevSelectedItems) => {
      if (checked) {
        return [...prevSelectedItems, useCase];
      } else {
        return prevSelectedItems.filter(
          (item) => item.useCaseId !== useCase.useCaseId
        );
      }
    });
  };

  const handleNhomChucNangSelect = (
    nhomChucNangId: number,
    useCases: any[],
    checked: boolean
  ) => {
    setSelectedItems((prevSelectedItems) => {
      if (checked) {
        // Thêm tất cả useCases của nhóm vào selectedItems
        const newSelectedItems = [...prevSelectedItems, ...useCases];
        // Loại bỏ các useCase trùng lặp (dựa trên useCaseId)
        const uniqueSelectedItems = Array.from(
          new Map(newSelectedItems.map((item) => [item.useCaseId, item])).values()
        );
        return uniqueSelectedItems;
      } else {
        // Loại bỏ tất cả useCases của nhóm khỏi selectedItems
        return prevSelectedItems.filter(
          (item) => !useCases.some((uc) => uc.useCaseId === item.useCaseId)
        );
      }
    });
  };

  const handleSelectAll = (checked: boolean) => {
    setSelectAll(checked);
    if (checked) {
      const allUseCases = elements.flatMap((phanMem) =>
        phanMem.hangMucs.flatMap((hangMuc) =>
          hangMuc.nhomChucNangs.flatMap((nhomChucNang) =>
            nhomChucNang.chucNangs.flatMap((chucNang) =>
              chucNang.useCases.map((useCase) => ({
                ...useCase,
                chucNangName: chucNang.chucNangName,
                nhomChucNangName: nhomChucNang.nhomChucNangName,
              }))
            )
          )
        )
      );
      setSelectedItems(allUseCases);
    } else {
      setSelectedItems([]);
    }
  };

  const rows = elements.flatMap((phanMem) =>
    phanMem.hangMucs.flatMap((hangMuc) =>
      hangMuc.nhomChucNangs.flatMap((nhomChucNang) => {
        const allUseCases = nhomChucNang.chucNangs.flatMap((chucNang) =>
          chucNang.useCases.map((useCase) => ({
            ...useCase,
            chucNangName: chucNang.chucNangName,
            nhomChucNangName: nhomChucNang.nhomChucNangName,
          }))
        );

        return (
          <>
            {/* Render nhóm chức năng với checkbox */}
            <Table.Tr key={nhomChucNang.nhomChucNangId}>
              <Table.Td colSpan={2} style={{ fontWeight: "bold" }}>
                <Checkbox
                  checked={allUseCases.every((uc) =>
                    selectedItems.some(
                      (item) => item.useCaseId === uc.useCaseId
                    )
                  )}
                  onChange={(event) =>
                    handleNhomChucNangSelect(
                      nhomChucNang.nhomChucNangId,
                      allUseCases,
                      event.currentTarget.checked
                    )
                  }
                />
                {nhomChucNang.nhomChucNangName}
              </Table.Td>
            </Table.Tr>

            {/* Render các chức năng của nhóm */}
            {nhomChucNang.chucNangs.flatMap((chucNang) =>
              chucNang.useCases.map((useCase) => (
                <Table.Tr key={useCase.useCaseId}>
                  <Table.Td style={{ paddingLeft: "20px" }}>
                    <Checkbox
                      checked={selectedItems.some(
                        (item) => item.useCaseId === useCase.useCaseId
                      )}
                      onChange={(event) =>
                        handleUseCaseSelect(
                          {
                            ...useCase,
                            chucNangName: chucNang.chucNangName,
                            nhomChucNangName: nhomChucNang.nhomChucNangName,
                          },
                          event.currentTarget.checked
                        )
                      }
                    />
                  </Table.Td>
                  <Table.Td>{useCase.useCaseName}</Table.Td>
                </Table.Tr>
              ))
            )}
          </>
        );
      })
    )
  );

  return (
    <>
      <Table striped highlightOnHover withTableBorder withColumnBorders>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>
              <Checkbox
                checked={selectAll}
                onChange={(event) => handleSelectAll(event.currentTarget.checked)}
                label="Chọn tất cả"
              />
            </Table.Th>
            <Table.Th>Use Case</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>

      <h3>Selected Items:</h3>
      <pre>{JSON.stringify(selectedItems, null, 2)}</pre>
    </>
  );
}

export default DanhSachChucNang;
