import React from 'react';
import { AppProviders } from 'providers/AppProviders';
import NavigationBar from 'components/organisms/NavigationBar/NavigationBar';
import { MainTemplate } from 'components/templates/MainTemplate';
import Messageboard from 'components/organisms/Messageboard/Messageboard';

const Root = () => {
  return (
    <AppProviders>
      <MainTemplate>
        <NavigationBar />
        <Messageboard />
      </MainTemplate>
    </AppProviders>
  );
};

export default Root;
