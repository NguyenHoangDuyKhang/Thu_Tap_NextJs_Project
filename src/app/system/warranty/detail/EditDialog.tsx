"use client";
import { Modal, TextInput, Button, Stack, Text } from "@mantine/core";
import { useState, useEffect } from "react";

export default function EditDialog({ opened, onClose, data }) {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (data && data.Function) {
      const formattedData = {
        groupName: data.name,
        functions: data.Function.map((func) => ({
          id: func.functionId,
          name: func.functionName,
          value: func.functionName, // Initial value for input
        })),
      };
      setFormData(formattedData);
    }
  }, [data]);

  const handleGroupNameChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      groupName: value,
    }));
  };

  const handleFunctionChange = (e, id) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      functions: prevData.functions.map((func) =>
        func.id === id ? { ...func, value } : func
      ),
    }));
  };

  const handleSave = () => {
    console.log('Updated values:', formData);
    onClose();
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Chỉnh sửa thông tin"
      centered
    >
      <Stack>
        {/* Display Group Name */}
        <TextInput
          label="Nhóm chức năng"
          value={formData.groupName || ''}
          onChange={handleGroupNameChange}
        />

        {/* Display Functions */}
        {formData.functions &&
          formData.functions.map((func) => (
            <TextInput
              key={func.id}
              label={`Chức năng ${func.id}`}
              value={func.value}
              onChange={(e) => handleFunctionChange(e, func.id)}
            />
          ))}
          
        <Button onClick={handleSave}>Lưu</Button>
      </Stack>
    </Modal>
  );
}
