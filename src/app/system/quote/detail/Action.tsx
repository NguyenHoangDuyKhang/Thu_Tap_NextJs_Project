import { Group, Button } from "@mantine/core";
import {
  IconFileExport,
  IconDownload,
  IconArrowRight,
} from "@tabler/icons-react";

function Action() {
  return (
    <Group justify="right">
      <Button
        leftSection={<IconFileExport size={14} />}
        variant="gradient"
        gradient={{ from: "blue", to: "green", deg: 120 }}
      >
        Xuất file
      </Button>

      <Button
        rightSection={<IconDownload size={14} />}
        variant="gradient"
        gradient={{ from: "blue", to: "green", deg: 120 }}
      >
        Download
      </Button>
    </Group>
  );
}

export default Action;
