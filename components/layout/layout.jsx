import React from "react";
import { Box, Slide, useDisclosure } from "@chakra-ui/react";
import { Header } from "../";
import MobileDrawer from "./mobile-drawer";

function Layout({ children }) {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box minH={"100vh"}>
      <Header variant={"light"} onToggleDrawer={onToggle} />
      {children}
      <Slide direction="left" in={isOpen}>
        <MobileDrawer onClose={onToggle} />
      </Slide>
    </Box>
  );
}

export default Layout;
