import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Index from "./pages/Index"; // new home page
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Users from "./pages/Users";
import PrivateRoute from "./components/PrivateRoute";
import AdminRoute from "./components/AdminRoute";
import GroomingForm from "./pages/GroomingForm";
import AdminAppointments from "./pages/AdminAppointments";
import MyAppointments from "./pages/MyAppointments";
import GroomingServices from "./pages/GroomingServices";
import FeedbackForm from "./pages/FeedbackForm";
import AdminReports from "./pages/AdminReports";
import PetWalking from "./pages/PetWalking";
import VetCare from "./pages/VetCare";
import PetTraining from "./pages/PetTraining";
import PetBoarding from "./pages/PetBoarding";
import PetAdoption from "./pages/PetAdoption";
import MorningWalk from "./pages/MorningWalk";
import EveningWalk from "./pages/EveningWalk";
import LongWalk from "./pages/LongWalk";
import GroupWalk from "./pages/GroupWalk";
import VetForm from "./pages/VetForm";
import PuppyTraining from "./pages/PuppyTraining";
import AdvancedSkills from "./pages/AdvancedSkills";
import BehaviorCorrection from "./pages/BehaviorCorrection";
import BasicObedience from "./pages/BasicObedience";
import AdminPets from "./pages/AdminPets";
import AdminAdoptions from "./pages/AdminAdoptions";
import UserAdoptions from "./pages/UserAdoptions";
import Contact from "./pages/Contact";


export default function App() {
  return (
    <>
      <Navbar />
      <div className="container" style={{ paddingTop: 20 }}>
        <Routes>
          {/* Default route → Index page */}
          <Route path="/" element={<Index />} />

          {/* Public Routes */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          {/* Private Routes - Only logged in users */}
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/grooming" element={<GroomingServices />} />
            <Route path="/walking" element={<PetWalking />} />
            <Route path="/vet" element={<VetCare />} />
            <Route path="/training" element={<PetTraining />} />
            <Route path="/boarding" element={<PetBoarding />} />
            <Route path="/adoption" element={<PetAdoption />} />
            <Route path="/grooming/form" element={<GroomingForm />} />
            <Route path="/appointments" element={<MyAppointments />} />
            <Route path="/feedback" element={<FeedbackForm />} />
            <Route path="/walking/morning" element={<MorningWalk />} />
            <Route path="/walking/evening" element={<EveningWalk />} />
            <Route path="/walking/long" element={<LongWalk />} />
            <Route path="/walking/group" element={<GroupWalk />} />
            <Route path="/vet/form" element={<VetForm />} />
            <Route path="/training/puppy" element={<PuppyTraining />} />
            <Route path="/training/advanced" element={<AdvancedSkills />} />
            <Route path="/training/correction" element={<BehaviorCorrection />} />
            <Route path="/training/obedience" element={<BasicObedience />} />
            <Route path="/adoptions/my" element={<UserAdoptions />} />
            <Route path="/contact" element={<Contact />} />

            
            

          </Route>

          {/* Admin Routes - Only admin users */}
          <Route element={<AdminRoute />}>
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/appointments" element={<AdminAppointments />} />
            <Route path="/admin/feedback" element={<AdminReports />} />
           <Route path="/admin/pets" element={<AdminPets />} />
            <Route path="/admin/adoptions" element={<AdminAdoptions />} />


          </Route>

          {/* Catch-all Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </>
  );
}
