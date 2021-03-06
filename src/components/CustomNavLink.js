import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomNavLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link to={to} {...props} className={match ? "active" : ""}>
      {children}
    </Link>
  );
};

export default CustomNavLink;
