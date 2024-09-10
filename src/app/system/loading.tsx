import { useEffect } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { LoadingOverlay, Button, Group, Box } from '@mantine/core';

function Loading({ start }) {
  const [visible, { toggle }] = useDisclosure(false);

  useEffect(() => {
    if (start === true) {
      toggle(); // Bật loading
      const timeoutId = setTimeout(() => {
        toggle(); // Tắt loading sau 2 giây
      }, 2000);
      return () => clearTimeout(timeoutId);
    }
  }, [start, toggle]);

  return (
    <>
      <Box pos="relative">
        <LoadingOverlay visible={visible} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
      </Box>
    </>
  );
}

export default Loading;