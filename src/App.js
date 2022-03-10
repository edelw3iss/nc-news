import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Topic from "./components/Topic";
import SingleArticle from "./components/SingleArticle";
import ErrorPage from "./components/ErrorPage";
import { useState } from "react";
import { UserContext } from "./contexts/UserContext";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({username: "happyamy2016"});
  return (
    <UserContext.Provider value= {{loggedInUser, setLoggedInUser}}>
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topics/:topic_slug" element={<Topic />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
