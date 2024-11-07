import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './header/Header';
import Main from './pages/SGEE_Main_Web';
import Sub1 from './pages/SGEE_Sub1_Intro(SGEE)';
import Sub2 from './pages/SGEE_Sub2_Intro(SINI)';
import Sub3 from './pages/SGEE_Sub3_Edu';
import Sub4 from './pages/SGEE_Sub4_Cont';

function App() {
    return (
        <Router>
            <div style={{ width: '1440px', margin: '0 auto' }}>
                <Header />
                <Routes>
                    <Route path="/main" element={<Main />} />
                    <Route path="/sub1" element={<Sub1 />} />
                    <Route path="/sub2" element={<Sub2 />} />
                    <Route path="/sub3" element={<Sub3 />} />
                    <Route path="/sub4" element={<Sub4 />} />
                    <Route path="*" element={<Main />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
