import { footerConfig } from "../../../../../config";
import StateSupportLinksLink from "./state-support-links-link/StateSupportLinksLink";

const StateSupportLinks = () => {
  return (
    <ul className="footer-middle-state-support-links">
      {footerConfig.stateSupportConfig.map((item) => {
        return <StateSupportLinksLink key={item.id} item={item} />;
      })}
    </ul>
  );
};

export default StateSupportLinks;
