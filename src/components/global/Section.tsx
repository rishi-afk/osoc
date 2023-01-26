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
  callback: any;
  heading: string;
  years?: string[];
  defaultYear?: string;
  children?: React.ReactNode;
}

const Section = ({
  heading,
  children,
  years,
  defaultYear,
  callback,
}: Props) => {
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
            <Select
              w="40"
              defaultValue={defaultYear}
              onChange={(event) => {
                const value = event.target.value;
                callback(() => value);
              }}
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  Batch {year}
                </option>
              ))}
            </Select>
          </HStack>
          <>{children}</>
        </VStack>
      </Container>
    </Box>
  );
};

export default Section;
