import React from "react";
import Header from "./Header";
import "./App.css"; // optional global styles
import Home from "./pages/Home";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
