import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function PrescriptionAnalyzerPage() {
  const location = useLocation();
  const incomingSource = location.state?.source;
  const incomingId = location.state?.prescriptionId;
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  function handleFileChange(event) {
    const selected = event.target.files?.[0];
    if (!selected) return;

    setError(null);
    setResult(null);
    setFile(selected);

    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    const url = URL.createObjectURL(selected);
    setPreviewUrl(url);
  }

  async function handleAnalyze() {
    if (!file) {
      setError('Please upload a prescription image or PDF first.');
      return;
    }

    setIsAnalyzing(true);
    setError(null);
    setResult(null);

    try {
      // TODO: Replace this with a real API call to your backend
      // const formData = new FormData();
      // formData.append('file', file);
      // const response = await fetch('/api/prescription/analyze', {
      //   method: 'POST',
      //   body: formData,
      // });
      // const data = await response.json();
      // setResult(data);

      const mockResult = {
        medicines: [
          {
            name: 'Amoxicillin',
            dosage: '500 mg',
            frequency: '3 times a day',
            duration: '5 days',
            notes: 'After food',
          },
          {
            name: 'Paracetamol',
            dosage: '650 mg',
            frequency: '2 times a day',
            duration: 'As needed for fever',
            notes: 'Max 3 g/day',
          },
          {
            name: 'Cetirizine',
            dosage: '10 mg',
            frequency: 'Once at night',
            duration: '7 days',
            notes: 'May cause drowsiness',
          },
        ],
      };

      await new Promise((resolve) => setTimeout(resolve, 900));
      setResult(mockResult);
    } catch (err) {
      console.error('Prescription analysis error', err);
      setError('We could not analyze this prescription. Please try again.');
    } finally {
      setIsAnalyzing(false);
    }
  }

  const isPdf = file && file.type === 'application/pdf';

  return (
    <div className="prescription-layout">
      <section className="panel panel-input" aria-label="Upload prescription">
        <h1 className="panel-title">Upload prescription</h1>
        <p className="panel-description">
          Upload a clear photo or PDF of your prescription. DocAI will try to
          read the medicines and organize them for you.
        </p>

        {incomingSource === 'stored' && incomingId && (
          <p className="preview-subtext">
            Opened from your library (ID: {incomingId}). Upload the matching
            file here to analyze it now.
          </p>
        )}

        <div className="upload-area">
          <label className="upload-drop" htmlFor="prescription-file">
            <span className="upload-icon" aria-hidden="true" />
            <div className="upload-text">
              <strong>Click to choose a file</strong>
              <span>or drag and drop</span>
              <span className="upload-hint">JPEG, PNG or PDF · up to ~10 MB</span>
            </div>
          </label>
          <input
            id="prescription-file"
            type="file"
            accept="image/*,application/pdf"
            onChange={handleFileChange}
            className="upload-input-hidden"
          />
          {file && (
            <p className="upload-file-name">Selected file: {file.name}</p>
          )}
          {error && <p className="field-error">{error}</p>}

          <div className="form-actions">
            <button
              className="btn btn-primary"
              type="button"
              disabled={isAnalyzing}
              onClick={handleAnalyze}
            >
              {isAnalyzing ? 'Analyzing...' : 'Analyze prescription'}
            </button>
            <button
              className="btn btn-outline"
              type="button"
              onClick={() => {
                setFile(null);
                setResult(null);
                setError(null);
                if (previewUrl) URL.revokeObjectURL(previewUrl);
                setPreviewUrl(null);
              }}
            >
              Clear
            </button>
          </div>
        </div>

        <div className="preview-panel">
          <h2 className="preview-title">Preview</h2>
          {!file && (
            <div className="placeholder">
              <p>
                You will see a thumbnail of your prescription here after you
                upload it.
              </p>
            </div>
          )}

          {file && isPdf && (
            <div className="preview-box preview-box-pdf">
              <span className="preview-badge">PDF</span>
              <p>{file.name}</p>
              <p className="preview-subtext">
                Your browser will open the PDF when you click on it.
              </p>
              <a
                href={previewUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline preview-link"
              >
                Open PDF in new tab
              </a>
            </div>
          )}

          {file && !isPdf && previewUrl && (
            <div className="preview-box">
              <img
                src={previewUrl}
                alt="Prescription preview"
                className="preview-image"
              />
            </div>
          )}
        </div>
      </section>

      <section className="panel panel-output" aria-label="Prescription analysis result">
        <h2 className="panel-title">Extracted medicines</h2>
        <p className="panel-description">
          DocAI lists the medicines it can read from your prescription.
          Always confirm these details with your doctor or pharmacist.
        </p>

        {isAnalyzing && (
          <div className="loading-state" aria-busy="true">
            <div className="loading-spinner" />
            <p>Reading your prescription — this usually takes a few seconds.</p>
          </div>
        )}

        {!isAnalyzing && result && result.medicines && result.medicines.length > 0 && (
          <div className="medicine-table-wrapper">
            <table className="medicine-table">
              <thead>
                <tr>
                  <th>Medicine</th>
                  <th>Dosage</th>
                  <th>How often?</th>
                  <th>For how long?</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {result.medicines.map((med) => (
                  <tr key={med.name}>
                    <td>{med.name}</td>
                    <td>{med.dosage}</td>
                    <td>{med.frequency}</td>
                    <td>{med.duration}</td>
                    <td>{med.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {!isAnalyzing && (!result || !result.medicines || result.medicines.length === 0) && (
          <div className="placeholder">
            <p>
              After you upload a prescription and run the analyzer, DocAI will
              show the medicines it detected in a simple table.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

export default PrescriptionAnalyzerPage;
