import CustomNavLink from "./CustomNavLink";

const TeamsNav = () => {
  return (
    <nav
      role={"navigation"}
      aria-label="secondary"
      aria-roledescription="secondary"
      className="border-top border-bottom mb-3 [ secondary-nav ]"
    >
      <div className="d-flex">
        <CustomNavLink to={"/"}>Efficiency</CustomNavLink>

        <CustomNavLink to={"volume"}>Volume</CustomNavLink>

        <CustomNavLink to={"customer/satisfaction"}>
          Customer satisfaction
        </CustomNavLink>

        <CustomNavLink to={"/backlog"}>Backlog</CustomNavLink>
      </div>
    </nav>
  );
};

export default TeamsNav;
