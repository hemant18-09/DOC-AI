import { useNavigate } from 'react-router-dom';
import Hero from '../sections/Hero.jsx';
import Features from '../sections/Features.jsx';
import Visual from '../sections/Visual.jsx';
import CTA from '../sections/CTA.jsx';
import AuthCTA from '../sections/AuthCTA.jsx';

function LandingPage() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/app/symptoms');
  };

  const handleSignIn = () => {
    navigate('/login');
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="landing-page">
      <Hero onStart={handleStart} />
      <Features />
      <Visual />
      <CTA onStart={handleStart} />
      <AuthCTA onSignIn={handleSignIn} onSignUp={handleSignUp} />
    </div>
  );
}

export default LandingPage;
