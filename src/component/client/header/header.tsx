"use client";
import cx from "clsx";
import { useState } from "react";
import {
    Container,
    Avatar,
    UnstyledButton,
    Group,
    Text,
    Menu,
    Tabs,
    Burger,
    rem,
    useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
    IconLogout,
    IconHeart,
    IconStar,
    IconMessage,
    IconSettings,
    IconPlayerPause,
    IconTrash,
    IconSwitchHorizontal,
    IconChevronDown,
} from "@tabler/icons-react";
import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "./Header.module.css";
import Image from "next/image";
import LogoCusc from "../../../../public/CUSCLogoSeries.png";
import Link from "next/link";
const user = {
    name: "Jane Spoonfighter",
    email: "janspoon@fighter.dev",
    image: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png",
};

// const tabs = [
//     "Home",
//     "Danh sách báo giá",
//     "Education",
//     "Community",
//     "Forums",
//     "Support",
//     "Account",
//     "Helpdesk",
// ];
const tabs = [ 
  {key:"trang chủ", path: '/client'},
  {key:"Danh sách báo giá" , path: '/client/danhsachbaogia'},
  {key:"Thêm báo giá", path: '/client/thembaogiamoi'},
]
export default function Header() {
    const theme = useMantineTheme();
    const [opened, { toggle }] = useDisclosure(false);
    const [userMenuOpened, setUserMenuOpened] = useState(false);

    const items = tabs.map((tab ,index) => (
      <Link href={tab.path}>
        <Tabs.Tab value={tab.key} key={index}>
            {tab.key}
        </Tabs.Tab>
      </Link>
    ));

    return (
        <div className={classes.header}>
            <Container className={classes.mainSection} size="md">
                <Group justify="space-between">
                    {/* <MantineLogo size={28} /> */}
                    <Image
                        src={LogoCusc}
                        width={80}
                        height={100}
                        alt={"CUSC"}
                    />
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        hiddenFrom="xs"
                        size="sm"
                    />

                    <Menu
                        width={260}
                        position="bottom-end"
                        transitionProps={{ transition: "pop-top-right" }}
                        onClose={() => setUserMenuOpened(false)}
                        onOpen={() => setUserMenuOpened(true)}
                        withinPortal
                    >
                        <Menu.Target>
                            <UnstyledButton
                                className={cx(classes.user, {
                                    [classes.userActive]: userMenuOpened,
                                })}
                            >
                                <Group gap={7}>
                                    <Avatar
                                        src={user.image}
                                        alt={user.name}
                                        radius="xl"
                                        size={20}
                                    />
                                    <Text fw={500} size="sm" lh={1} mr={3}>
                                        {user.name}
                                    </Text>
                                    <IconChevronDown
                                        style={{
                                            width: rem(12),
                                            height: rem(12),
                                        }}
                                        stroke={1.5}
                                    />
                                </Group>
                            </UnstyledButton>
                        </Menu.Target>
                        <Menu.Dropdown>
                            <Menu.Item
                                leftSection={
                                    <IconHeart
                                        style={{
                                            width: rem(16),
                                            height: rem(16),
                                        }}
                                        color={theme.colors.red[6]}
                                        stroke={1.5}
                                    />
                                }
                            >
                                Liked posts
                            </Menu.Item>
                            <Menu.Item
                                leftSection={
                                    <IconStar
                                        style={{
                                            width: rem(16),
                                            height: rem(16),
                                        }}
                                        color={theme.colors.yellow[6]}
                                        stroke={1.5}
                                    />
                                }
                            >
                                Saved posts
                            </Menu.Item>
                            <Menu.Item
                                leftSection={
                                    <IconMessage
                                        style={{
                                            width: rem(16),
                                            height: rem(16),
                                        }}
                                        color={theme.colors.blue[6]}
                                        stroke={1.5}
                                    />
                                }
                            >
                                Your comments
                            </Menu.Item>

                            <Menu.Label>Settings</Menu.Label>
                            <Menu.Item
                                leftSection={
                                    <IconSettings
                                        style={{
                                            width: rem(16),
                                            height: rem(16),
                                        }}
                                        stroke={1.5}
                                    />
                                }
                            >
                                Cài đặt tài khoản
                            </Menu.Item>
                            <Menu.Item
                                leftSection={
                                    <IconSwitchHorizontal
                                        style={{
                                            width: rem(16),
                                            height: rem(16),
                                        }}
                                        stroke={1.5}
                                    />
                                }
                            >
                                Change account
                            </Menu.Item>
                            <Menu.Item
                                leftSection={
                                    <IconLogout
                                        style={{
                                            width: rem(16),
                                            height: rem(16),
                                        }}
                                        stroke={1.5}
                                    />
                                }
                            >
                                Đăng xuất
                            </Menu.Item>

                            <Menu.Divider />

                            <Menu.Label>Danger zone</Menu.Label>
                            <Menu.Item
                                leftSection={
                                    <IconPlayerPause
                                        style={{
                                            width: rem(16),
                                            height: rem(16),
                                        }}
                                        stroke={1.5}
                                    />
                                }
                            >
                                Pause subscription
                            </Menu.Item>
                            <Menu.Item
                                color="red"
                                leftSection={
                                    <IconTrash
                                        style={{
                                            width: rem(16),
                                            height: rem(16),
                                        }}
                                        stroke={1.5}
                                    />
                                }
                            >
                                Delete account
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </Group>
            </Container>
            <Container size="md">
                <Tabs
                    defaultValue="Home"
                    variant="outline"
                    visibleFrom="sm"
                    classNames={{
                        root: classes.tabs,
                        list: classes.tabsList,
                        tab: classes.tab,
                    }}
                >
                    <Tabs.List>{items}</Tabs.List>
                </Tabs>
            </Container>
        </div>
    );
}
