import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="app-header">
      <div className="app-brand">
        <div className="app-logo-row">
          <img
            src="/assests/docai-logo.png"
            alt="Doc-AI logo"
            className="app-logo-image"
          />
          <div className="app-logo-text-section">
            <span className="app-logo-text">DOC-AI</span>
            <span className="app-tagline">
              AI-assisted healthcare, designed for clarity and trust.
            </span>
          </div>
        </div>
        <span className="app-subtitle">
          AI assistant for symptoms, appointments & prescriptions
        </span>
      </div>
      <nav className="app-nav">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link nav-link-active' : 'nav-link'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/app/symptoms"
          className={({ isActive }) =>
            isActive ? 'nav-link nav-link-active' : 'nav-link'
          }
        >
          Symptom checker
        </NavLink>
        <NavLink
          to="/app/appointments"
          className={({ isActive }) =>
            isActive ? 'nav-link nav-link-active' : 'nav-link'
          }
        >
          Appointments
        </NavLink>
        <NavLink
          to="/app/timeline"
          className={({ isActive }) =>
            isActive ? 'nav-link nav-link-active' : 'nav-link'
          }
        >
          Timeline
        </NavLink>
        <NavLink
          to="/app/summary"
          className={({ isActive }) =>
            isActive ? 'nav-link nav-link-active' : 'nav-link'
          }
        >
          Summary
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
