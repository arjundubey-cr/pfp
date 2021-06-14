import React from "react";
import { Box, ChakraProvider, Divider, Grid } from "@chakra-ui/react";
import { Education, Introduction, Projects } from "./pages";
import { ColorModeSwitch } from "./ColorModeSwitch";

const WrappedApp = (
  <ChakraProvider>
    <React.StrictMode>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="50vh" p={3}>
          <ColorModeSwitch justifySelf="flex-end" />
          <Introduction />
          <Divider />
          <Projects />
          <Education />
        </Grid>
      </Box>
    </React.StrictMode>
  </ChakraProvider>
);

export { WrappedApp };
