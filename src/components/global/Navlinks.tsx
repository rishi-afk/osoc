import { HStack, Text } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/react";
import React from "react";

import NextLink from "next/link";

interface Props {}

const Navlinks = (props: Props) => {
  return (
    <HStack
      as="nav"
      spacing={{ base: "4", sm: "8" }}
      textTransform="uppercase"
      fontFamily="body"
      fontWeight="semibold"
      fontSize={{ base: "xs", sm: "sm" }}
      letterSpacing="widest"
      align="center"
      justify="center"
    >
      <Link
        as={NextLink}
        href="/events"
        position="relative"
        _after={{
          content: "''",
          position: "absolute",
          width: "100%",
          transform: "scaleX(0)",
          height: "2px",
          bottom: 0,
          left: 0,
          backgroundColor: "#0087ca",
          transformOrigin: "bottom right",
          transition: "transform 0.25s ease-out",
        }}
        _hover={{
          textDecoration: "none",
          _after: { transform: "scaleX(1)", transformOrigin: "bottom left" },
        }}
      >
        <Text>Events</Text>
      </Link>
      <Link
        as={NextLink}
        href="/team"
        position="relative"
        _after={{
          content: "''",
          position: "absolute",
          width: "100%",
          transform: "scaleX(0)",
          height: "2px",
          bottom: 0,
          left: 0,
          backgroundColor: "#0087ca",
          transformOrigin: "bottom right",
          transition: "transform 0.25s ease-out",
        }}
        _hover={{
          textDecoration: "none",
          _after: { transform: "scaleX(1)", transformOrigin: "bottom left" },
        }}
      >
        <Text>Team</Text>
      </Link>
      <Link
        as={NextLink}
        href="/about"
        position="relative"
        _after={{
          content: "''",
          position: "absolute",
          width: "100%",
          transform: "scaleX(0)",
          height: "2px",
          bottom: 0,
          left: 0,
          backgroundColor: "#0087ca",
          transformOrigin: "bottom right",
          transition: "transform 0.25s ease-out",
        }}
        _hover={{
          textDecoration: "none",
          _after: { transform: "scaleX(1)", transformOrigin: "bottom left" },
        }}
      >
        <Text>About</Text>
      </Link>
      <Link
        as={NextLink}
        href="/contact"
        position="relative"
        _after={{
          content: "''",
          position: "absolute",
          width: "100%",
          transform: "scaleX(0)",
          height: "2px",
          bottom: 0,
          left: 0,
          backgroundColor: "#0087ca",
          transformOrigin: "bottom right",
          transition: "transform 0.25s ease-out",
        }}
        _hover={{
          textDecoration: "none",
          _after: { transform: "scaleX(1)", transformOrigin: "bottom left" },
        }}
      >
        <Text>Contact</Text>
      </Link>
    </HStack>
  );
};

export default Navlinks;
