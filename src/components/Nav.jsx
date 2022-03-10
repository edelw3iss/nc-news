import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { getTopics } from "../utils/api";

export default function Nav() {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { loggedInUser } = useContext(UserContext);
  useEffect(() => {
    getTopics().then((topics) => {
      setTopics(topics);
      setIsLoading(false);
    });
  }, []);

  return (
    <nav>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <ul>
          <li key="home">
            <Link to="/" className="Nav__link">
              home
            </Link>
          </li>
          {topics.map((topic) => {
            return (
              <li key={topic.slug}>
                <Link to={`/topics/${topic.slug}`} className="Nav__link">
                  {topic.slug}
                </Link>
              </li>
            );
          })}
          <li className="Nav__user">{loggedInUser.username}</li>
        </ul>
      )}
    </nav>
  );
}
