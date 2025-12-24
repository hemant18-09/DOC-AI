import Button from '../components/Button.jsx';

function AuthCTA({ onSignIn, onSignUp }) {
  return (
    <section className="landing-section landing-auth" id="auth">
      <h2>Sign in or continue as guest</h2>
      <p className="landing-section-subtitle">
        Full accounts (with saved history) can be added later. For now, you
        can simply continue to the app area.
      </p>
      <div className="landing-auth-actions">
        <Button variant="outline" onClick={onSignIn}>
          Sign in
        </Button>
        <Button onClick={onSignUp}>Sign up</Button>
      </div>
    </section>
  );
}

export default AuthCTA;
