import "focus-visible/dist/focus-visible";
import { Box, BoxProps, ChakraProvider } from "@chakra-ui/react";
import "@fontsource/raleway/300.css";
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/500.css";
import "@fontsource/raleway/600.css";
import "@fontsource/raleway/700.css";
import "@fontsource/raleway/800.css";
import "@fontsource/raleway/900.css";
import "@fontsource/bebas-neue";
import "@fontsource/oswald";
import theme from "../theme";
import { AppProps } from "next/app";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";
import Head from "next/head";

import { motion } from "framer-motion";
const MotionBox = motion<BoxProps>(Box);

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="responsive-meta"
        />
      </Head>
      <ChakraProvider resetCSS theme={theme}>
        <MotionBox
          key={router.route}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.8,
            },
          }}
          initial={{
            opacity: 0,
          }}
        >
          <Component {...pageProps} />
        </MotionBox>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
