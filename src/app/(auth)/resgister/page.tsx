'use client'
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from '@mantine/core';
import classes from './resgister.module.css';

export default function AuthenticationTitle() {
  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Đăng kí!
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Bạn đã có tài khoản?{' '}
        <Anchor size="sm" component="button">
         Đăng nhập
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Họ và Tên" placeholder="you@mantine.dev" required />
        <TextInput label="Số điện thoại" placeholder="you@mantine.dev" required />
        <TextInput label="Email" placeholder="you@mantine.dev" required />
        <PasswordInput label="Mật khẩu" placeholder="Your password" required mt="md" />
        <Group justify="space-between" mt="lg">
          <Checkbox label="Remember me" />
          <Anchor component="button" size="sm">
            Forgot password?
          </Anchor>
        </Group>
        <Button fullWidth mt="xl">
          Đăng kí
        </Button>
      </Paper>
    </Container>
  );
}