import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProviders } from 'providers/AppProviders';
import { MainTemplate } from 'components/templates/MainTemplate';
import Messages from 'components/views/Messages';
import Messageboards from 'components/views/Messageboards';

const Root = () => {
  return (
    <AppProviders>
      <MainTemplate>
        <Router>
          <Routes>
            <Route exact path="/messages" element={<Messages />} />
            <Route exact path="/messageboards" element={<Messageboards />} />
          </Routes>
        </Router>
      </MainTemplate>
    </AppProviders>
  );
};

export default Root;
