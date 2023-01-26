import { Box, Container, Text, VStack } from "@chakra-ui/layout";
import { Icon, IconButton, Image, Stack } from "@chakra-ui/react";
import React from "react";
import { scroller, animateScroll as scroll } from "react-scroll";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

const Main = () => {
  return (
    <>
      <Box id="1" as="main" w="full" mt={{ base: "-40", md: "-20" }}>
        <Container
          minH="2xl"
          h="100vh"
          maxW="container.xl"
          display="flex"
          justifyContent="center"
          alignItems="center"
          color="brand.lightest"
          pos="relative"
        >
          <Stack
            direction="column"
            w="full"
            spacing="16"
            align="center"
            justify="center"
          >
            <VStack spacing="8" align="center">
              <Box textAlign="center">
                <Text
                  as="h1"
                  fontSize={{ base: "5xl", sm: "6xl", lg: "72px" }}
                  fontFamily="display"
                  lineHeight="none"
                  letterSpacing="widest"
                >
                  OSOC
                </Text>
              </Box>

              <Text
                fontSize="md"
                w={{ base: "full", md: "72", lg: "4xl" }}
                fontFamily="body"
                fontWeight="normal"
                color="brand.lightest"
                textAlign={{ base: "center", md: "center" }}
              >
                We are an open source community initiated by MCA students of NIT
                Trichy. We learn, work and share the joys of Open source
                technologies and wish to contribute to the Open Source Society.
                We also provide an encouraging environment for development and
                research on Open source software through collaboration with the
                open source community, business establishments, and other
                organizations. The community is expected to be a portal for
                knowledge & education and to forge relationships with the open
                source world.
              </Text>
            </VStack>
          </Stack>
          <Box
            as={IconButton}
            textAlign="center"
            bg="transparent"
            color="whiteAlpha.500"
            _hover={{ color: "brand.lightest", bg: "transparent" }}
            _active={{ color: "brand.lightest", bg: "transparent" }}
            pos="absolute"
            bottom="50px"
            zIndex="5"
            onClick={() => {
              scroller.scrollTo(`2`, {
                duration: 800,
                delay: 0,
                smooth: "easeInOutQuad",
              });
            }}
          >
            <Icon boxSize="8" as={ChevronDownIcon} />
          </Box>
        </Container>
      </Box>

      <Box id="2" as="main" w="full">
        <Container
          minH="2xl"
          h="100vh"
          maxW="container.xl"
          display="flex"
          justifyContent="center"
          alignItems="center"
          color="brand.lightest"
          pos="relative"
        >
          <Stack
            direction={{ base: "column", md: "row" }}
            w="full"
            spacing="16"
            align="center"
            justify="center"
          >
            <VStack spacing="8" align={{ base: "center", md: "flex-start" }}>
              <Box textAlign={{ base: "center", md: "left" }}>
                <Text
                  as="h1"
                  fontSize={{ base: "5xl", sm: "6xl", lg: "72px" }}
                  fontFamily="display"
                  lineHeight="none"
                  letterSpacing="widest"
                >
                  Staff Advisor
                </Text>
              </Box>

              <Text
                fontSize="md"
                w={{ base: "full", md: "72", lg: "3xl" }}
                fontFamily="body"
                fontWeight="normal"
                color="brand.lightest"
                textAlign={{ base: "center", md: "left" }}
              >
                Dr. Janet serves NIT, Trichy as Assistant Professor in the
                Department of Computer Applications. She graduated B.Sc.
                (Physics) with Distinction from Holy Cross College, Trichy
                affiliated to the Bharathidasan University, Tiruchirappalli,
                obtained a Master of Computer Applications from Bishop Heber
                College, with a third rank from Bharathidasan University,
                Tiruchirappalli. She cleared the National Eligibility Test for
                Lectureship by UGC in 2001.
              </Text>
            </VStack>
            <Box>
              <Image
                src="/advisor.jpg"
                filter="grayscale(100%)"
                w="96"
                _hover={{
                  filter: "grayscale(0%)",
                  transition: "filter 0.25s ease-in-out",
                }}
                transition="filter 0.25s ease-in-out"
              />
            </Box>
          </Stack>
          <Box
            as={IconButton}
            textAlign="center"
            bg="transparent"
            color="whiteAlpha.500"
            _hover={{ color: "brand.lightest", bg: "transparent" }}
            _active={{ color: "brand.lightest", bg: "transparent" }}
            pos="absolute"
            bottom="50px"
            zIndex="5"
            onClick={() => {
              scroller.scrollTo(`3`, {
                duration: 800,
                delay: 0,
                smooth: "easeInOutQuad",
              });
            }}
          >
            <Icon boxSize="8" as={ChevronDownIcon} />
          </Box>
        </Container>
      </Box>

      <Box id="3" as="main" w="full">
        <Container
          minH="2xl"
          h="100vh"
          maxW="container.xl"
          display="flex"
          justifyContent="center"
          alignItems="center"
          color="brand.lightest"
          pos="relative"
        >
          <Stack
            direction="column"
            w="full"
            spacing="16"
            align="center"
            justify="center"
          >
            <VStack spacing="8" align="center">
              <Box textAlign="center">
                <Text
                  as="h1"
                  fontSize={{ base: "5xl", sm: "6xl", lg: "72px" }}
                  fontFamily="display"
                  lineHeight="none"
                  letterSpacing="widest"
                >
                  Our Vision
                </Text>
              </Box>

              <Text
                fontSize="md"
                w={{ base: "full", md: "72", lg: "4xl" }}
                fontFamily="body"
                fontWeight="normal"
                color="brand.lightest"
                textAlign={{ base: "center", md: "center" }}
              >
                To use Open source products, spread knowledge and contribute to
                the Open source society.
              </Text>
            </VStack>
          </Stack>
          <Box
            as={IconButton}
            textAlign="center"
            bg="transparent"
            color="whiteAlpha.500"
            _hover={{ color: "brand.lightest", bg: "transparent" }}
            _active={{ color: "brand.lightest", bg: "transparent" }}
            pos="absolute"
            bottom="50px"
            zIndex="5"
            onClick={() => {
              scroller.scrollTo(`4`, {
                duration: 800,
                delay: 0,
                smooth: "easeInOutQuad",
              });
            }}
          >
            <Icon boxSize="8" as={ChevronDownIcon} />
          </Box>
        </Container>
      </Box>

      <Box id="4" as="main" w="full">
        <Container
          minH="2xl"
          h="100vh"
          maxW="container.xl"
          display="flex"
          justifyContent="center"
          alignItems="center"
          color="brand.lightest"
          pos="relative"
        >
          <Stack
            direction="column"
            w="full"
            spacing="16"
            align="center"
            justify="center"
          >
            <VStack spacing="8" align="center">
              <Box textAlign="center">
                <Text
                  as="h1"
                  fontSize={{ base: "5xl", sm: "6xl", lg: "72px" }}
                  fontFamily="display"
                  lineHeight="none"
                  letterSpacing="widest"
                >
                  Club Hierarchy
                </Text>
              </Box>

              <Text
                fontSize="md"
                w={{ base: "full", md: "72", lg: "4xl" }}
                fontFamily="body"
                fontWeight="normal"
                color="brand.lightest"
                textAlign={{ base: "center", md: "center" }}
              >
                Our club has flat structure, and it's open for all who are keen
                about open source. The club is fortunate to have Mrs. B Janet as
                our staff advisor.
              </Text>
            </VStack>
          </Stack>
          <Box
            as={IconButton}
            textAlign="center"
            bg="transparent"
            color="whiteAlpha.500"
            _hover={{ color: "brand.lightest", bg: "transparent" }}
            _active={{ color: "brand.lightest", bg: "transparent" }}
            pos="absolute"
            bottom="50px"
            zIndex="5"
            onClick={() => {
              scroll.scrollToTop();
            }}
          >
            <Icon boxSize="8" as={ChevronUpIcon} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Main;
