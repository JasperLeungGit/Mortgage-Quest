import "./App.css";
import React from "react";
import Header from "./Header";
import Form from "./forms/Form";
import { GlobalProvider } from "./context/GlobalState";
import Footer from "./Footer";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Form />
      <Footer />
    </GlobalProvider>
  );
}

export default App;
