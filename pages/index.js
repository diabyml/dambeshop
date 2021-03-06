import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import { Hero } from "../components";
import CategoryList from "../components/category-list";
import ProductCard from "../components/product-card/product-card";
import Section from "../components/section";

import { products, categories } from "../seed/data";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Container maxW={"container.lg"}>
        <Section>
          <CategoryList />
        </Section>
        <Section>
          <Flex align="center" justify="space-between" mb={4}>
            <Text
              fontSize={["21px", null, "29px"]}
              fontFamily="Poppins"
              fontWeight="light"
            >
              Selection spéciale
            </Text>
            <Button
              borderRadius="full"
              size="sm"
              fontFamily="Poppins"
              fontWeight="semibold"
              fontSize="13px"
            >
              VOIR PLUS
            </Button>
          </Flex>
          <Grid
            as="ul"
            templateColumns={["repeat(2,1fr)", null, "repeat(4,1fr)"]}
            gap={4}
            rowGap={6}
          >
            {products.map((product) => (
              <GridItem as="li" key={product.id} style={{ listStyle: "none" }}>
                <ProductCard product={product} />
              </GridItem>
            ))}
          </Grid>
        </Section>
      </Container>
    </Box>
  );
}
