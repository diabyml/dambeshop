import { Box } from "@chakra-ui/react";
import React from "react";
import styles from "../../styles/hero.module.css";
function Hero() {
  return (
    <Box minH={"calc(230px + 9vmax)"} className={styles.hero}>
      <Box></Box>
    </Box>
  );
}
export default Hero;
