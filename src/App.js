import Nav from "./components/Nav";
import { ReactComponent as SearchIcon } from "./icons/search.svg";
import { ReactComponent as BellIcon } from "./icons/bell.svg";

function App() {
  return (
    <>
      <Nav />
      <div className="display">
        <header className="d-flex justify-content-between pb-2 pt-2">
          <form class="d-flex bg-light rounded-3">
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
            <div className="notification d-inline-flex">
              <BellIcon />
              <span className="badge bg-danger">3</span>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
