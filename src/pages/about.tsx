import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Main from "../components/about/Main";
import Navbar from "../components/global/Navbar";
import Head from "next/head";
import Footer from "../components/global/Footer";

const about = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <Flex minW="full" flexDir="column" pos="relative" zIndex={10}>
        <video
          autoPlay
          muted
          loop
          style={{
            objectFit: "cover",
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
            width: "100vw",
            zIndex: "-10",
          }}
        >
          <source src="bg.webm" type="video/webm" />
          <source src="bg.mp4" type="video/mp4" />
        </video>
        <Box
          bg="blackAlpha.700"
          pos="fixed"
          top="0"
          left="0"
          minH="full"
          minW="full"
          zIndex={-10}
        />
        <Navbar />
        <Main />
        <Footer />
      </Flex>
    </>
  );
};

export default about;
