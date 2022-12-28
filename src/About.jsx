import "./App.css";
import React from "react";
import { Link } from "react-router-dom";
import { Center, Flex, Spacer } from "@chakra-ui/react";

export default function About() {
  return (
    <Center bg="gray.800" h="100vh" color="white" as="b" fontSize="2xl">
      <Flex gap="2">
        Page About
        <Spacer />
        <Link to="/" className="App-link">
          Back
        </Link>
      </Flex>
    </Center>
  );
}
