import React from "react";
import "./App.css";
import {
  Routes,
  Route,
} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./const/theme";
import Home from "./components/pages/Home";
import SignIn from "./components/pages/SignIn";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ChakraProvider>
  );
};

export default App;

const NotFound = () => {
  return (
    <div>NotFound</div>
  );
};