import { useState, useEffect } from 'react';
import './DocAIPatientDemo.css';

function DocAIPatientDemo() {
  const [activeView, setActiveView] = useState('home');
  const [inputMode, setInputMode] = useState('speak');

  const handleSwitchView = (view) => {
    setActiveView(view);
  };

  const handleEnterInputMode = (mode) => {
    setInputMode(mode);
    setActiveView('home-input');
  };

  useEffect(() => {
    // Default to home on mount, mirroring the original behavior
    setActiveView('home');
  }, []);

  const isStartHereActive = ['home', 'home-input', 'triage', 'slots'].includes(
    activeView
  );

  return (
    <div className="docai-page">
      <header className="header">
        <div className="logo">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" />
            <path d="M12 8V16" />
            <path d="M8 12H16" />
          </svg>
          DocAI
        </div>
        <nav className="desktop-nav">
          <button
            type="button"
            className={isStartHereActive ? 'nav-link active' : 'nav-link'}
            onClick={() => handleSwitchView('home')}
          >
            Start Here
          </button>
          <button
            type="button"
            className={
              activeView === 'meds' ? 'nav-link active' : 'nav-link'
            }
            onClick={() => handleSwitchView('meds')}
          >
            Medication
          </button>
          <button
            type="button"
            className={
              activeView === 'doctor' ? 'nav-link active' : 'nav-link'
            }
            onClick={() => handleSwitchView('doctor')}
          >
            My Doctor
          </button>
          <button
            type="button"
            className={
              activeView === 'stores' ? 'nav-link active' : 'nav-link'
            }
            onClick={() => handleSwitchView('stores')}
          >
            Availability
          </button>
          <button
            type="button"
            className={
              activeView === 'records' ? 'nav-link active' : 'nav-link'
            }
            onClick={() => handleSwitchView('records')}
          >
            Records
          </button>
        </nav>
        <div className="avatar" title="Profile Settings" />
      </header>

      <main className="main-container">
        {/* Home view */}
        <section
          className={
            activeView === 'home'
              ? 'view-section active-view'
              : 'view-section'
          }
        >
          <div className="card home-hero-card">
            <h1 className="home-hero-title">What's bothering you today?</h1>
            <p className="card-subtitle">
              Describe how you're feeling in your own words.
            </p>
            <div className="input-toggles">
              <button
                type="button"
                className={
                  inputMode === 'speak' ? 'toggle-btn active' : 'toggle-btn'
                }
                onClick={() => handleEnterInputMode('speak')}
              >
                <span role="img" aria-label="Speak">
                  🎤
                </span>
                Speak
              </button>
              <button
                type="button"
                className={
                  inputMode === 'type' ? 'toggle-btn active' : 'toggle-btn'
                }
                onClick={() => handleEnterInputMode('type')}
              >
                <span role="img" aria-label="Type">
                  ✍️
                </span>
                Type
              </button>
            </div>
            <button className="cta-button" type="button" disabled>
              Continue
            </button>
          </div>
          <div className="trust-badges-container">
            <div className="trust-badge">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              Private Data
            </div>
            <div className="trust-badge">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Secure
            </div>
          </div>
          <div className="secondary-actions-grid">
            <button
              type="button"
              className="action-card-small"
              onClick={() => handleSwitchView('home-input')}
            >
              <div className="action-card-icon">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <div className="action-card-title">Symptom Checker</div>
              <div className="action-card-desc">
                Check your symptoms and get a risk assessment.
              </div>
            </button>
            <button
              type="button"
              className="action-card-small"
              onClick={() => handleSwitchView('rx-upload')}
            >
              <div className="action-card-icon">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <div className="action-card-title">Rx Analyzer</div>
              <div className="action-card-desc">
                Upload and analyze a prescription.
              </div>
            </button>
          </div>
        </section>

        {/* Symptom input view */}
        <section
          className={
            activeView === 'home-input'
              ? 'view-section active-view'
              : 'view-section'
          }
        >
          <div className="card home-hero-card">
            <h1 className="home-hero-title">Adding details...</h1>
            <textarea
              className="active-input-area"
              rows={4}
              defaultValue="My head has been pounding since I woke up, and bright lights really hurt my eyes. I feel a bit nauseous too."
            />
            <p className="helper-text">
              DocAI does not diagnose. It helps decide next steps.
            </p>
            <button
              className="cta-button"
              type="button"
              onClick={() => handleSwitchView('triage')}
            >
              Analyze Symptoms
            </button>
          </div>
          <button
            type="button"
            className="link-button"
            onClick={() => handleSwitchView('home')}
          >
            Cancel
          </button>
        </section>

        {/* Triage view */}
        <section
          className={
            activeView === 'triage'
              ? 'view-section active-view'
              : 'view-section'
          }
        >
          <div className="triage-banner">
            <h3>Suggested Next Step: Consult a Doctor Today</h3>
            <p style={{ margin: 0, fontSize: 14 }}>
              Based on your symptoms, a professional evaluation is recommended
              soon.
            </p>
          </div>
          <div className="card">
            <h2 className="card-title">Analysis Summary</h2>
            <p className="reasoning-text">
              You reported a <strong>pounding headache</strong> accompanied by{' '}
              <strong>light sensitivity</strong> and <strong>nausea</strong>.
              These combined symptoms warrant a discussion with a healthcare
              provider to rule out acute conditions.
            </p>
          </div>
          <div
            className="card"
            style={{
              backgroundColor: 'var(--primary-teal-light)',
              border: '1px solid var(--primary-teal)',
            }}
          >
            <h2 className="card-title" style={{ color: 'var(--primary-teal)' }}>
              Recommended Action
            </h2>
            <p>Book a same-day video visit with a primary care provider.</p>
            <button
              className="cta-button"
              type="button"
              onClick={() => handleSwitchView('slots')}
            >
              Find Available Appointments
            </button>
          </div>
          <button
            type="button"
            className="link-button"
            onClick={() => handleSwitchView('home')}
          >
            Start Over
          </button>
        </section>

        {/* Slots view */}
        <section
          className={
            activeView === 'slots'
              ? 'view-section active-view'
              : 'view-section'
          }
        >
          <h1 className="card-title" style={{ marginBottom: 8 }}>
            Available Appointments
          </h1>
          <div className="location-header">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Near Current Location (San Francisco, CA)
          </div>
          <div className="slot-card">
            <div className="doc-info-header">
              <div className="doc-details">
                <h3 className="doc-name">Dr. Emily Yu</h3>
                <span className="doc-specialty">Primary Care Physician</span>
                <span className="doc-distance">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  0.8 miles away
                </span>
              </div>
              <img
                src="https://i.pravatar.cc/150?img=42"
                className="doc-avatar"
                alt="Dr Yu"
              />
            </div>
            <div className="slots-container">
              <div className="slot-row">
                <span className="slot-day">Today</span>
                <div className="slot-pills">
                  <button
                    type="button"
                    className="slot-pill"
                    onClick={() => window.alert('Demo: Booking slot for 2:30 PM')}
                  >
                    2:30 PM
                  </button>
                  <button
                    type="button"
                    className="slot-pill"
                    onClick={() => window.alert('Demo: Booking slot for 4:00 PM')}
                  >
                    4:00 PM
                  </button>
                </div>
              </div>
              <div className="slot-row">
                <span className="slot-day">Tmrw</span>
                <div className="slot-pills">
                  <button
                    type="button"
                    className="slot-pill"
                    onClick={() => window.alert('Demo: Booking slot for 9:00 AM')}
                  >
                    9:00 AM
                  </button>
                  <button
                    type="button"
                    className="slot-pill"
                    onClick={() =>
                      window.alert('Demo: Booking slot for 11:15 AM')
                    }
                  >
                    11:15 AM
                  </button>
                  <button
                    type="button"
                    className="slot-pill"
                    onClick={() =>
                      window.alert('Demo: Booking slot for 3:45 PM')
                    }
                  >
                    3:45 PM
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="slot-card">
            <div className="doc-info-header">
              <div className="doc-details">
                <h3 className="doc-name">Dr. Michael Chen</h3>
                <span className="doc-specialty">Internal Medicine</span>
                <span className="doc-distance">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  1.5 miles away
                </span>
              </div>
              <img
                src="https://i.pravatar.cc/150?img=11"
                className="doc-avatar"
                alt="Dr Chen"
              />
            </div>
            <div className="slots-container">
              <div className="slot-row">
                <span className="slot-day">Today</span>
                <div className="slot-pills">
                  <button
                    type="button"
                    className="slot-pill"
                    onClick={() =>
                      window.alert('Demo: Booking slot for 5:15 PM')
                    }
                  >
                    5:15 PM
                  </button>
                </div>
              </div>
              <div className="slot-row">
                <span className="slot-day">Tmrw</span>
                <div className="slot-pills">
                  <button
                    type="button"
                    className="slot-pill"
                    onClick={() =>
                      window.alert('Demo: Booking slot for 10:30 AM')
                    }
                  >
                    10:30 AM
                  </button>
                  <button
                    type="button"
                    className="slot-pill"
                    onClick={() => window.alert('Demo: Booking slot for 1:00 PM')}
                  >
                    1:00 PM
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="link-button"
            onClick={() => handleSwitchView('triage')}
          >
            Back
          </button>
        </section>

        {/* Rx upload view */}
        <section
          className={
            activeView === 'rx-upload'
              ? 'view-section active-view'
              : 'view-section'
          }
        >
          <div className="card home-hero-card">
            <h1 className="home-hero-title">Upload Prescription</h1>
            <p className="card-subtitle">
              Take a photo or upload an image of your prescription.
            </p>
            <div
              style={{
                border: '2px dashed var(--primary-teal)',
                borderRadius: 12,
                padding: 40,
                textAlign: 'center',
                color: 'var(--text-soft)',
                cursor: 'pointer',
                marginBottom: 24,
              }}
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ marginBottom: 12 }}
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
              <p style={{ margin: 0, fontWeight: 500 }}>Tap to upload</p>
              <p style={{ margin: '4px 0 0 0', fontSize: 13 }}>
                Supports JPG, PNG, PDF
              </p>
            </div>
            <button
              className="cta-button"
              type="button"
              onClick={() => handleSwitchView('rx-analysis')}
            >
              Analyze
            </button>
          </div>
          <button
            type="button"
            className="link-button"
            onClick={() => handleSwitchView('home')}
          >
            Cancel
          </button>
        </section>

        {/* Rx analysis view */}
        <section
          className={
            activeView === 'rx-analysis'
              ? 'view-section active-view'
              : 'view-section'
          }
        >
          <div className="triage-banner banner-success">
            <h3>Analysis Complete</h3>
            <p style={{ margin: 0, fontSize: 14 }}>
              Prescription details extracted successfully.
            </p>
          </div>

          <div className="card">
            <h2 className="card-title">Detected Medication</h2>
            <div className="list-item-card" style={{ border: 'none', padding: 0 }}>
              <div className="item-left">
                <span className="item-title" style={{ fontSize: 18 }}>
                  Amoxicillin
                </span>
                <span className="item-sub" style={{ fontSize: 15 }}>
                  500mg capsule • Take 1 capsule every 12 hours for 10 days.
                </span>
              </div>
            </div>
          </div>

          <div
            className="triage-banner banner-alert"
            style={{ display: 'flex', gap: 12, marginTop: 12 }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--accent-red)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ flexShrink: 0 }}
            >
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <div>
              <h3 style={{ margin: '0 0 4px 0', fontSize: 16 }}>
                Potential Interaction Alert
              </h3>
              <p
                style={{ margin: 0, fontSize: 14, color: 'var(--text-dark)' }}
              >
                Amoxicillin may interact with <strong>Lisinopril</strong>{' '}
                (currently in your medication list). Consult your doctor.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 12, marginTop: 12 }}>
            <button
              className="cta-button secondary"
              type="button"
              onClick={() => handleSwitchView('records')}
            >
              Save to Records
            </button>
            <button
              className="cta-button"
              type="button"
              onClick={() => handleSwitchView('doctor')}
            >
              Consult Doctor
            </button>
          </div>
        </section>

        {/* Meds view */}
        <section
          className={
            activeView === 'meds'
              ? 'view-section active-view'
              : 'view-section'
          }
        >
          <h1 className="card-title" style={{ fontSize: 24 }}>
            Today's Schedule
          </h1>
          <div className="list-item-card">
            <div className="item-left">
              <span className="item-title">Lisinopril (10mg)</span>
              <span className="item-sub">Taken at 8:00 AM</span>
            </div>
            <span className="status-pill status-done">Taken</span>
          </div>
          <div
            className="list-item-card"
            style={{ borderColor: 'var(--primary-teal)' }}
          >
            <div className="item-left">
              <span className="item-title">Atorvastatin (20mg)</span>
              <span className="item-sub">Due: Evening (8:00 PM)</span>
            </div>
            <button type="button" className="small-btn">
              Mark Taken
            </button>
          </div>
          <h2 className="card-title" style={{ marginTop: 24 }}>
            As Needed
          </h2>
          <div className="list-item-card">
            <div className="item-left">
              <span className="item-title">Ibuprofen (200mg)</span>
              <span className="item-sub">
                For pain relief. Max 3 per day.
              </span>
            </div>
          </div>
        </section>

        {/* Doctor view */}
        <section
          className={
            activeView === 'doctor'
              ? 'view-section active-view'
              : 'view-section'
          }
        >
          <div>
            <h2 className="card-title">Upcoming Appointment</h2>
            <div
              className="card"
              style={{
                borderLeft: '4px solid var(--primary-teal)',
                paddingBottom: 16,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: 16,
                }}
              >
                <div>
                  <h3 style={{ margin: 0, fontSize: 18 }}>Video Follow-up</h3>
                  <p
                    style={{
                      margin: '4px 0 0 0',
                      color: 'var(--text-soft)',
                      fontSize: 14,
                      fontWeight: 500,
                    }}
                  >
                    Tomorrow, Dec 26 • 10:00 AM
                  </p>
                </div>
                <img
                  src="https://i.pravatar.cc/150?img=47"
                  className="doc-avatar"
                  alt="Dr Chen"
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span
                  className="status-pill status-due"
                  style={{ fontSize: 13 }}
                >
                  Confirmed with Dr. Chen
                </span>
                <button type="button" className="small-btn">
                  Join Link
                </button>
              </div>
            </div>
          </div>
          <div>
            <h2 className="card-title" style={{ marginTop: 12, marginBottom: 16 }}>
              Previously Consulted
            </h2>
            <div className="doc-list-item">
              <div className="doc-profile">
                <img
                  src="https://i.pravatar.cc/150?img=47"
                  className="doc-avatar"
                  alt="Dr Chen"
                />
                <div>
                  <h3 className="item-title" style={{ margin: 0, fontSize: 17 }}>
                    Dr. Sarah Chen
                  </h3>
                  <span className="item-sub">
                    Primary Care (PCP) • Last visit: Nov 15
                  </span>
                </div>
              </div>
              <button type="button" className="small-btn">
                Book Again
              </button>
            </div>
            <div className="doc-list-item">
              <div className="doc-profile">
                <img
                  src="https://i.pravatar.cc/150?img=12"
                  className="doc-avatar"
                  alt="Dr Patel"
                />
                <div>
                  <h3 className="item-title" style={{ margin: 0, fontSize: 17 }}>
                    Dr. Anika Patel
                  </h3>
                  <span className="item-sub">
                    Dermatology • Last visit: Aug 10
                  </span>
                </div>
              </div>
              <button type="button" className="small-btn">
                Book Again
              </button>
            </div>
          </div>
        </section>

        {/* Stores view */}
        <section
          className={
            activeView === 'stores'
              ? 'view-section active-view'
              : 'view-section'
          }
        >
          <div
            style={{
              height: 180,
              backgroundColor: '#E2E8F0',
              borderRadius: 16,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'var(--text-soft)',
              marginBottom: 20,
              backgroundImage:
                "url('https://mt.google.com/vt/lyrs=m&x=10&y=10&z=5')",
              backgroundSize: 'cover',
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(255,255,255,0.5)',
                borderRadius: 16,
              }}
            />
            <div
              style={{
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                background: 'white',
                padding: '8px 16px',
                borderRadius: 20,
                boxShadow: 'var(--card-shadow)',
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                style={{ marginRight: 8, color: 'var(--primary-teal)' }}
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span style={{ fontWeight: 600, fontSize: 14 }}>
                Current Location
              </span>
            </div>
          </div>
          <h2 className="card-title">Nearby Pharmacies</h2>
          <div className="list-item-card">
            <div className="item-left">
              <span className="item-title">CVS Pharmacy</span>
              <span className="item-sub">0.5 miles • Open until 10 PM</span>
            </div>
            <button
              type="button"
              className="small-btn"
              style={{ background: '#F1F5F9', color: 'var(--text-dark)' }}
            >
              Directions
            </button>
          </div>
          <div className="list-item-card">
            <div className="item-left">
              <span className="item-title">Walgreens</span>
              <span className="item-sub">1.2 miles • 24 Hours</span>
            </div>
            <button
              type="button"
              className="small-btn"
              style={{ background: '#F1F5F9', color: 'var(--text-dark)' }}
            >
              Directions
            </button>
          </div>
        </section>

        {/* Records view */}
        <section
          className={
            activeView === 'records'
              ? 'view-section active-view'
              : 'view-section'
          }
        >
          <h1 className="card-title" style={{ fontSize: 24 }}>
            Medical History
          </h1>

          <button
            type="button"
            className="action-card-dashed"
            onClick={() => handleSwitchView('rx-upload')}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginBottom: 8 }}
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            <h3 style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>
              Add New Record
            </h3>
            <p style={{ margin: '4px 0 0 0', fontSize: 14, opacity: 0.8 }}>
              Upload prescriptions, lab reports, or images.
            </p>
          </button>

          <h2 className="section-subtitle">Your Timeline</h2>

          <div className="list-item-card">
            <div className="item-left">
              <span className="history-pill pill-summary">Summary</span>
              <span className="item-title">Symptom Summary: Headache</span>
              <span className="item-sub">
                Today • View patient & doctor summaries.
              </span>
            </div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#CBD5E0"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
          <div className="list-item-card">
            <div className="item-left">
              <span className="history-pill pill-prescription">Prescription</span>
              <span className="item-title">Prescription Image</span>
              <span className="item-sub">
                Nov 15, 2023 • View or analyze image.
              </span>
            </div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#CBD5E0"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          </div>
          <div className="list-item-card">
            <div className="item-left">
              <span className="history-pill pill-report">Report</span>
              <span className="item-title">Lab Results: Lipid Panel</span>
              <span className="item-sub">Nov 14, 2023 • Reviewed</span>
            </div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#CBD5E0"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        </section>
      </main>

      {/* Mobile bottom navigation */}
      <nav className="mobile-bottom-nav">
        <button
          type="button"
          className={
            isStartHereActive
              ? 'mobile-nav-item active'
              : 'mobile-nav-item'
          }
          onClick={() => handleSwitchView('home')}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span>Home</span>
        </button>
        <button
          type="button"
          className={
            activeView === 'meds'
              ? 'mobile-nav-item active'
              : 'mobile-nav-item'
          }
          onClick={() => handleSwitchView('meds')}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10.5 20.5l10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7z" />
            <path d="M8.5 8.5l7 7" />
          </svg>
          <span>Meds</span>
        </button>
        <button
          type="button"
          className={
            activeView === 'doctor'
              ? 'mobile-nav-item active'
              : 'mobile-nav-item'
          }
          onClick={() => handleSwitchView('doctor')}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" />
            <path d="M12 11h.01" />
            <path d="M12 7h.01" />
            <path d="M16 16h2" />
            <path d="M17 14v4" />
          </svg>
          <span>Doctor</span>
        </button>
        <button
          type="button"
          className={
            activeView === 'stores'
              ? 'mobile-nav-item active'
              : 'mobile-nav-item'
          }
          onClick={() => handleSwitchView('stores')}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 9l2-5h14l2 5" />
            <path d="M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9" />
            <path d="M9 22v-8h6v8" />
          </svg>
          <span>Stores</span>
        </button>
        <button
          type="button"
          className={
            activeView === 'records'
              ? 'mobile-nav-item active'
              : 'mobile-nav-item'
          }
          onClick={() => handleSwitchView('records')}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
          <span>Records</span>
        </button>
      </nav>
    </div>
  );
}

export default DocAIPatientDemo;
