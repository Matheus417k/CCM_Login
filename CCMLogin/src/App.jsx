import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import About from "./components/About/About";
import Topics from "./components/Topics/Topics";
import Collaborators from "./components/Collaborators/Collaborators";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Hello from "./components/Hello/Hello";


function Home() {
  return (
    <div className="app">

      <main>
        <Header />
        <About />
        <Topics />
        <Collaborators />
      </main>

      <Footer />

    </div>
  );
}


export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/hello"
          element={<Hello />}
        />

      </Routes>

    </BrowserRouter>
  );
}