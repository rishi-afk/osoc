import { Box, Container, Heading, Text } from "@chakra-ui/layout";
import { Stack } from "@chakra-ui/react";
import React from "react";

const Main = () => {
  return (
    <Box as="main" w="full" mt={{ base: "-40", md: "-20" }}>
      <Container
        h={{ base: "4xl", md: "100vh" }}
        maxW="container.xl"
        display="flex"
        justifyContent="center"
        alignItems="center"
        color="brand.lightest"
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="center"
        >
          <Heading
            fontFamily="oswald"
            fontSize={{ md: "8xl", lg: "9xl", base: "7xl" }}
            color="brand.lightest"
            bgImage="/water-art.jpg"
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPos="left"
            bgClip="text"
            cursor="default"
            opacity={0.85}
          >
            OSOC
          </Heading>
          <Text
            fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
            fontFamily="body"
            color="brand.lightest"
            cursor="default"
          >
            Open Soure Open Community
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Main;
