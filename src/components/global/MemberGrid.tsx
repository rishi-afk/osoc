import { Grid, GridProps } from "@chakra-ui/react";
import React, { useEffect } from "react";

import { AnimationControls, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import MemberCard from "./MemberCard";
const MotionGrid = motion<GridProps>(Grid);

interface Props {
  members?: any[];
}

const MemberGrid = ({ members }: Props) => {
  const animation = useAnimation();
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      animation.start("show");
    }
  }, [inView, members]);

  return (
    <MotionGrid
      ref={ref}
      w={{ base: "full", sm: "initial", md: "full" }}
      minH="2xl"
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
      {members.map((member) => (
        <MemberCard member={member} key={member.id} />
      ))}
    </MotionGrid>
  );
};

export default MemberGrid;
