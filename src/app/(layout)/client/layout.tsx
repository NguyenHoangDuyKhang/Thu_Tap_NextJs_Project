import { Container } from "@mantine/core";
import dynamic from "next/dynamic";
import Nav from "@/component/client/header/header";
import Footer from "@/component/client/footer/footer";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { Notifications } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";

const FooterLinks = dynamic(() => import("@/component/client/footer/footer"), {
    ssr: false,
});
const HeaderTabs = dynamic(() => import("@/component/client/header/header"), {
    ssr: false,
});

function ClientLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <ModalsProvider>
                <HeaderTabs />
                <Container px={0} size="60rem">
                    <Notifications />
                    {children}
                </Container>
                <FooterLinks />
            </ModalsProvider>
        </>
    );
}

export default ClientLayout;
