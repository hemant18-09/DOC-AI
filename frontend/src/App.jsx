import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import AppLayout from './layouts/AppLayout.jsx';
import Symptoms from './pages/app/Symptoms.jsx';
import Appointments from './pages/app/Appointments.jsx';
import Timeline from './pages/app/Timeline.jsx';
import Summary from './pages/app/Summary.jsx';
import DoctorDashboardPage from './pages/DoctorDashboardPage.jsx';
import PrescriptionAnalyzerPage from './pages/PrescriptionAnalyzerPage.jsx';
import PrescriptionGalleryPage from './pages/PrescriptionGalleryPage.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/app" element={<AppLayout />}>
        <Route path="symptoms" element={<Symptoms />} />
        <Route path="appointments" element={<Appointments />} />
        <Route path="timeline" element={<Timeline />} />
        <Route path="summary" element={<Summary />} />
        <Route path="prescriptions" element={<PrescriptionGalleryPage />} />
        <Route path="prescription" element={<PrescriptionAnalyzerPage />} />
        <Route path="doctor-dashboard" element={<DoctorDashboardPage />} />
      </Route>
    </Routes>
  );
}

export default App;
