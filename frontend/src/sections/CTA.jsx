import Button from '../components/Button.jsx';

function CTA({ onStart }) {
  return (
    <section className="landing-section landing-cta" id="cta">
      <div className="landing-cta-inner">
        <h2>Ready to start?</h2>
        <p>
          You can begin with a symptom check in under a minute and come
          back later to use appointments, timelines, and prescription tools.
        </p>
        <Button onClick={onStart}>Start symptom check</Button>
      </div>
    </section>
  );
}

export default CTA;
