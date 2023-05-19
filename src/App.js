import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dictionary from './components/Dictionary';
import TermApprovalList from './components/TermApprovalList';
import TermCare from './components/TermCare';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dictionary />} />
        <Route path="/approval" element={<TermApprovalList />} />
        <Route path="/care" element={<TermCare />} />
      </Routes>
    </Router>
  );
}

export default App;
