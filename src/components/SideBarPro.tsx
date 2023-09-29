'use client';

import { SideBar } from '@/components';

const SideBarPro = ({
  open,
  toggleSidebar,
}: {
  open: boolean;
  toggleSidebar: () => void;
}) => {
  const rClass = open ? 'absolute' : 'hidden';

  return (
    <div className={`${rClass} backdrop-brightness-50 w-full z-50`}>
      <SideBar open={open} toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default SideBarPro;
