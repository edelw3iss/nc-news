import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../utils/api";

export default function Nav() {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    getTopics().then((topics) => {
      setTopics(topics);
    });
  }, []);

  return (
    <nav>
      <ul>
        <li key="home">
          <Link to="/" className="Nav__link">home</Link>
        </li>
        {topics.map((topic) => {
          return (
          <li key={topic.slug}>
            <Link to={`/topics/${topic.slug}`} className="Nav__link">{topic.slug}</Link>
          </li>
          )
        })}
      </ul>
    </nav>
  );
}
