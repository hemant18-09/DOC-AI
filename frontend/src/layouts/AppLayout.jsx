import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <div className="app-root">
      <main className="app-main">
        <Outlet />
      </main>
      <footer className="app-footer">
        <span>DocAI is an assistant, not a doctor.</span>
        <span className="app-footer-links">
          <button className="link" type="button">
            Privacy
          </button>
          <button className="link" type="button">
            Terms
          </button>
        </span>
      </footer>
    </div>
  );
}

export default AppLayout;
