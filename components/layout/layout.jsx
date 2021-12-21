import React from "react";
import { Box } from "@chakra-ui/react";
import { Header } from "../";

function Layout({ children }) {
  return (
    <Box minH={"100vh"}>
      <Header variant={"light"} />
      {children}
      {/* <Box>Footer</Box> */}
    </Box>
  );
}

export default Layout;
