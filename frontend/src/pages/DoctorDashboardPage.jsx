import { useLocation, useNavigate } from 'react-router-dom';

function DoctorDashboardPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const symptomText = location.state?.symptomText || '';
  const result = location.state?.result || null;
  const doctor = location.state?.doctor || null;
  const slot = location.state?.slot || null;

  function handleBackToAppointments() {
    navigate('/appointment');
  }

  function handleBackHome() {
    navigate('/symptoms');
  }

  if (!doctor) {
    return (
      <section className="panel panel-output" aria-label="Doctor dashboard">
        <h1 className="panel-title">Doctor dashboard</h1>
        <p className="panel-description">
          No appointment details found.
        </p>
        <p>
          You can start again from the symptom checker and book a new
          appointment.
        </p>
        <div className="appointment-actions-row">
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleBackHome}
          >
            Go to symptom checker
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="panel panel-output" aria-label="Doctor dashboard">
      <h1 className="panel-title">Doctor dashboard (read-only)</h1>
      <p className="panel-description">
        This is what the doctor might see before you join the consultation.
      </p>

      <article className="card appointment-card">
        <h4>Appointment details</h4>
        <p className="doctor-meta">
          {doctor.name} · {doctor.specialization}
        </p>
        <p className="doctor-meta">Location: {doctor.location}</p>
        {slot && <p className="appointment-summary">Booked slot: {slot}</p>}
      </article>

      <article className="card appointment-card">
        <h4>Pre-consultation summary</h4>
        <div className="preconsult-card">
          <p>
            <strong>Patient text:</strong> {symptomText || '—'}
          </p>
          {result && (
            <>
              <p>
                <strong>Risk level:</strong> {result.riskLevel}
              </p>
              <p>
                <strong>Summary:</strong> {result.summary}
              </p>
              <p>
                <strong>Why:</strong> {result.why}
              </p>
            </>
          )}
        </div>
      </article>

      <div className="appointment-actions-row">
        <button
          className="btn btn-outline"
          type="button"
          onClick={handleBackToAppointments}
        >
          Back to appointments
        </button>
        <button
          className="btn btn-ghost"
          type="button"
          onClick={handleBackHome}
        >
          Home
        </button>
      </div>
    </section>
  );
}

export default DoctorDashboardPage;
