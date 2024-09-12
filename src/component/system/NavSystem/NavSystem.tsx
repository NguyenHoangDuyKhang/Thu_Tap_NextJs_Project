"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { MantineLogo } from "@mantinex/mantine-logo";
import { Popover, Button, Text, NavLink, Stack } from "@mantine/core";
import { IconHome, IconSettings, IconUser } from "@tabler/icons-react";

export function NavbarSystem() {
  const router = useRouter();
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [openedPopover, setOpenedPopover] = useState<number | null>(null);

  const navItems = [
    {
      id: 1,
      label: "Home",
      icon: IconHome,
      subMenu: [
        { id: "profile-1", label: "Home", router: "/system" },
        { id: "profile-2", label: "Edit Profile", router: "/system" },
      ],
    },
    {
      id: 2,
      label: "Settings",
      icon: IconSettings,
      router: "/system/products",
      subMenu: [
        { id: "profile-1", label: "View Profile", router: "/system/products"  },
        { id: "profile-2", label: "Edit Profile", router: "/system/products"  },
      ],
    },
    // {
    //   id: 3,
    //   label: "Profile",
    //   icon: IconUser,
    //   router: "/profile",
    //   subMenu: [
    //     { id: "profile-1", label: "View Profile" },
    //     { id: "profile-2", label: "Edit Profile" },
    //   ],
    // },
  ];

  const handleClick = (id: number) => {
    setActiveItem(id); // Cập nhật trạng thái active
    setOpenedPopover(id); // Mở popover cho item tương ứng
  };

  const handlpushrouter = (route: string) => {
    router.push(route);
  };

  return (
    <nav
      style={{ display: "flex", height: "auto", backgroundColor: "#f8f9fa" }}
    >
      <div style={{ width: "200px", padding: "20px" }}>
        <MantineLogo type="mark" size={30} style={{ marginBottom: "20px" }} />
        <Stack>
          {navItems.map((item) => (
            <Popover
              key={item.id}
              width="250px"
              position="right"
              withArrow
              shadow="md"
              opened={openedPopover === item.id}
              onChange={(opened) => setOpenedPopover(opened ? item.id : null)}
            >
              <Popover.Target>
                <NavLink
                  label={item.label}
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
                      onClick={() => handlpushrouter(sub.router)}
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
    </nav>
  );
}
