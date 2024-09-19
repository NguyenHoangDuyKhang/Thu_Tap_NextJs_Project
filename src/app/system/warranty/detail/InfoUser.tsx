import { Grid, Text } from "@mantine/core";

function Info_User() {
  return (
    <>
      <Grid>
        <Grid.Col span={3} style={{ padding: 20 }}>
          <Text>Người Bảo Hành</Text>
          <Text>(Nguyễn Văn A)</Text>
        </Grid.Col>
        <Grid.Col span={3} style={{ padding: 20 }}>
          <Text>Khách hàng</Text>
          <Text>(Công ty TNHH ABC)</Text>
        </Grid.Col>
      </Grid>
    </>
  );
}

export default Info_User;