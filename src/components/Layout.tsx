
import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex flex-col h-screen bg-background">
      <Header />
      <main className="flex-grow overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
