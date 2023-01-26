import { Box, Container } from "@chakra-ui/react";
import React from "react";
import Event from "./Event";
import ProjectSlider from "./ProjectSlider";

const Main = () => {
  return (
    <Box as="main" w="full" mt="10">
      <Container
        maxW="container.xl"
        display="flex"
        justifyContent="left"
        alignItems="center"
        flexDir="column"
        color="brand.lightest"
        userSelect="none"
      >
        <Event
          heading="Technofania"
          description="Technofania, the perfect fusion of masterminds, proves it's
              excellence every year with innovation and proactive topping to
              fresh young minds. This event took its birth in 2017. it is an
              inter-departmental Technical symposium organized by TEAM OSOC
              every year. It is a two day extravaganza event in which many
              technical and non technical events are organized for participants."
        />
        <Event
          variant="RIGHT"
          heading="Workshops"
          description="This event posses a workshop on Web Extensions which will : Let
              you gain the knowledge of development of add-ons. Creates a new
              dimension of work for all. Provides you knowledge of how web
              extensions work. About Open Source. How to work on Linux(Ubuntu,
              Mint, Kali) .Basic knowledge of Linux. Basic commands used in
              Linux. How Linux is better than windows."
        />

        <Event
          disableImage={true}
          heading="Projects In PRAGYAN"
          description=" Now a days, innovative and impactful projects are an essential
          requirement for every student, so if anyone wants to work on real
          time projects, we are here or you all.Yes, OSOC gives you all a
          platform where you can build a project in any domain you
          want.Every year 4-6 projects are made and selected for SANGAM,
          PRAGYAN HARDWARE HACKATHON to present them in exhibition.In 2019,
          we worked on 4 projects and 2 of them, MEDICAL ATM and RECALLTHE
          FORGOTTEN SYSTEM were selected for final round."
        />
        <Box w="full">
          <ProjectSlider
            slides={[
              {
                id: "1",
                title: "Medical ATM",
                description:
                  "Medical ATM is a machine which provides medicine service to the customers 24*7.This project work includes a mechanism which works with the help of Arduino to provide the medicines to the customers.It also includes an Android application through which users can use the facilities of Medical ATM.It was live demonstrated in SANGAM'19, PRAGYAN HARDWARE HACKATHON",
              },
              {
                id: "2",
                title: "Smart helmet",
                description:
                  "Smart Helmet is smart device which will be used to send SOS messages in case of bike accidents.It will take readings of the impact on the helmet at the time of accident.Will trigger a SMS to emergency contacts and nearby hospitals.",
              },
              {
                id: "3",
                title: "RECALL THE FORGOTTEN",
                description:
                  "It is a system which provides us a way to look for the items that we forget in day-to-day use. For eg. Wallet, keys, etc.",
              },
            ]}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Main;
