import { HStack, Icon, Link } from "@chakra-ui/react";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
interface Props {
  variant?: "NAV" | "FOOTER";
}

const Socials = ({ variant = "NAV" }: Props) => {
  return (
    <HStack
      spacing="6"
      fontSize="xl"
      display={
        variant === "NAV"
          ? { base: "none", md: "flex" }
          : { base: "flex", md: "none" }
      }
    >
      <Link href="/" isExternal aria-label="OSOC Instagram">
        <Icon as={FaInstagram} />
      </Link>
      <Link href="/" isExternal aria-label="OSOC Facebook">
        <Icon as={FaFacebookF} />
      </Link>
      <Link href="/" isExternal aria-label="OSOC Twitter">
        <Icon as={FaTwitter} />
      </Link>
    </HStack>
  );
};

export default Socials;
