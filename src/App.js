import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Topic from "./components/Topic";
import { getTopics } from "./utils/api";
import { useState, useEffect } from "react";

function App() {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    getTopics().then((topics) => {
      setTopics(topics);
    })
  }, []);

  return (
    <div className="App">
      <Header />
      <Nav topics={topics} setTopics={setTopics} />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        {topics.map((topic) => {
          return <Route key={topic.slug} path={`/${topic.slug}`} element={<Topic />} />;
        })}
      </Routes>
    </div>
  );
}

export default App;
