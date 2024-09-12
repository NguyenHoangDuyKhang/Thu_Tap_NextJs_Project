import { MantineProvider } from "@mantine/core";
function categoryLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MantineProvider>
        <main>{children}</main>
      </MantineProvider>
    </>
  );
}

export default categoryLayout;