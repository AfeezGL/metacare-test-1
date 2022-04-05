import { ReactComponent as AdminIcon } from "../icons/admin.svg";
import { ReactComponent as CalendarIcon } from "../icons/calendar.svg";
import { ReactComponent as ChatIcon } from "../icons/chat.svg";
import { ReactComponent as CheckIcon } from "../icons/check.svg";
import { ReactComponent as ClockIcon } from "../icons/clock.svg";

const Nav = () => {
  return (
    <nav
      role={"navigation"}
      aria-roledescription="Primary"
      aria-label="Primary"
      className="primary-nav"
    >
      <header>
        <h1>Metacare</h1>
        <p>adeyinka@metacare.app</p>
      </header>
      <div>
        <div className="mb-1">
          <div
            className="d-flex align-items-center justify-content-between [ collapse-button ]"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#admin"
            aria-expanded="false"
            aria-controls="admin"
          >
            <span>
              <AdminIcon /> Admin
            </span>
            <i className="fa-solid fa-chevron-right"></i>
          </div>

          <div className="collapse" id="admin">
            <ul>
              <li className="d-inline-flex align-items-center">
                <a href="/docs/5.0/components/accordion/" className="active">
                  Teams
                </a>
              </li>
              <li className="d-inline-flex align-items-center">
                <a href="/docs/5.0/components/alerts/">Knowledge Base</a>
              </li>
              <li className="d-inline-flex align-items-center">
                <a href="/docs/5.0/components/alerts/">Training SAM</a>
              </li>
              <li className="d-inline-flex align-items-center">
                <a href="/docs/5.0/components/alerts/">Help Center</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div
            className="d-flex align-items-center justify-content-between [ collapse-button ]"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#knowledge-base"
            aria-expanded="false"
            aria-controls="knowledge-base"
          >
            <span>
              <CheckIcon /> Knowledge Base
            </span>
            <i className="fa-solid fa-chevron-right"></i>
          </div>

          <div className="collapse" id="knowledge-base">
            <ul>
              <li className="d-inline-flex align-items-center">
                <a href="/docs/5.0/components/accordion/">Teams</a>
              </li>
              <li className="d-inline-flex align-items-center">
                <a href="/docs/5.0/components/alerts/">Knowledge Base</a>
              </li>
              <li className="d-inline-flex align-items-center">
                <a href="/docs/5.0/components/alerts/">Training SAM</a>
              </li>
              <li className="d-inline-flex align-items-center">
                <a href="/docs/5.0/components/alerts/">Help Center</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mb-1">
          <div
            className="d-flex align-items-center justify-content-between [ collapse-button ]"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#train-sam"
            aria-expanded="false"
            aria-controls="train-sam"
          >
            <span>
              <CheckIcon /> Train SAM
            </span>
            <i className="fa-solid fa-chevron-right"></i>
          </div>

          <div className="collapse" id="train-sam">
            <ul>
              <li className="d-inline-flex align-items-center">
                <a href="/docs/5.0/components/accordion/">Teams</a>
              </li>
              <li className="d-inline-flex align-items-center">
                <a href="/docs/5.0/components/alerts/">Knowledge Base</a>
              </li>
              <li className="d-inline-flex align-items-center">
                <a href="/docs/5.0/components/alerts/">Training SAM</a>
              </li>
              <li className="d-inline-flex align-items-center">
                <a href="/docs/5.0/components/alerts/">Help Center</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mb-1">
          <div
            className="d-flex align-items-center justify-content-between [ collapse-button ]"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#agent-inbox"
            aria-expanded="false"
            aria-controls="agent-inbox"
          >
            <span>
              <CalendarIcon /> Agent Inbox
            </span>
            <i className="fa-solid fa-chevron-right"></i>
          </div>

          <div className="collapse" id="agent-inbox">
            <ul>
              <li className="d-inline-flex align-items-center">
                <a href="/docs/5.0/components/accordion/">Teams</a>
              </li>
              <li className="d-inline-flex align-items-center">
                <a href="/docs/5.0/components/alerts/">Knowledge Base</a>
              </li>
              <li className="d-inline-flex align-items-center">
                <a href="/docs/5.0/components/alerts/">Training SAM</a>
              </li>
              <li className="d-inline-flex align-items-center">
                <a href="/docs/5.0/components/alerts/">Help Center</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mb-1">
          <div
            className="d-flex align-items-center justify-content-between [ collapse-button ]"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#help-center"
            aria-expanded="false"
            aria-controls="help-center"
          >
            <span>
              <ClockIcon /> Help Center
            </span>
            <i className="fa-solid fa-chevron-right"></i>
          </div>

          <div className="collapse" id="help-center">
            <ul>
              <li className="d-inline-flex align-items-center">
                <a href="/docs/5.0/components/accordion/">Teams</a>
              </li>
              <li className="d-inline-flex align-items-center">
                <a href="/docs/5.0/components/alerts/">Knowledge Base</a>
              </li>
              <li className="d-inline-flex align-items-center">
                <a href="/docs/5.0/components/alerts/">Training SAM</a>
              </li>
              <li className="d-inline-flex align-items-center">
                <a href="/docs/5.0/components/alerts/">Help Center</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mb-1">
          <div
            className="d-flex align-items-center justify-content-between [ collapse-button ]"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#analytics"
            aria-expanded="false"
            aria-controls="analytics"
          >
            <span>
              <ChatIcon /> Analytics
            </span>
            <i className="fa-solid fa-chevron-right"></i>
          </div>

          <div className="collapse" id="analytics">
            <ul>
              <li className="d-inline-flex align-items-center">
                <a href="/docs/5.0/components/accordion/">Teams</a>
              </li>
              <li className="d-inline-flex align-items-center">
                <a href="/docs/5.0/components/alerts/">Knowledge Base</a>
              </li>
              <li className="d-inline-flex align-items-center">
                <a href="/docs/5.0/components/alerts/">Training SAM</a>
              </li>
              <li className="d-inline-flex align-items-center">
                <a href="/docs/5.0/components/alerts/">Help Center</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
