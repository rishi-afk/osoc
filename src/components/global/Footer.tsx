import { Box, Container, VStack, Text, Image, Flex } from "@chakra-ui/react";
import React from "react";
import Socials from "./Socials";

interface Props {}

const Footer = (props: Props) => {
  const date = new Date();
  return (
    <Box as="footer" w="100%" py="12">
      <Container
        maxW="container.xl"
        color="brand.grayer"
        px={{ base: "6", xl: "0" }}
      >
        <VStack spacing="6">
          <Socials variant="FOOTER" />
          <Text
            fontSize={{ base: "sm", md: "md" }}
            fontFamily="body"
            fontWeight="normal"
          >
            Copyright © {date.getFullYear()} OSOC - All Rights Reserved
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default Footer;
