import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import SubNav from './components/SubNav/SubNav';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import VisionMission from './pages/Vision&Mission/Vision&Mission';
import LibraryCollections from './pages/LibraryCollections/LibraryCollections';
import LibraryStaff from './pages/LibraryStaff/LibraryStaff';
import TypesOfMembership from './pages/Memberships/TypesOfMembership';
import TermsOfMembership from './pages/Memberships/TermsOfMembership';
import WebOPAC from './pages/WebOPAC/WebOPAC';
import ESearchHelp from './pages/ESearchHelp/ESearchHelp';
import Inflibnet from './pages/Inflibnet/Inflibnet';
import EResources from './pages/EResources/EResources';
import Contact from './pages/Contact/Contact';
import Journal from './pages/Journal/Journal';
import Footer from './components/Footer/Footer';
// import Auth from './pages/Auth';
import { AuthProvider, useAuth } from './AuthContext';
import './App.css'
import Manuscript from './pages/Manuscripts/Manuscript';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <SubNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vision" element={<VisionMission />} />
          <Route path="/collections" element={<LibraryCollections />} />
          <Route path="/staff" element={<LibraryStaff />} />
          <Route path="/typesOfMembership" element={<TypesOfMembership />} />
          <Route path="/termsOfMembership" element={<TermsOfMembership />} />
          <Route path="/webopac" element={<WebOPAC />} />
          <Route path="/eSearchHelp" element={<ESearchHelp />} />
          <Route path="/inflibnet" element={<Inflibnet />} />
          <Route path="/eResources" element={<EResources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/journal" element={<Journal />} />
          {/* <Route path="/adminlogin" element={<Auth />} /> */}
          <Route path='/manuscripts' element={<Manuscript />} />
          <Route path="/private" element={<PrivateComponent />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

function PrivateComponent() {
  return <h2>Private Component</h2>; // Example of a private component
}

export default App;
