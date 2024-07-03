import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'; // Import your Tailwind CSS file here
import Movies from './components/Movies';
import AnimeApp from './components/AnimeApp';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AnimeApp />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </Router>
  );
};

export default App;
