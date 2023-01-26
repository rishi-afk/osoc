import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Main from "../components/contact/Main";
import Navbar from "../components/global/Navbar";
import Head from "next/head";
import Footer from "../components/global/Footer";

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <Flex minW="full" flexDir="column" pos="relative" zIndex={10}>
        <video
          autoPlay
          muted
          loop
          src="/bg.mp4"
          style={{
            objectFit: "cover",
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
            width: "100vw",
            zIndex: "-10",
          }}
        />
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

export default contact;
