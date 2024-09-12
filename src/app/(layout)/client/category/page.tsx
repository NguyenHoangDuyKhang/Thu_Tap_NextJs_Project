"use client";

import React, { useState } from "react";
import { ReactSortable } from "react-sortablejs";
import { Grid, Paper, Text, Checkbox } from "@mantine/core";
import { Flex, Button } from "@mantine/core";

interface ItemType {
  id: number;
  name: string;
  selected?: boolean;
}

export default function TestPage() {
  const [stateLeft, setStateLeft] = useState<ItemType[]>([
    { id: 1, name: "Shrek" },
    { id: 2, name: "Fiona" },
  ]);
  const [stateRight, setStateRight] = useState<ItemType[]>([]);

  const [selectAllLeft, setSelectAllLeft] = useState(false);

  // Hàm chọn/bỏ chọn 1 item
  const handleSelectItem = (id: number) => {
    setStateLeft((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  // Hàm chọn tất cả các item
  const handleSelectAll = () => {
    setSelectAllLeft((prev) => !prev);
    setStateLeft((prevState) =>
      prevState.map((item) => ({ ...item, selected: !selectAllLeft }))
    );
  };

  // Hàm xử lý kéo thả item giữa các cột
  const handleSharedLists = (sourceList: ItemType[], destinationList: ItemType[], movedItemId: number, setSourceList: React.Dispatch<React.SetStateAction<ItemType[]>>, setDestinationList: React.Dispatch<React.SetStateAction<ItemType[]>>) => {
    const movedItem = sourceList.find(item => item.id === movedItemId);
    if (movedItem) {
      // Cập nhật cột đích bằng cách thêm item mới
      setDestinationList([...destinationList, movedItem]);

      // Xóa item khỏi cột nguồn
      setSourceList(sourceList.filter(item => item.id !== movedItemId));
    }
  };

  // Hàm xử lý khi di chuyển item từ trái sang phải hoặc ngược lại
  const handleAdd = (evt: any) => {
    const movedItemId = parseInt(evt.item.getAttribute('data-id'));
    handleSharedLists(stateLeft, stateRight, movedItemId, setStateLeft, setStateRight);
  };

  const handleRemove = (evt: any) => {
    const movedItemId = parseInt(evt.item.getAttribute('data-id'));
    handleSharedLists(stateRight, stateLeft, movedItemId, setStateRight, setStateLeft);
  };

  // Hàm submit để xử lý khi người dùng nhấn nút submit
  const handleSubmit = () => {
    console.log("Data in Right Column: ", stateRight);
  };

  return (
    <>
      <Grid style={{ height: "auto", margin: 0 }}>
        {/* Cột bên trái */}
        <Grid.Col span={6} style={{ display: "flex", alignItems: "center" }}>
          <Paper
            shadow="xs"
            padding="md"
            style={{
              minHeight: "100px",
              border: "1px solid black",
              borderRadius: "4px",
              overflowY: "auto",
            }}
          >
            <Flex align="center" mb="md">
              <Checkbox
                checked={selectAllLeft}
                onChange={handleSelectAll}
                label="Chọn tất cả"
              />
              <Text weight="lg" size="lg" ml="sm">
                Hạn mục (Items)
              </Text>
            </Flex>
            <ReactSortable
              list={stateLeft}
              setList={setStateLeft}
              group={{ name: "shared", pull: "clone", put: true }}
              animation={200}
              onAdd={handleRemove}
            >
              {stateLeft.map((item) => (
                <div
                  key={item.id}
                  data-id={item.id}
                  style={{
                    background: "#1c7ed6",
                    color: "white",
                    padding: "10px",
                    marginBottom: "10px",
                    borderRadius: "4px",
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Checkbox
                    checked={item.selected}
                    onChange={() => handleSelectItem(item.id)}
                  />
                  {item.name}
                </div>
              ))}
            </ReactSortable>
          </Paper>
        </Grid.Col>

        {/* Cột bên phải */}
        <Grid.Col span={6} style={{ display: "flex", alignItems: "center" }}>
          <Paper
            shadow="xs"
            padding="md"
            style={{
              minHeight: "100px",
              border: "1px solid black",
              borderRadius: "4px",
              overflowY: "auto",
            }}
          >
            <Text weight="lg" size="lg" mb="md">
              Hạn mục được chọn
            </Text>
            <ReactSortable
              list={stateRight}
              setList={setStateRight}
              group={{ name: "shared", pull: true, put: true }}
              animation={200}
              onAdd={handleAdd}
            >
              {stateRight.map((item) => (
                <div
                  key={item.id}
                  data-id={item.id}
                  style={{
                    background: "#51cf66",
                    color: "white",
                    padding: "10px",
                    marginBottom: "10px",
                    borderRadius: "4px",
                    textAlign: "center",
                  }}
                >
                  {item.name}
                </div>
              ))}
            </ReactSortable>
          </Paper>
        </Grid.Col>
      </Grid>
      <Button variant="filled" onClick={handleSubmit}>
        Submit
      </Button>
    </>
  );
}
