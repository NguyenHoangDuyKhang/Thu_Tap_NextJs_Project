import Nav from "../../component/systemComponent/header/header";
import Footer from "../../component/systemComponent/footer/footer";
import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css'; 


function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MantineProvider>
        <Nav />
        <main>{children}</main>
        <Footer />
      </MantineProvider>
    </>
  );
}

export default ClientLayout;