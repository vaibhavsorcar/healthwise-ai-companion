
import React from 'react';
import Header from './Header';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isChat = location.pathname === '/chat';
  
  return (
    <div className={`flex flex-col min-h-screen bg-background ${isChat ? 'overflow-hidden' : ''}`}>
      {isHome && <Header />}
      <main className={`flex-grow ${isChat ? 'overflow-hidden' : ''}`}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
