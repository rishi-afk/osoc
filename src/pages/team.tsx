import { Box, Flex } from "@chakra-ui/layout";
import React from "react";
import Head from "next/head";

import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import Section from "../components/global/Section";
import MemberCard from "../components/global/MemberCard";
import MemberGrid from "../components/global/MemberGrid";

interface Props {
  data: {
    id: string;
    batch: string;
    members: {
      id: string;
      image: string;
      name: string;
      redirect: string;
    }[];
  }[];
}

const data = [
  {
    id: "1",
    batch: "2023",
    members: [
      {
        id: "1",
        image:
          "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
        name: "Deepak Suda",
        redirect: "",
      },
      {
        id: "2",
        image:
          "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
        name: "Deepak Suda",
        redirect: "",
      },
      {
        id: "3",
        image:
          "https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?auto=compress&cs=tinysrgb&w=1600",
        name: "Nandini Kumari",
        redirect: "",
      },
      {
        id: "4",
        image:
          "https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?auto=compress&cs=tinysrgb&w=1600",
        name: "Nandini Kumari",
        redirect: "",
      },
      {
        id: "5",
        image:
          "https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?auto=compress&cs=tinysrgb&w=1600",
        name: "Nandini Kumari",
        redirect: "",
      },
      {
        id: "6",
        image:
          "https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?auto=compress&cs=tinysrgb&w=1600",
        name: "Nandini Kumari",
        redirect: "",
      },
    ],
  },
  {
    id: "2",
    batch: "2024",
    members: [
      {
        id: "1",
        image:
          "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
        name: "Deepak Suda",
        redirect: "",
      },
      {
        id: "2",
        image:
          "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
        name: "Deepak Suda",
        redirect: "",
      },
      {
        id: "3",
        image:
          "https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?auto=compress&cs=tinysrgb&w=1600",
        name: "Nandini Kumari",
        redirect: "",
      },
    ],
  },
];

export const getStaticProps = async () => {
  return {
    props: { data },
  };
};

const Releases = ({ data }: Props) => {
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
          batches={data.map((datum) => ({ id: datum.id, batch: datum.batch }))}
        >
          <MemberGrid>
            {data[0].members.map((member) => (
              <MemberCard member={member} key={member.id} />
            ))}
          </MemberGrid>
        </Section>
        <Footer />
      </Flex>
    </>
  );
};

export default Releases;
