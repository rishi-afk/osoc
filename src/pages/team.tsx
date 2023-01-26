import { Box, Flex } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import Head from "next/head";

import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import Section from "../components/global/Section";
import MemberGrid from "../components/global/MemberGrid";
import { useAnimation } from "framer-motion";

interface Props {
  data: {
    id: string;
    year: string;
    members: {
      id: string;
      image: string;
      name: string;
      redirect: string;
    }[];
  }[];
  years: string[];
}

export const getStaticProps = async () => {
  const data = [
    {
      id: "1",
      year: "2023",
      members: [
        {
          id: "1",
          image:
            "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
          name: "Deepak Suda",
          redirect: "/",
        },
        {
          id: "2",
          image:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
          name: "Rito",
          redirect: "/",
        },
        {
          id: "3",
          image:
            "https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?auto=compress&cs=tinysrgb&w=1600",
          name: "Nandini Kumari",
          redirect: "/",
        },
        {
          id: "4",
          image:
            "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
          name: "Bhushan",
          redirect: "/",
        },
        {
          id: "5",
          image:
            "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
          name: "Manvendra",
          redirect: "/",
        },
        {
          id: "6",
          image:
            "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
          name: "Surendra",
          redirect: "/",
        },
      ],
    },
    {
      id: "2",
      year: "2024",
      members: [
        {
          id: "1",
          image:
            "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
          name: "Harsh",
          redirect: "/",
        },
        {
          id: "2",
          image:
            "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
          name: "Anurag",
          redirect: "/",
        },
        {
          id: "3",
          image:
            "https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?auto=compress&cs=tinysrgb&w=1600",
          name: "Pooja",
          redirect: "/",
        },
        {
          id: "4",
          image:
            "https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?auto=compress&cs=tinysrgb&w=1600",
          name: "Bhushan",
          redirect: "/",
        },
        {
          id: "5",
          image:
            "https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?auto=compress&cs=tinysrgb&w=1600",
          name: "Manvendra",
          redirect: "/",
        },
        {
          id: "6",
          image:
            "https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?auto=compress&cs=tinysrgb&w=1600",
          name: "Surendra",
          redirect: "/",
        },
      ],
    },
  ];
  const years = ["2023", "2024"];
  return {
    props: { data, years },
  };
};

const Team = ({ data, years }: Props) => {
  const [currentYear, setCurrentYear] = useState(data[0].year);
  const [members, setMembers] = useState(data[0].members);
  const animation = useAnimation();

  useEffect(() => {
    const found = data.find((batch) => batch.year === currentYear);
    setMembers(() => found.members);
  }, [currentYear]);

  return (
    <>
      <Head>
        <title>Team | OSOC</title>
      </Head>
      <Flex minW="100%" flexDir="column" pos="relative" zIndex={10}>
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
        <Section
          heading="Members"
          years={years}
          callback={setCurrentYear}
          defaultYear={currentYear}
        >
          <MemberGrid members={members} />
        </Section>
        <Footer />
      </Flex>
    </>
  );
};

export default Team;
