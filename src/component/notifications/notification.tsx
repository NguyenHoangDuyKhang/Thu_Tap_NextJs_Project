"use client";
import { Notifications } from "@mantine/notifications";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const NotificationsWrapper = ({ children }: Props) => {
  return <Notifications>{children}</Notifications>;
};

export default NotificationsWrapper;