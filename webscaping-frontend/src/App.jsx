// webscaping-frontend/src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import SignupForm from './pages/landing/SignUpForm';
import WebsiteDashboard from './pages/website-dashboard/WebsiteDashboard'; // New Import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<SignupForm />} />
        <Route path="/dashboard" element={<WebsiteDashboard />} /> {/* New Route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;