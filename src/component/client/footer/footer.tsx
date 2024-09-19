'use client'
import { Text, Container, ActionIcon, Group, rem } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './Footer.module.css';
import Image from 'next/image';
import LogoCusc from '../../../../public/CUSCLogoSeries.png'

const data = [
  {
    title: 'ĐƠN VỊ VẬN HÀNH',
    links: [
      { label: 'Điện thoại: 02923 000 000', link: '#' },
      { label: 'Fax: 02923 000 000', link: '#' },
      { label: 'Email: cusu@cusu.vn', link: '#' },
      { label: '56 Lê Duận - Phường 3- Tỉnh/Thành phố', link: '#' },
    ],
  },
  {
    title: 'DỊCH VỤ',
    links: [
      { label: 'Xây dựng nội dung và quản lý chất lượng', link: '#' },
      { label: "Công bố các quyết định hệ thống quản lý chất lượng", link: '#' },
      { label: 'Tra cứu thủ tục', link: '#' },
      { label: 'Đường dây nóng hỗ trợ ISO điện tử', link: '#' },
    ],
  },
  {
    title: 'TRANG LIÊN KẾT',
    links: [
      { label: 'Một cửa điện tử', link: '#' },
      { label: 'Quản lý văn bản', link: '#' },
      { label: 'Email newsletter', link: '#' },
      { label: 'GitHub discussions', link: '#' },
    ],
  },
];

export default function FooterLinks() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Image src={LogoCusc} width={100} alt={'CUSC'} />
          <Text size="xs" c="dimmed" className={classes.description}>
          Trung tâm công nghệ phần mềm 
          đại học cần thơ 
          </Text>
        </div>
        <div className={classes.groups}>
          <div className='flex justify-center items-end'>
          {groups}
          </div>
        </div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2024 ThuctapsinhCT.
        </Text>

        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}