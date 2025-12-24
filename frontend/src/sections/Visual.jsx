function Visual() {
  return (
    <section className="landing-section landing-section-split" id="how-it-works">
      <div className="landing-column">
        <h2>How DOC-AI supports you</h2>
        <ul className="landing-list">
          <li>Helps you explain your symptoms more clearly to doctors.</li>
          <li>Keeps a gentle record of visits, summaries, and prescriptions.</li>
          <li>Highlights when it is important to seek urgent care.</li>
        </ul>
      </div>
      <div className="landing-column landing-column-card">
        <div className="landing-visual-card">
          <h3>Before your visit</h3>
          <p>
            DOC-AI prepares a short, readable summary so you can focus on
            the conversation, not on remembering every detail.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Visual;
