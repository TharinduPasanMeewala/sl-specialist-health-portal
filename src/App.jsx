import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import DashboardPage from './pages/Dashboard.jsx'
import DoctorPage from './pages/Doctor.jsx'
import SpecializationPage from './pages/Specialization.jsx'
import AppointmentPage from './pages/Appointment.jsx'

export default function App() {
  return <BrowserRouter><Routes><Route element={<Layout />}>
    <Route path="/" element={<DashboardPage />} />
    <Route path="/doctor" element={<DoctorPage />} />
    <Route path="/specialization" element={<SpecializationPage />} />
    <Route path="/appointment" element={<AppointmentPage />} />
  </Route></Routes></BrowserRouter>
}