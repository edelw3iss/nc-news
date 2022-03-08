import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Topic from "./components/Topic";


function App() {

  return (
    <div className="App">
      <Header />
      <Nav />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics/:topic_slug" element={<Topic />} />
  
      </Routes>
    </div>
  );
}



export default App;
