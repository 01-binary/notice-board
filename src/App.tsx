import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutPage from '@src/pages/layout';
import BoardPage from '@src/pages/board';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<BoardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
