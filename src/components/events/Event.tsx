import { Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

type Props = {
  heading: string;
  description: string;
  variant?: "LEFT" | "RIGHT";
  disableImage?: boolean;
};

const Event = ({
  description,
  heading,
  variant = "LEFT",
  disableImage = false,
}: Props) => {
  return (
    <Stack
      w="full"
      fontFamily="display"
      fontSize={{ base: "4xl", lg: "5xl" }}
      lineHeight="none"
      py={{ base: "6", md: "none" }}
      align="center"
      justify={{
        base: "center",
        md: "flex-start",
      }}
      spacing="6"
      direction={{
        base: "column",
        md: variant === "RIGHT" ? "row-reverse" : "row",
      }}
    >
      <VStack
        justify="center"
        alignItems={{
          base: "center",
          md: "flex-start",
        }}
        spacing="6"
        textAlign={{
          base: "center",
          md: "left",
        }}
      >
        <Text as="h3" letterSpacing="wider">
          {heading}
        </Text>
        <Text
          fontWeight="medium"
          fontFamily="body"
          color="brand.lightest"
          fontSize="md"
          lineHeight="tall"
        >
          {description}
        </Text>
      </VStack>
      {!!disableImage || (
        <Box
          w={{ base: "full", md: "md" }}
          h="md"
          bgImage="https://picsum.photos/800"
          flexShrink={0}
        />
      )}
    </Stack>
  );
};

export default Event;
