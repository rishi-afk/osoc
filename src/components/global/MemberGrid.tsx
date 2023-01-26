import { Grid, GridProps } from "@chakra-ui/react";
import React, { useEffect } from "react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const MotionGrid = motion<GridProps>(Grid);

interface Props {
  children: React.ReactNode;
}

const MemberGrid = ({ children }: Props) => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start("show");
    }
  }, [inView]);

  return (
    <MotionGrid
      ref={ref}
      w={{ base: "full", sm: "initial", md: "full" }}
      templateColumns={{ md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
      gap={"px"}
      mt="6"
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { staggerChildren: 0.2 },
        },
      }}
      initial="hidden"
      animate={animation}
    >
      {children}
    </MotionGrid>
  );
};

export default MemberGrid;
