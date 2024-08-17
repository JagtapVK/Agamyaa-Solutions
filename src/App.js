import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Resources from './pages/Resources';
import Partners from './pages/Partners';
import ContactUs from './pages/ContactUs';

// import CallCenterServices from './components/CallCenterServices';
// import BackOfficeServices from './components/BackOfficeServices';
// import FOSServices from './components/FOSServices';
// import StaffingServices from './components/StaffingServices';
// import VoicesBroadcasting from './components/VoicesBroadcasting';
// import Blogs from './components/Blogs';
// import CaseStudies from './components/CaseStudies';

// import CallCenterServices from './CallCenterServices';
// import BackOfficeServices from './BackOfficeServices';
// import FOSServices from './FOSServices';
// import InboundCallCenterServices from './InboundCallCenterServices';
// import StaffingServices from './StaffingServices';
// import VideoBroadcastingServices from './VideoBroadcastingServices';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/aboutus" element={<AboutUs />} />

          <Route exact path="/services" element={<Services />} />

          {/* 
          <Route path="/services/call-center" element={<CallCenterServices />} />
          <Route path="/services/call-center" element={<CallCenterServices />} />

          <Route path="/services/back-office" element={<BackOfficeServices />} />
          <Route path="/services/back-office" element={<BackOfficeServices />} />

          <Route path="/services/fos" element={<FOSServices />} />
          <Route path="/services/fos" element={<FOSServices />} />

          <Route path="/services/staffing" element={<StaffingServices />} />
          <Route path="/services/staffing" element={<StaffingServices />} />

          <Route path="/services/voices-broadcasting" element={<VoicesBroadcasting />} />
          <Route path="/services/video-broadcasting" element={<VideoBroadcastingServices />} />

          <Route path="/services/inbound-call-center" element={<InboundCallCenterServices />} />

          */}

          <Route exact path="/resources" element={<Resources />} />
          {/* 
          <Route path="/resources/blogs" element={<Blogs />} />
          <Route path="/resources/case-studies" element={<CaseStudies />} />
          */}

          <Route exact path="/partners" element={<Partners />} />
          <Route exact path="/contact" element={<ContactUs />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;

