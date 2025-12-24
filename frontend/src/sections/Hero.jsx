import Button from '../components/Button.jsx';

function Hero({ onStart }) {
  const handleScrollToFeatures = () => {
    const el = document.getElementById('features');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="landing-hero" id="hero">
      <div className="landing-hero-content">
        <h1>DOC-AI, your calm health companion</h1>
        <p>
          Check symptoms, understand risks, and coordinate appointments in a
          few guided steps. Designed to feel clear, safe, and reassuring for
          patients.
        </p>
        <div className="landing-hero-actions">
          <Button onClick={onStart}>Start symptom check</Button>
          <Button variant="outline" onClick={handleScrollToFeatures}>
            Learn how it works
          </Button>
        </div>
      </div>
      <div className="landing-hero-visual">
        <div className="landing-hero-card">
          <h3>Instant overview</h3>
          <p>
            Describe how you feel in your own words and DOC-AI turns it into
            a simple, structured summary.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
