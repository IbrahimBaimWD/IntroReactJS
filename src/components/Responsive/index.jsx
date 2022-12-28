import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

const Responsive = () => {
  return (
    <Grid
      h="100vh"
      templateRows={{ base: null, lg: "repeat(6, 1fr)" }}
      templateColumns="repeat(2, 1fr)"
      gap={{ base: 2, lg: 4 }}
      px={{ base: 2, lg: 12 }}
      py={{ base: 2, lg: 4 }}
    >
      <GridItem colSpan={2} bg="#83C6E1" order={1} />
      <GridItem
        rowSpan={{ base: null, lg: 3 }}
        colSpan={{ base: 2, md: 1 }}
        bg="#CCCCCC"
        order={{ base: 3, lg: 2 }}
      />
      <GridItem
        rowSpan={{ base: 2, lg: 3 }}
        colSpan={{ base: 2, lg: 1 }}
        bg="#F7B264"
        order={{ base: 2, lg: 3 }}
      />
      <GridItem
        rowSpan={{ base: null, lg: 1 }}
        colSpan={{ base: 2, lg: 1 }}
        bg="#6BB576"
        order={{ base: 5, lg: 4 }}
      />
      <GridItem
        rowSpan={{ base: 1, lg: 2 }}
        colSpan={{ base: 2, md: 1 }}
        bg="#CCCCCC"
        order={{ base: 4, lg: 5 }}
      />
      <GridItem
        rowSpan={{ base: 1, lg: 1 }}
        colSpan={{ base: 2, lg: 1 }}
        bg="#CCCCCC"
        order={6}
      />
    </Grid>
  );
};

export default Responsive;
