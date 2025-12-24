import { useNavigate } from 'react-router-dom';
import Button from '../components/Button.jsx';

function Signup() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // In a real app, create account here then redirect
    navigate('/app/symptoms');
  };

  return (
    <div className="auth-page">
      <h1>Create account</h1>
      <p className="landing-section-subtitle">
        For now, this is a simple demo screen that sends you into the app.
      </p>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" required placeholder="Your name" />
        </label>
        <label>
          Email
          <input type="email" required placeholder="you@example.com" />
        </label>
        <label>
          Password
          <input type="password" required placeholder="Choose a password" />
        </label>
        <Button className="auth-submit">Create account</Button>
      </form>
    </div>
  );
}

export default Signup;
