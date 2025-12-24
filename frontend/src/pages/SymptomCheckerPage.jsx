import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SymptomCheckerPage() {
  const [symptomText, setSymptomText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleSymptomChange(event) {
    setSymptomText(event.target.value);
  }

  async function runSymptomCheck({ source }) {
    if (!symptomText.trim() && source === 'text') {
      setError('Please describe your symptoms first.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      // TODO: Replace with real backend call
      // const response = await fetch('/api/symptom-check', { ... });
      // const data = await response.json();
      // setResult(data);

      const mockResult = {
        riskLevel: 'needs_doctor', // 'routine' | 'needs_doctor' | 'urgent'
        summary:
          'Your symptoms suggest a non‑emergency issue, but a doctor should review them.',
        why:
          'Reported symptoms (cough, mild fever, fatigue) with no chest pain or breathing difficulty usually indicate a mild infection, but persistent fever can require medical review.',
        showAppointmentCta: true,
        suggestedSpecialization: 'General Physician',
      };

      await new Promise((resolve) => setTimeout(resolve, 900));
      setResult(mockResult);
    } catch (err) {
      console.error('Symptom check error', err);
      setError('We could not reach the checker service. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  function handleTextSubmit(event) {
    event.preventDefault();
    runSymptomCheck({ source: 'text' });
  }

  function handleMicClick() {
    alert('Voice input will be wired to the backend here.');
  }

  function handleStartAppointmentFlow() {
    if (!result) return;
    navigate('/appointment', {
      state: {
        symptomText,
        result,
      },
    });
  }

  return (
    <>
      {/* Symptom Input Page */}
      <section className="panel panel-input" aria-label="Symptom input">
        <h1 className="panel-title">Check your symptoms</h1>
        <p className="panel-description">
          Describe what you are feeling in your own words. DocAI will
          summarize the risk and explain why.
        </p>

        <form className="form-grid" onSubmit={handleTextSubmit}>
          <div className="field">
            <div className="field-label-row">
              <label htmlFor="symptoms">
                Symptom description
                <span className="field-label-hint">(required)</span>
              </label>
              <button
                type="button"
                className="mic-button"
                aria-label="Start voice input for symptoms"
                onClick={handleMicClick}
              >
                <span className="mic-icon" aria-hidden="true" />
              </button>
            </div>

            <textarea
              id="symptoms"
              name="symptoms"
              rows={6}
              placeholder="Example: I have had a dry cough and mild fever for 3 days, a bit tired, no chest pain or trouble breathing."
              value={symptomText}
              onChange={handleSymptomChange}
            />
          </div>

          {error && <p className="field-error">{error}</p>}

          <div className="form-actions">
            <button
              className="btn btn-primary"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? 'Checking...' : 'Check my symptoms'}
            </button>
            <button
              className="btn btn-outline"
              type="button"
              onClick={() => {
                setSymptomText('');
                setResult(null);
                setError(null);
              }}
            >
              Clear
            </button>
          </div>
        </form>
      </section>

      {/* Result Page */}
      <section
        className="panel panel-output"
        aria-label="Symptom checker result"
      >
        <h2 className="panel-title">Result</h2>
        <p className="panel-description">
          This is not a diagnosis. It is a risk-oriented explanation to help
          you decide what to do next.
        </p>

        {isLoading && (
          <div className="loading-state" aria-busy="true">
            <div className="loading-spinner" />
            <p>Analyzing your symptoms — this usually takes a few seconds.</p>
          </div>
        )}

        {!isLoading && result && (
          <>
            <div className="analysis-grid">
              <article className="card">
                <div className="risk-row">
                  <span
                    className={
                      result.riskLevel === 'urgent'
                        ? 'risk-badge risk-urgent'
                        : result.riskLevel === 'needs_doctor'
                          ? 'risk-badge risk-needs-doctor'
                          : 'risk-badge risk-routine'
                    }
                  >
                    {result.riskLevel === 'urgent' && 'Urgent'}
                    {result.riskLevel === 'needs_doctor' && 'Needs doctor'}
                    {result.riskLevel === 'routine' && 'Routine'}
                  </span>
                </div>
                <h3>Summary</h3>
                <p>{result.summary}</p>
              </article>

              <article className="card">
                <h3>Why this risk?</h3>
                <p>{result.why}</p>
              </article>

              {result.showAppointmentCta && (
                <article className="card card-secondary">
                  <h3>Next step</h3>
                  <p>
                    Based on this risk level, talking to a doctor is
                    recommended.
                  </p>
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={handleStartAppointmentFlow}
                  >
                    Start appointment flow
                  </button>
                </article>
              )}
            </div>
          </>
        )}

        {!isLoading && !result && (
          <div className="placeholder">
            <p>
              After you describe your symptoms and run the checker, DocAI will
              show a risk indicator, a simple summary, and a short explanation
              of why.
            </p>
          </div>
        )}
      </section>
    </>
  );
}

export default SymptomCheckerPage;
