import { useLocation, useNavigate } from 'react-router-dom';
import { useMemo, useState } from 'react';

function AppointmentPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const symptomText = location.state?.symptomText || '';
  const result = location.state?.result || null;

  const initialSpecialization =
    result?.suggestedSpecialization || 'General Physician';

  const [appointmentStep, setAppointmentStep] = useState('specialization');
  const [selectedDoctorId, setSelectedDoctorId] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const doctors = useMemo(
    () => [
      {
        id: 'd1',
        name: 'Dr. Aditi Rao',
        specialization: 'General Physician',
        location: 'Koramangala, Bengaluru',
        nextAvailable: 'Today · 5:30 PM',
        slots: ['4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM'],
      },
      {
        id: 'd2',
        name: 'Dr. Rahul Menon',
        specialization: 'Pulmonologist',
        location: 'HSR Layout, Bengaluru',
        nextAvailable: 'Tomorrow · 11:00 AM',
        slots: ['10:30 AM', '11:00 AM', '11:30 AM'],
      },
      {
        id: 'd3',
        name: 'Dr. Meera Iyer',
        specialization: 'Internal Medicine',
        location: 'Indiranagar, Bengaluru',
        nextAvailable: 'Tomorrow · 6:15 PM',
        slots: ['5:45 PM', '6:15 PM', '6:45 PM'],
      },
    ],
    []
  );

  const selectedDoctor = doctors.find((doc) => doc.id === selectedDoctorId) || null;

  function handleDoctorSelect(id) {
    setSelectedDoctorId(id);
    setSelectedSlot(null);
    setAppointmentStep('slot');
  }

  function handleSlotSelect(slot) {
    setSelectedSlot(slot);
    setAppointmentStep('confirmation');
  }

  function handleConfirmBooking() {
    if (!selectedDoctorId || !selectedSlot) return;
    setBookingConfirmed(true);
    setAppointmentStep('dashboard');
    navigate('/doctor-dashboard', {
      state: {
        symptomText,
        result,
        doctor: selectedDoctor,
        slot: selectedSlot,
      },
    });
  }

  function handleBackToSymptoms() {
    navigate('/symptoms');
  }

  return (
    <section className="panel panel-output" aria-label="Appointment coordination">
      <h1 className="panel-title">Appointment coordination</h1>
      <p className="panel-description">
        Choose the right type of doctor, pick a clinician, and select a time
        that works for you.
      </p>

      <div className="appointment-flow">
        <div className="appointment-header">
          <h3>Booking steps</h3>
          <div className="appointment-steps">
            <span
              className={
                appointmentStep === 'specialization'
                  ? 'appointment-step appointment-step-active'
                  : 'appointment-step'
              }
            >
              1. Specialization
            </span>
            <span
              className={
                appointmentStep === 'doctor'
                  ? 'appointment-step appointment-step-active'
                  : 'appointment-step'
              }
            >
              2. Doctor
            </span>
            <span
              className={
                appointmentStep === 'slot'
                  ? 'appointment-step appointment-step-active'
                  : 'appointment-step'
              }
            >
              3. Slot
            </span>
            <span
              className={
                appointmentStep === 'confirmation'
                  ? 'appointment-step appointment-step-active'
                  : 'appointment-step'
              }
            >
              4. Confirm
            </span>
          </div>
        </div>

        <div className="appointment-body">
          {appointmentStep === 'specialization' && (
            <article className="card appointment-card">
              <h4>Suggested specialization</h4>
              <p className="appointment-specialization">{initialSpecialization}</p>
              <p>
                DocAI suggests this type of doctor based on your symptoms and
                risk level. You can still choose a different specialist later.
              </p>
              <div className="appointment-actions-row">
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={() => setAppointmentStep('doctor')}
                >
                  Continue to doctor list
                </button>
                <button
                  className="btn btn-ghost"
                  type="button"
                  onClick={handleBackToSymptoms}
                >
                  Back to symptom checker
                </button>
              </div>
            </article>
          )}

          {appointmentStep === 'doctor' && (
            <div className="doctor-grid">
              {doctors.map((doc) => (
                <article key={doc.id} className="card doctor-card">
                  <h4>{doc.name}</h4>
                  <p className="doctor-specialization">{doc.specialization}</p>
                  <p className="doctor-meta">{doc.location}</p>
                  <p className="doctor-meta">Next available: {doc.nextAvailable}</p>
                  <div className="appointment-actions-row">
                    <button
                      className="btn btn-outline"
                      type="button"
                      onClick={() => handleDoctorSelect(doc.id)}
                    >
                      Choose
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}

          {appointmentStep === 'slot' && selectedDoctor && (
            <article className="card appointment-card">
              <h4>Select a time slot</h4>
              <p className="doctor-meta">
                {selectedDoctor.name} · {selectedDoctor.location}
              </p>
              <div className="slot-grid">
                {selectedDoctor.slots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    className={
                      selectedSlot === slot
                        ? 'slot-chip slot-chip-selected'
                        : 'slot-chip'
                    }
                    onClick={() => handleSlotSelect(slot)}
                  >
                    {slot}
                  </button>
                ))}
              </div>
              <div className="appointment-actions-row">
                <button
                  className="btn btn-ghost"
                  type="button"
                  onClick={() => setAppointmentStep('doctor')}
                >
                  Back to doctors
                </button>
              </div>
            </article>
          )}

          {appointmentStep === 'confirmation' && selectedDoctor && selectedSlot && (
            <article className="card appointment-card">
              <h4>Confirm booking</h4>
              <p className="doctor-meta">
                {selectedDoctor.name} · {selectedDoctor.specialization}
              </p>
              <p className="doctor-meta">Clinic: {selectedDoctor.location}</p>
              <p className="appointment-summary">Slot: {selectedSlot}</p>
              <p>
                DocAI will send these details to the clinic so the doctor has a
                brief summary before your consultation.
              </p>
              <div className="appointment-actions-row">
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={handleConfirmBooking}
                >
                  Confirm booking
                </button>
                <button
                  className="btn btn-ghost"
                  type="button"
                  onClick={() => setAppointmentStep('slot')}
                >
                  Back
                </button>
              </div>
            </article>
          )}

          {!result && appointmentStep !== 'specialization' && (
            <p className="field-error">
              You reached the appointment flow directly. For a better
              experience, run the symptom checker first so we can attach a
              summary.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default AppointmentPage;
