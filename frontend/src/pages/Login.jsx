import { useNavigate } from 'react-router-dom';
import Button from '../components/Button.jsx';

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // In a real app, validate credentials here then redirect
    navigate('/app/symptoms');
  };

  return (
    <div className="auth-page">
      <h1>Sign in</h1>
      <p className="landing-section-subtitle">
        Use a demo login to continue to the DOC-AI app area.
      </p>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label>
          Email
          <input type="email" required placeholder="you@example.com" />
        </label>
        <label>
          Password
          <input type="password" required placeholder="••••••••" />
        </label>
        <Button className="auth-submit">Continue</Button>
      </form>
    </div>
  );
}

export default Login;
