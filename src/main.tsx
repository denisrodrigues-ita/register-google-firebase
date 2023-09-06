import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./styles/index.ts";
import { Container } from '@chakra-ui/react'
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Container maxW="container.sm">
      <App />
      </Container>
    </ChakraProvider>
  </React.StrictMode>
);
