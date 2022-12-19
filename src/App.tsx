import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutPage from '@src/pages/layout';
import PostPage from '@src/pages/post';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<LayoutPage />}
        >
          <Route
            index
            element={<PostPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
