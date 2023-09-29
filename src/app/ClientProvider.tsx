'use client';

import { Navbar, SideBar } from '@/components';
import SideBarPro from '@/components/SideBarPro';
import { useState } from 'react';

const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <SideBarPro open={open} toggleSidebar={toggleSidebar} />
      <div className="w-fit hidden 2xl:inline-block">
        <SideBar />
      </div>
      <div className="w-full">
        <Navbar toggleSidebar={toggleSidebar} />
        {children}
      </div>
    </>
  );
};

export default ClientProvider;
