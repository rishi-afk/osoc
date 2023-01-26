import {
  Box,
  Container,
  HStack,
  Select,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

interface Props {
  heading: string;
  batches?: { batch: string; id: string }[];
  children?: React.ReactNode;
}

const Section = ({ heading, children, batches }: Props) => {
  return (
    <Box w="full" py="16" as="section">
      <Container maxW="container.xl" color="brand.lightest" px="4">
        <VStack
          divider={
            <StackDivider borderColor="brand.grayer" borderWidth="thin" />
          }
          align="flex-start"
        >
          <HStack w="full" justify="space-between" align="center">
            <Text
              as="h3"
              fontFamily="body"
              fontWeight="bold"
              fontSize="2xl"
              textTransform="uppercase"
              letterSpacing="widest"
            >
              {heading}
            </Text>
            {batches && (
              <Select defaultValue="2025" w="40">
                {batches.map((batch) => (
                  <option value={batch.id}>Batch {batch.batch}</option>
                ))}
              </Select>
            )}
          </HStack>
          <>{children}</>
        </VStack>
      </Container>
    </Box>
  );
};

export default Section;
