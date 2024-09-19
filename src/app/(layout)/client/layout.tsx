import { Container } from "@mantine/core";
import dynamic from "next/dynamic";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

const FooterLinks = dynamic(() => import("@/component/footer/footer"), {
  ssr: false,
});
const HeaderTabs = dynamic(() => import("@/component/header/header"), {
  ssr: false,
});

function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MantineProvider>
        <HeaderTabs />
        <Container px={0} size="60rem">
          {children}
        </Container>
        <FooterLinks />
      </MantineProvider>
    </>
  );
}

export default ClientLayout;
