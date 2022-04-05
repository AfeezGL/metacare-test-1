import { ReactComponent as SearchIcon } from "../icons/search.svg";
import { ReactComponent as BellIcon } from "../icons/bell.svg";
import { ReactComponent as User } from "../icons/user.svg";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <header className="d-flex justify-content-between pb-2 pt-2 ps-3 pe-3 ">
      <form className="d-flex bg-light rounded-3">
        <input
          className="form-control border-0 bg-light"
          type="search"
          placeholder="Ask us any question"
          aria-label="Search"
        />
        <button className="btn" type="submit">
          <SearchIcon />
        </button>
      </form>

      <div className="d-flex align-items-center border border-1 rounded pt-2 pb-2 ps-3 pe-3">
        <div className="[ notification ] d-inline-flex">
          <BellIcon />
          <span className="[ notification-badge ]">3</span>
        </div>
        <div className="[ user ]">
          <div
            className="d-flex align-items-center justify-content-between"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#user"
            aria-expanded="false"
            aria-controls="admin"
          >
            <span>
              <User />
            </span>
          </div>

          <div className="collapse" id="user">
            <ul>
              <li>
                <Link to={"profile"}>Profile</Link>
              </li>
              <li>
                <Link to={"settings"}>Settings</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
