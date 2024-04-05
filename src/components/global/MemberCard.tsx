import { BoxProps, FlexProps, Text } from "@chakra-ui/layout";
import {
  Box,
  Flex,
  Image,
  Link,
  Icon,
  useBreakpointValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
const MotionFlex = motion<FlexProps>(Flex);
const MotionBox = motion<BoxProps>(Box);

interface Props {
  member: {
    id: string;
    image: string;
    name: string;
    redirect: string;
  };
}

const MemberCard = ({ member }: Props) => {
  const variant = useBreakpointValue({
    base: "mobile",
    md: "desktop",
  });
  return (
    <MotionBox
      w="full"
      h="md"
      pos="relative"
      cursor="pointer"
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.8 } },
      }}
    >
      <Image
        h="full"
        w="full"
        src={member.image}
        objectFit="cover"
        opacity={0.9}
      />
      <Link as={NextLink} href={member.redirect}>
        <MotionFlex
          w="full"
          h="full"
          align="center"
          justify="center"
          py="6"
          bg="brand.overlay"
          opacity="0"
          pos="absolute"
          top="0"
          left="0"
          whileHover={{ opacity: 1 }}
        >
          <Flex justify="center" align="center" direction="column">
            <Text
              fontFamily="body"
              fontWeight="bold"
              fontSize="4xl"
              align="center"
              color="brand.lightest"
              textTransform="uppercase"
              letterSpacing="widest"
            >
              {member.name}
            </Text>
            <Icon boxSize="8" as={FaLinkedin} />
          </Flex>
        </MotionFlex>
      </Link>
    </MotionBox>
  );
};

export default MemberCard;
