import { useMemo } from 'react';

function TimelinePage() {
  const items = useMemo(
    () => [
      {
        id: 't3',
        date: '2025-12-24',
        label: 'Prescription analyzed',
        type: 'prescription',
        detail: 'DocAI extracted medicines from your latest prescription.',
      },
      {
        id: 't2',
        date: '2025-12-23',
        label: 'Appointment booked',
        type: 'appointment',
        detail: 'Consultation booked with Dr. Aditi Rao (General Physician).',
      },
      {
        id: 't1',
        date: '2025-12-22',
        label: 'Symptom check run',
        type: 'symptoms',
        detail: 'DocAI assessed your cough and fever symptoms.',
      },
    ],
    []
  );

  const sorted = [...items].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <section className="panel panel-output" aria-label="Timeline">
      <h1 className="panel-title">Timeline</h1>
      <p className="panel-description">
        A chronological view of your recent DocAI interactions — symptom
        checks, appointments, and prescription analyses.
      </p>

      <ol className="timeline timeline-large">
        {sorted.map((item, index) => (
          <li key={item.id} className="timeline-item">
            <div className="timeline-marker" aria-hidden="true" />
            <div className="timeline-content">
              <span className="timeline-label">{item.date}</span>
              <p className="timeline-title">{item.label}</p>
              <p className="timeline-text">{item.detail}</p>
              {index === 0 && <span className="timeline-chip">Most recent</span>}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default TimelinePage;
