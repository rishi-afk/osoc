import { Box, Container, Flex, Link } from "@chakra-ui/react";
import React from "react";
import Logo from "./Logo";
import Navlinks from "./Navlinks";
import Socials from "./Socials";
import NextLink from "next/link";

interface Props {}

const Navbar = (props: Props) => {
  return (
    <Box as="header" w="100%" color="brand.lightest" zIndex={2}>
      <Container maxW="container.xl">
        <Flex
          h={{ base: "40", md: "20" }}
          align="center"
          justify={{ base: "space-evenly", md: "space-between" }}
          direction={{ base: "column", md: "row" }}
        >
          <Link as={NextLink} href="/" aria-label="OSOC Homepage">
            <Logo />
          </Link>
          <Navlinks />
          <Socials />
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
