import React from "react";
import Header from "./Header";
import Form from "./forms/Form";
import { GlobalProvider } from "./context/GlobalState";
import Footer from "./Footer";
import Bossfight from "./Bossfight";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
library.add(faEdit);

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Form />
      <Bossfight />
      <Footer />
    </GlobalProvider>
  );
}

export default App;
