import { useState } from 'react';

function SummaryViewPage() {
  const [mode, setMode] = useState('patient'); // 'patient' | 'doctor'

  return (
    <section className="panel panel-output" aria-label="Summary view">
      <h1 className="panel-title">Summary view</h1>
      <p className="panel-description">
        Switch between how DocAI explains your information to you and what a
        doctor might see before your visit.
      </p>

      <div className="summary-toggle" role="tablist">
        <button
          type="button"
          role="tab"
          className={
            mode === 'patient' ? 'summary-tab summary-tab-active' : 'summary-tab'
          }
          onClick={() => setMode('patient')}
        >
          Patient summary
        </button>
        <button
          type="button"
          role="tab"
          className={
            mode === 'doctor' ? 'summary-tab summary-tab-active' : 'summary-tab'
          }
          onClick={() => setMode('doctor')}
        >
          Doctor summary
        </button>
      </div>

      {mode === 'patient' && (
        <article className="card appointment-card">
          <h3>Patient-friendly summary</h3>
          <p>
            This view explains your symptoms, risk level, and next steps in
            simple language. It highlights when you should rest, monitor, or
            talk to a doctor.
          </p>
          <ul>
            <li>Plain-language explanation of what DocAI sees.</li>
            <li>Clear guidance such as "home care" vs "see a doctor".</li>
            <li>Reminders for medicines and follow-up checks.</li>
          </ul>
        </article>
      )}

      {mode === 'doctor' && (
        <article className="card appointment-card">
          <h3>Doctor-facing summary (read-only)</h3>
          <p>
            This view focuses on structured data — key symptoms, duration,
            risk flags, and extracted medicines — that can help your doctor
            plan the consultation.
          </p>
          <ul>
            <li>Structured list of main symptoms and onset timeline.</li>
            <li>Risk flags (for example, fever duration, breathing issues).</li>
            <li>Organized prescription data from the analyzer.</li>
          </ul>
        </article>
      )}
    </section>
  );
}

export default SummaryViewPage;
