function DoctorView({ goTo }) {
  return (
    <>
      <div>
        <h2 className="card-title">Upcoming Appointment</h2>
        <div
          className="card"
          style={{
            borderLeft: '4px solid var(--primary-teal)',
            paddingBottom: '16px',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '16px',
            }}
          >
            <div>
              <h3 style={{ margin: 0, fontSize: '18px' }}>Video Follow-up</h3>
              <p
                style={{
                  margin: '4px 0 0 0',
                  color: 'var(--text-soft)',
                  fontSize: '14px',
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
              style={{ fontSize: '13px' }}
            >
              Confirmed with Dr. Chen
            </span>
            <button
              className="small-btn"
              onClick={() => alert('Demo: Joining video visit link')}
            >
              Join Link
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2
          className="card-title"
          style={{ marginTop: '12px', marginBottom: '16px' }}
        >
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
              <h3 className="item-title" style={{ margin: 0, fontSize: '17px' }}>
                Dr. Sarah Chen
              </h3>
              <span className="item-sub">
                Primary Care (PCP) • Last visit: Nov 15
              </span>
            </div>
          </div>
          <button
            className="small-btn"
            onClick={() => goTo('slots')}
          >
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
              <h3 className="item-title" style={{ margin: 0, fontSize: '17px' }}>
                Dr. Anika Patel
              </h3>
              <span className="item-sub">
                Dermatology • Last visit: Aug 10
              </span>
            </div>
          </div>
          <button
            className="small-btn"
            onClick={() => goTo('slots')}
          >
            Book Again
          </button>
        </div>
      </div>
    </>
  )
}

export default DoctorView
