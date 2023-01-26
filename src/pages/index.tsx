import { Flex } from "@chakra-ui/layout";
import React from "react";
import Head from "next/head";

import Navbar from "../components/global/Navbar";
import Main from "../components/home/Main";
import Footer from "../components/global/Footer";
import { Box } from "@chakra-ui/react";

const Index = () => {
  return (
    <>
      <Head>
        <title>OSOC - Open Source Open Community</title>
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

export default Index;
