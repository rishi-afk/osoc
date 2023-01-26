import { Box, Flex, Icon, Image } from "@chakra-ui/react";
import React from "react";

interface Props {}

const Logo = (props: Props) => {
  return (
    <Flex justify={"center"} align="center">
      <Image src="/osoc.png" w="12" />
    </Flex>
  );
};

export default Logo;
