import { useState } from "react";

export default function CollapseWrapper({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = () => {
    setIsVisible((currentVisibility) => {
      return !currentVisibility;
    });
  };

  return (
    <section>
      <button onClick={handleClick}>{isVisible ? "Hide" : "Show"}</button>
      {isVisible && children}
    </section>
  );
}
