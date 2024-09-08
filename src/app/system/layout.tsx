import Nav from "../component/header/header";
import Footer from "../component/footer/footer";

function SystemLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav/>
      <main>{children}</main>
     <Footer/>
    </>
  );
}

export default SystemLayout;