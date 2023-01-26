import React from "react";
import {
  AspectRatio,
  Box,
  Container,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
type Props = {
  slides: {
    id: string;
    description: string;
    title: string;
  }[];
};

const ProjectSlider = ({ slides }: Props) => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{ disableOnInteraction: true, stopOnLastSlide: false }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <Stack
            direction={{
              base: "column-reverse",
              md: "row",
            }}
            w="full"
            align="center"
            justify="space-around"
            p="12"
          >
            <VStack
              spacing="8"
              align={{
                base: "center",
                md: "flex-start",
              }}
            >
              <Box
                textAlign={{
                  base: "center",
                  md: "left",
                }}
                mt={{ base: "8", md: "0" }}
              >
                <HStack
                  align="center"
                  justify={{ base: "center", md: "right" }}
                >
                  <Text
                    as="h1"
                    fontSize={{
                      base: "lg",
                      sm: "2xl",
                      md: "3xl",
                      lg: "4xl",
                    }}
                    fontFamily="oswald"
                    textTransform="uppercase"
                  >
                    {slide.title}
                  </Text>
                </HStack>
              </Box>
              <Text
                fontSize={{ base: "sm", sm: "md" }}
                lineHeight="6"
                w={{ base: "full", md: "72", lg: "96" }}
                fontFamily="body"
                fontWeight="normal"
                color="brand.gray"
                textAlign={{
                  base: "center",
                  md: "left",
                }}
              >
                {slide.description}
              </Text>
            </VStack>
            <Box boxSize={{ base: "230px", md: "sm", lg: "md" }} pos="relative">
              <AspectRatio w="full" h="full" mt="6">
                <Box w="full" h="full" bg="blue.200" />
              </AspectRatio>
            </Box>
          </Stack>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectSlider;
