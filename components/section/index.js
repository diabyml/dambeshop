import React from "react";
import { Box } from "@chakra-ui/react";

function Section({ children }) {
  return <Box py={10}>{children}</Box>;
}

export default Section;
