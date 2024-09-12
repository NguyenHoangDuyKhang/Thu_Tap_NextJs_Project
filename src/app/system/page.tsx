"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { AppShell, Text, Box, Grid, Card, Table, Flex } from "@mantine/core";
import Charts from "./chartDas";
import Tables from "./table";
import DateNow from "./date";
export default function SystemPage() {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/client"); // Nếu chưa đăng nhập, chuyển hướng về auth
    }
  }, [router]);

  return (
    <>
      <AppShell>
        <Box p="md">
          <Grid>
            <Grid.Col span={4}>
              <Card
                shadow="sm"
                padding="lg"
                style={{ backgroundColor: "#49d3f2", borderRadius: 5 }}
              >
                <Text>Summary 1</Text>
                <Text>Details about summary 1</Text>
              </Card>
            </Grid.Col>
            <Grid.Col span={4}>
              <Card
                shadow="sm"
                padding="lg"
                style={{ backgroundColor: "#d4ff52", borderRadius: 5 }}
              >
                <Text>Summary 2</Text>
                <Text>Details about summary 2</Text>
              </Card>
            </Grid.Col>
            <Grid.Col span={4}>
              <Card
                shadow="sm"
                padding="lg"
                style={{ backgroundColor: "#ff7d52", borderRadius: 5 }}
              >
                <Text>Summary 3</Text>
                <Text>Details about summary 3</Text>
              </Card>
            </Grid.Col>
          </Grid>

          <Box mt="lg">
            <Card shadow="sm" padding="lg">
              <Charts />
            </Card>
          </Box>
       <Box>

       <Grid p='md'>
            <Grid.Col span={6} style={{backgroundColor: '#81ccc7'}}>
             <Tables/>
            </Grid.Col>
            <Grid.Col span={6}>
              <DateNow/>
            </Grid.Col>
          
          </Grid>
       </Box>
        </Box>
      </AppShell>
    </>
  );
}
