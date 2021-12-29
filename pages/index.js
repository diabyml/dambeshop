import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import { Hero } from "../components";
import ProductCard from "../components/product-card/product-card";
import Section from "../components/section";

import { products } from "../seed/data";
import SimpleProductCard from "../components/product-card/simple-product-card";

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
          <Flex align="center" justify="space-between">
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
            templateColumns={[
              "repeat(1,1fr)",
              "repeat(2,1fr)",
              null,
              "repeat(4,1fr)",
            ]}
            // templateColumns={["repeat(1,1fr)",null,"repeat(4,1fr)",]}
            gap={4}
          >
            {products.map((product) => (
              <GridItem as="li" key={product.id} style={{ listStyle: "none" }}>
                <SimpleProductCard product={product} />
              </GridItem>
            ))}
          </Grid>
        </Section>
      </Container>
    </Box>
  );
}
