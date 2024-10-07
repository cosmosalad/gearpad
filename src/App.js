import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home_gearpad from './pages/Home_gearpad';
import GearpadKr from './pages/GearpadKr';
import GearpadEn from './pages/GearpadEn';
import TypingPractice_gearpad from './pages/TypingPractice_gearpad';
import UsageGuidegearpad from './pages/UsageGuidegearpad';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/gearpad" element={<Home_gearpad />} />
        <Route path="/gearpad/korean" element={<GearpadKr />} />
        <Route path="/gearpad/english" element={<GearpadEn />} />
        <Route path="/gearpad/typingpractice" element={<TypingPractice_gearpad />} />
        <Route path="/gearpad/usageguide" element={<UsageGuidegearpad />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;