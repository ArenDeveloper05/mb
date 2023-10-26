import { useState } from "react";
import StateSupportDesc from "./state-support-desc/StateSupportDesc";
import StateSupportLinks from "./state-support-links/StateSupportLinks";

const StateSupport = () => {
  const [showLinks, setShowLinks] = useState(true);

  return (
    <div className="footer-middle-state-support">
      <StateSupportDesc setShowLinks={setShowLinks} />

      {showLinks && <StateSupportLinks />}
    </div>
  );
};

export default StateSupport;
