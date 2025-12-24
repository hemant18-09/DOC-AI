function Features() {
  return (
    <section className="landing-section" id="features">
      <h2>Everything in one calm view</h2>
      <p className="landing-section-subtitle">
        From first symptom to follow-up, DOC-AI keeps things organized and
        easy to follow.
      </p>
      <div className="landing-features-grid">
        <div className="landing-feature-card">
          <h3>Symptom checker</h3>
          <p>
            Type what you&apos;re feeling and get a clear description of what
            might be happening and how urgent it looks.
          </p>
        </div>
        <div className="landing-feature-card">
          <h3>Smart appointments</h3>
          <p>
            See the right type of doctor, pick a time that works, and
            arrive prepared.
          </p>
        </div>
        <div className="landing-feature-card">
          <h3>Prescription guidance</h3>
          <p>
            Upload prescriptions and get a simple view of medicines,
            timings, and safety notes.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;
