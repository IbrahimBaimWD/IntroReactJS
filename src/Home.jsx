import React from "react";
import "./App.css";
import { Center, Flex, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <Center bg="gray.800" h="100vh" color="white" as="b" fontSize="2xl">
      <Flex gap="2">
        React Js
        <Spacer />
        <Link to="/about" className="App-link">
          go about
        </Link>
      </Flex>
    </Center>
  );
}
