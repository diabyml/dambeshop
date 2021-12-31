import { Box, Button, Flex, Stack } from "@chakra-ui/react";
import React from "react";

import { categories } from "../../seed/data";

function CategoryList() {
  const menCategory = categories[0];
  const womenCategory = categories[1];
  const childrenCategory = categories[2];
  const artCategory = categories[3];
  return (
    <Stack spacing={[4]} direction={["column", null, "row"]}>
      <Box height={"390px"} width={"100%"}>
        <CategoryBackground image={menCategory.photo}>
          {menCategory.name}
        </CategoryBackground>
      </Box>
      <Stack direction="row" spacing={4} height={"390px"} width={"100%"}>
        <Stack flex={"1"} spacing={4} direction="column">
          <Box flex={"1"}>
            <CategoryBackground image={womenCategory.photo}>
              {womenCategory.name}
            </CategoryBackground>
          </Box>
          <Box flex={"1"}>
            <CategoryBackground image={childrenCategory.photo}>
              {childrenCategory.name}
            </CategoryBackground>
          </Box>
        </Stack>
        <Box flex={"1"} bgColor="red.600">
          <CategoryBackground image={artCategory.photo}>
            {artCategory.name}
          </CategoryBackground>
        </Box>
      </Stack>
    </Stack>
  );
}

const CategoryBackground = ({ children, image }) => {
  return (
    <Box
      bgColor="gray.50"
      p={4}
      width={"100%"}
      height={"100%"}
      boxShadow={"md"}
    >
      <Box
        height={"100%"}
        bgColor="gray.50"
        bgImage={`url(${image})`}
        bgRepeat={"no-repeat"}
        bgPosition="center"
        bgSize="cover"
        overflow="hidden"
        pos={"relative"}
      >
        <Flex
          width="100%"
          position="absolute"
          bottom={5}
          align="center"
          justify="center"
        >
          <Button size="sm" bgColor="white.700" boxShadow="lg">
            {children}
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default CategoryList;
