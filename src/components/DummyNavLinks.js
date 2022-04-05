import CustomNavLink from "./CustomNavLink";

const DummyNavLinks = () => {
  return (
    <ul>
      <li className="d-inline-flex align-items-center">
        <CustomNavLink to={"/"}>Teams</CustomNavLink>
      </li>
      <li className="d-inline-flex align-items-center">
        <CustomNavLink to={"/knowledgebase"}>Knowledge Base</CustomNavLink>
      </li>
      <li className="d-inline-flex align-items-center">
        <CustomNavLink to={"/training"}>Training SAM</CustomNavLink>
      </li>
      <li className="d-inline-flex align-items-center">
        <CustomNavLink to={"/training"}>Help Center</CustomNavLink>
      </li>
    </ul>
  );
};

export default DummyNavLinks;
