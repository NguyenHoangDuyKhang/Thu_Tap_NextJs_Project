"use client";

import React, { useState } from "react";
import { Text, Button, Flex, Stack, Popover, NavLink } from "@mantine/core";
import { IconHome, IconSettings, IconUser } from "@tabler/icons-react";

export function AsideSystem() {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [openedPopover, setOpenedPopover] = useState<number | null>(null);

  // Danh sách các item trong aside
  const asideItems = [
    {
      id: 1,
      label: "Home",
      icon: IconHome,
      subMenu: [
        { id: "home-1", label: "Dashboard" },
        { id: "home-2", label: "Activity" },
      ],
    },
    {
      id: 2,
      label: "Settings",
      icon: IconSettings,
      subMenu: [
        { id: "settings-1", label: "Account" },
        { id: "settings-2", label: "Preferences" },
      ],
    },
    {
      id: 3,
      label: "Profile",
      icon: IconUser,
      subMenu: [
        { id: "profile-1", label: "View Profile" },
        { id: "profile-2", label: "Edit Profile" },
      ],
    },
  ];

  const handleClick = (id: number) => {
    setActiveItem(id);
    setOpenedPopover(id);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // Căn giữa theo chiều dọc
        height: "100vh",
        backgroundColor: "#f8f9fa",
        position: "absolute",
        right: 0,
        top: 0, // Đặt lại top về 0 để căn chỉnh
        width: "50px", // Đặt chiều rộng cho aside
      }}
    >
      <Stack spacing="xs">
        {asideItems.map((item) => (
          <Popover
            key={item.id}
            width="200px"
            position="left"
            withArrow
            shadow="md"
            opened={openedPopover === item.id}
            onChange={(opened) => setOpenedPopover(opened ? item.id : null)}
          >
            <Popover.Target>
              <NavLink
                leftSection={<item.icon size="1rem" stroke={1.5} />}
                active={activeItem === item.id}
                variant={activeItem === item.id ? "filled" : "light"}
                onClick={() => handleClick(item.id)}
                style={{ cursor: "pointer" }}
              />
            </Popover.Target>
            <Popover.Dropdown style={{ height: "100%" }}>
              <Stack spacing="xs" mt="sm" __size="lg">
                {item.subMenu.map((sub) => (
                  <Button
                    key={sub.id}
                    variant="light"
                    fullWidth
                    size="xs"
                    style={{ justifyContent: "start" }}
                  >
                    {sub.label}
                  </Button>
                ))}
              </Stack>
            </Popover.Dropdown>
          </Popover>
        ))}
      </Stack>
    </div>
  );
}