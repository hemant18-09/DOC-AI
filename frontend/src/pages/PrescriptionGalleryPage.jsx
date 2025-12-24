import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

function PrescriptionGalleryPage() {
  const navigate = useNavigate();

  const prescriptions = useMemo(
    () => [
      {
        id: 'p1',
        label: 'Cold & fever',
        date: '2025-12-24',
        doctor: 'Dr. Aditi Rao',
      },
      {
        id: 'p2',
        label: 'Allergy flare-up',
        date: '2025-11-10',
        doctor: 'Dr. Meera Iyer',
      },
      {
        id: 'p3',
        label: 'Routine medication refill',
        date: '2025-10-02',
        doctor: 'Clinic upload',
      },
    ],
    []
  );

  function handleAnalyze(id) {
    navigate('/prescription', {
      state: {
        source: 'stored',
        prescriptionId: id,
      },
    });
  }

  return (
    <section
      className="panel panel-output"
      aria-label="Stored prescription images"
    >
      <h1 className="panel-title">Prescription library</h1>
      <p className="panel-description">
        View stored prescriptions and send one to the analyzer when needed.
      </p>

      <div className="prescription-grid">
        {prescriptions.map((p) => (
          <article key={p.id} className="card prescription-card">
            <div className="prescription-thumb" aria-hidden="true" />
            <div className="prescription-meta">
              <p className="prescription-title">{p.label}</p>
              <p className="prescription-subtext">{p.date}</p>
              <p className="prescription-subtext">{p.doctor}</p>
            </div>
            <div className="appointment-actions-row">
              <button
                className="btn btn-outline"
                type="button"
                onClick={() => handleAnalyze(p.id)}
              >
                Analyze prescription
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default PrescriptionGalleryPage;
