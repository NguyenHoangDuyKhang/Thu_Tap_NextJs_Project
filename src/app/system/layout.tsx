"use client";
import { Container, Box } from "@mantine/core";
import { useEffect, useState } from "react";
import { NavbarSystem } from "@/component/system/NavSystem/NavSystem";
import { NavbarClient } from "@/component/client/NavClient/NavClient";
import { AsideSystem } from "@/component/system/AsideSystem/AsideSystem";
import Spinner from "@/component/spinner/spinner";
import { Notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";
function SystemLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState<number| null>(null);

  useEffect(() => {
    const usterRole = window.localStorage.getItem("user");
    console.log(usterRole);
    if(usterRole){
      setRole(Number(usterRole))
    }
    console.log(role);
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ display: "flex", minHeight: "100vh", position: "relative" }}>
      {/* <NavbarSystem /> */}
      {role ===1 ? <NavbarSystem/> : <NavbarClient/>}
      <Notifications />
      <Container
        size="lg"
        style={{
          flexGrow: 1,
          padding: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <AsideSystem />
        <Box
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          {loading && (
            <Box
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1000,
                height: "100vh",
              }}
            >
              <Spinner />
            </Box>
          )}
          <div
            style={{
              visibility: loading ? "hidden" : "visible",
              width: "100%",
              height: "100%",
            }}
          >
            {children}
          </div>
        </Box>
      </Container>
    </div>
  );
}

export default SystemLayout;
